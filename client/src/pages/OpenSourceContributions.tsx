
// OpenSourceContributions.tsx
import { useEffect, useMemo, useState, type JSX } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Star,
  Clock,
  Search,
  Tag,
  ExternalLink,
  AlertTriangle,
  GitBranch,
  Users,
  TrendingUp,
} from "lucide-react";

type RepoInput = {
  owner: string;
  repo: string;
  url: string;
};

type RepoData = {
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  forks_count: number;
  open_issues_count: number;
  homepage?: string | null;
  topics?: string[];
};

type CommitData = {
  sha: string;
  html_url: string;
  message: string;
  author_name?: string | null;
  date?: string | null;
};

type CardData = {
  repo: RepoData | null;
  commits: CommitData[];
  input: RepoInput;
  error?: string | null;
  lastFetched?: number;
  isOfflineData?: boolean;
};

const REPOS: RepoInput[] = [
  {
    owner: "Open-Source-Chandigarh",
    repo: "SearchMovies",
    url: "https://github.com/Open-Source-Chandigarh/SearchMovies",
  },
  {
    owner: "Open-Source-Chandigarh",
    repo: "MeTube",
    url: "https://github.com/Open-Source-Chandigarh/MeTube",
  },
  {
    owner: "Open-Source-Chandigarh",
    repo: "Heritage-Threads",
    url: "https://github.com/Open-Source-Chandigarh/Heritage-Threads",
  },
];

// Fallback data when API is unavailable
const FALLBACK_DATA: Record<string, CardData> = {
  SearchMovies: {
    repo: {
      full_name: "Open-Source-Chandigarh/SearchMovies",
      html_url: "https://github.com/Open-Source-Chandigarh/SearchMovies",
      description:
        "A React application for searching and discovering movies with an intuitive interface",
      stargazers_count: 2,
      language: "CSS",
      updated_at: "2024-10-30T11:56:00Z",
      forks_count: 5,
      open_issues_count: 4,
      homepage: "https://search-movies-snowy.vercel.app",
      topics: ["css", "hacktoberfest", "react", "vite"],
    },
    commits: [
      {
        sha: "abc123",
        html_url:
          "https://github.com/Open-Source-Chandigarh/SearchMovies/commit/abc123",
        message: "feat: Add movie search functionality with responsive design",
        author_name: "Contributor",
        date: "2024-10-29T10:30:00Z",
      },
      {
        sha: "def456",
        html_url:
          "https://github.com/Open-Source-Chandigarh/SearchMovies/commit/def456",
        message:
          "fix: Resolve API integration issues and improve error handling",
        author_name: "Developer",
        date: "2024-10-28T14:20:00Z",
      },
      {
        sha: "ghi789",
        html_url:
          "https://github.com/Open-Source-Chandigarh/SearchMovies/commit/ghi789",
        message: "docs: Update README with installation and usage instructions",
        author_name: "Maintainer",
        date: "2024-10-27T09:15:00Z",
      },
    ],
    input: REPOS[0],
    isOfflineData: true,
  },
  MeTube: {
    repo: {
      full_name: "Open-Source-Chandigarh/MeTube",
      html_url: "https://github.com/Open-Source-Chandigarh/MeTube",
      description: "A YouTube clone built with modern web technologies",
      stargazers_count: 8,
      language: "JavaScript",
      updated_at: "2024-10-28T16:45:00Z",
      forks_count: 12,
      open_issues_count: 2,
      topics: ["javascript", "react", "video-streaming", "hacktoberfest"],
    },
    commits: [
      {
        sha: "xyz123",
        html_url:
          "https://github.com/Open-Source-Chandigarh/MeTube/commit/xyz123",
        message: "feat: Implement video player with custom controls",
        author_name: "VideoExpert",
        date: "2024-10-28T12:00:00Z",
      },
      {
        sha: "uvw456",
        html_url:
          "https://github.com/Open-Source-Chandigarh/MeTube/commit/uvw456",
        message: "refactor: Optimize video loading performance",
        author_name: "PerformanceGuru",
        date: "2024-10-27T18:30:00Z",
      },
    ],
    input: REPOS[1],
    isOfflineData: true,
  },
  "Heritage-Threads": {
    repo: {
      full_name: "Open-Source-Chandigarh/Heritage-Threads",
      html_url: "https://github.com/Open-Source-Chandigarh/Heritage-Threads",
      description:
        "An e-commerce platform showcasing traditional Indian clothing",
      stargazers_count: 15,
      language: "TypeScript",
      updated_at: "2024-10-26T08:20:00Z",
      forks_count: 8,
      open_issues_count: 6,
      topics: ["typescript", "ecommerce", "cultural-heritage", "react"],
    },
    commits: [
      {
        sha: "rst789",
        html_url:
          "https://github.com/Open-Source-Chandigarh/Heritage-Threads/commit/rst789",
        message: "feat: Add traditional clothing categories and filters",
        author_name: "CulturalDev",
        date: "2024-10-25T11:45:00Z",
      },
      {
        sha: "mno012",
        html_url:
          "https://github.com/Open-Source-Chandigarh/Heritage-Threads/commit/mno012",
        message: "fix: Shopping cart bug fixes and UI improvements",
        author_name: "UIDesigner",
        date: "2024-10-24T15:10:00Z",
      },
    ],
    input: REPOS[2],
    isOfflineData: true,
  },
};

const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
const RETRY_DELAY = 2000; // 2 seconds

const detectContributionType = (msg: string) => {
  const m = msg.toLowerCase();
  if (/fix|bugfix|bug|patch|resolve/.test(m)) return "Bug Fix";
  if (/feat|feature|add|implement|introduce|create/.test(m)) return "Feature";
  if (/doc|readme|docs|documentation|comment/.test(m)) return "Docs";
  if (/refactor|cleanup|optimize|improve/.test(m)) return "Refactor";
  if (/test|spec|testing/.test(m)) return "Test";
  return "Other";
};

const getContributionIcon = (type: string) => {
  const icons = {
    "Bug Fix": "🐛",
    Feature: "✨",
    Docs: "📚",
    Refactor: "♻️",
    Test: "🧪",
    Other: "⚡",
  };
  return icons[type as keyof typeof icons] || icons.Other;
};

const formatDate = (iso?: string | null) => {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    const now = new Date();
    const diffInHours = (now.getTime() - d.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${Math.floor(diffInHours)}h ago`;
    if (diffInHours < 24 * 7) return `${Math.floor(diffInHours / 24)}d ago`;
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
};

const getCachedData = (key: string): CardData | null => {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const data: CardData = JSON.parse(cached);
    if (!data.lastFetched) return null;

    const isExpired = Date.now() - data.lastFetched > CACHE_DURATION;
    return isExpired ? null : data;
  } catch {
    return null;
  }
};

const setCachedData = (key: string, data: CardData) => {
  try {
    const dataWithTimestamp = { ...data, lastFetched: Date.now() };
    localStorage.setItem(key, JSON.stringify(dataWithTimestamp));
  } catch {
    // Ignore storage errors
  }
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function OpenSourceContributions(): JSX.Element {
  const repoInputs = useMemo(() => REPOS, []);
  const [cards, setCards] = useState<CardData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorGlobal, setErrorGlobal] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<
    "All" | "Feature" | "Bug Fix" | "Docs" | "Refactor" | "Test" | "Other"
  >("All");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setErrorGlobal(null);

    async function fetchWithRetry(url: string, retries = 2): Promise<Response> {
      for (let i = 0; i < retries; i++) {
        try {
          const response = await fetch(url, {
            headers: {
              Accept: "application/vnd.github.v3+json",
              "User-Agent": "OpenSourceContributions/1.0",
            },
          });

          if (
            response.status === 403 &&
            response.headers.get("X-RateLimit-Remaining") === "0"
          ) {
            throw new Error("RATE_LIMIT_EXCEEDED");
          }

          if (response.status === 429) {
            if (i < retries - 1) {
              await sleep(RETRY_DELAY * (i + 1));
              continue;
            }
            throw new Error("RATE_LIMIT_EXCEEDED");
          }

          return response;
        } catch (error) {
          if (i === retries - 1) throw error;
          await sleep(RETRY_DELAY * (i + 1));
        }
      }
      throw new Error("Max retries exceeded");
    }

    async function fetchOne(input: RepoInput): Promise<CardData> {
      const cacheKey = `github-${input.owner}-${input.repo}`;

      // Check cache first
      const cached = getCachedData(cacheKey);
      if (cached) {
        return cached;
      }

      const base = "https://api.github.com/repos";

      try {
        // Try to fetch from API
        const repoRes = await fetchWithRetry(
          `${base}/${input.owner}/${input.repo}`
        );

        if (!repoRes.ok) {
          throw new Error(`HTTP ${repoRes.status}`);
        }

        const repoJson: RepoData = await repoRes.json();
        await sleep(500);

        // Fetch commits
        const commitsRes = await fetchWithRetry(
          `${base}/${input.owner}/${input.repo}/commits?per_page=5`
        );

        let commits: CommitData[] = [];
        if (commitsRes.ok) {
          type GithubCommitApiResponse = {
            sha: string;
            html_url: string;
            commit: {
              message: string;
              author: {
                name: string;
                date: string;
              };
            };
            author?: {
              login?: string;
            } | null;
          };

          const commitsJson: GithubCommitApiResponse[] =
            await commitsRes.json();
          commits = commitsJson.map((c) => ({
            sha: c.sha,
            html_url: c.html_url,
            message: c.commit?.message || "",
            author_name: c.commit?.author?.name || c.author?.login || null,
            date: c.commit?.author?.date || null,
          }));
        }

        const result: CardData = {
          repo: repoJson,
          commits,
          input,
          error: null,
          isOfflineData: false,
        };

        setCachedData(cacheKey, result);
        return result;
      } catch (err: unknown) {
        console.log(`API failed for ${input.repo}, using fallback data`);

        // Use fallback data when API fails
        const fallbackData = FALLBACK_DATA[input.repo];
        if (fallbackData) {
          return fallbackData;
        }

        // If no fallback data available
        let errorMessage = "Repository data unavailable";
        if (err instanceof Error) {
          if (err.message === "RATE_LIMIT_EXCEEDED") {
            errorMessage =
              "GitHub API rate limit exceeded. Showing cached data when available.";
          } else {
            errorMessage = err.message;
          }
        }

        return {
          repo: null,
          commits: [],
          input,
          error: errorMessage,
          isOfflineData: false,
        };
      }
    }

    (async () => {
      try {
        const results: CardData[] = [];

        for (const [index, r] of repoInputs.entries()) {
          if (cancelled) return;

          const res = await fetchOne(r);
          results.push(res);

          setCards([...results]);

          if (index < repoInputs.length - 1) {
            await sleep(800);
          }
        }

        if (!cancelled) {
          setCards(results);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setErrorGlobal(
            "Unable to load repository data. Please check your connection and try again later."
          );
          setLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [repoInputs]);

  const filtered = (cards || []).filter((c) => {
    if (!c.repo) return true;

    const name = c.repo.full_name || "";
    const description = c.repo.description || "";

    if (
      query &&
      !name.toLowerCase().includes(query.toLowerCase()) &&
      !description.toLowerCase().includes(query.toLowerCase())
    ) {
      return false;
    }

    if (filter === "All") return true;

    const hasMatchingCommit = c.commits.some(
      (commit) => detectContributionType(commit.message) === filter
    );

    return hasMatchingCommit;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE5D4] via-[#FFD1B7] to-[#FFB891]">
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Floating Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-orange-300/30 rounded-full"
          animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-orange-400/30 rounded-full"
          animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 py-16 px-6 sm:px-12 lg:px-20 mt-16 font-inter">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <motion.div
                className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 shadow-xl"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Github className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 bg-clip-text text-transparent font-playfair"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  Open Source Contributions
                </motion.h1>
                <motion.p
                  className="text-lg text-gray-600 mt-4 font-inter max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Showcasing meaningful contributions to open source projects.
                  Each repository tells a story of collaboration, learning, and
                  growth
                </motion.p>
              </div>
            </div>

            <motion.div
              className="mt-6 w-24 h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>

          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 mb-12 shadow-lg border border-white/30"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="relative flex-1 w-full">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
                  size={20}
                />
                <input
                  aria-label="Search repositories"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search repositories..."
                  className="w-full pl-12 pr-4 py-3 bg-white/80 border-2 border-orange-200 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:border-orange-400 transition-colors font-inter"
                />
              </div>

              <div className="relative">
                <Tag
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400"
                  size={16}
                />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value as typeof filter)}
                  className="pl-10 pr-8 py-3 bg-white/80 border-2 border-orange-200 rounded-2xl text-gray-700 focus:outline-none focus:border-orange-400 appearance-none cursor-pointer transition-colors font-poppins"
                >
                  <option>All</option>
                  <option>Feature</option>
                  <option>Bug Fix</option>
                  <option>Docs</option>
                  <option>Refactor</option>
                  <option>Test</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Status Messages */}
          {loading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-4 text-gray-700 mb-8 bg-orange-100/70 border-2 border-orange-200 p-6 rounded-2xl shadow-lg"
            >
              <Clock className="animate-spin text-orange-500" size={24} />
              <div className="text-center">
                <div className="font-semibold text-lg font-playfair">
                  Loading repositories...
                </div>
                <div className="text-sm text-gray-600 font-inter">
                  Fetching latest data or using fallback content
                </div>
              </div>
            </motion.div>
          )}

          {errorGlobal && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-4 text-red-700 mb-8 bg-red-50 border-2 border-red-200 p-6 rounded-2xl shadow-lg"
            >
              <AlertTriangle className="text-red-500" size={24} />
              <div>
                <div className="font-semibold text-lg font-playfair">
                  Connection Issue
                </div>
                <div className="text-sm font-inter">{errorGlobal}</div>
              </div>
            </motion.div>
          )}

          {/* Repository Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.length === 0 && !loading && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full p-12 bg-white/70 border-2 border-orange-200 rounded-3xl shadow-lg text-center"
              >
                <Search className="mx-auto mb-4 text-orange-400" size={48} />
                <h3 className="text-2xl font-bold text-gray-700 mb-2 font-playfair">
                  No repositories found
                </h3>
                <p className="text-gray-600 font-inter">
                  Try adjusting your search or filter settings
                </p>
              </motion.div>
            )}

            {filtered.map((c, i) => {
              const repo = c.repo;
              const latest =
                c.commits && c.commits.length > 0 ? c.commits[0] : null;
              const type = latest
                ? detectContributionType(latest.message)
                : "Other";
              const typeIcon = getContributionIcon(type);
              const isCached =
                c.lastFetched && Date.now() - c.lastFetched < CACHE_DURATION;

              return (
                <motion.div
                  key={c.input.repo}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="group"
                >
                  <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                    {/* Gradient background accent */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500"></div>

                    {/* Status indicators */}
                    <div className="absolute top-4 right-4 z-10">
                      {isCached && !c.isOfflineData && (
                        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm font-poppins">
                          ⚡ Cached
                        </div>
                      )}
                      {!c.isOfflineData && !isCached && (
                        <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-sm font-poppins">
                          🔴 Live
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      {/* Header Section */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                          <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:rotate-3 transition-all duration-300">
                            <Github className="w-7 h-7 text-white" />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                            <span className="text-xs">⭐</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <a
                            href={c.input.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link block"
                          >
                            <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover/link:text-orange-600 transition-colors line-clamp-1 font-playfair">
                              {repo
                                ? repo.full_name
                                : `${c.input.owner}/${c.input.repo}`}
                            </h3>
                            <div className="flex items-center gap-1 text-gray-500 group-hover/link:text-orange-500 transition-colors">
                              <ExternalLink className="w-3 h-3" />
                              <span className="text-xs font-medium font-poppins">
                                View Repository
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2 font-inter">
                        {repo?.description ||
                          "No description available for this repository"}
                      </p>

                      {/* Stats Row */}
                      {repo && (
                        <div className="flex items-center gap-2 mb-6 flex-wrap">
                          <div className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                            <Star className="w-3 h-3 fill-current" />
                            {repo.stargazers_count?.toLocaleString() || 0}
                          </div>
                          {repo.language && (
                            <div className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 font-jetbrains">
                              <div className="w-2 h-2 rounded-full bg-current"></div>
                              {repo.language}
                            </div>
                          )}
                          <div className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-800 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                            <span>{typeIcon}</span>
                            {type}
                          </div>
                        </div>
                      )}

                      {/* Error State */}
                      {c.error && !c.isOfflineData && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                          <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="text-sm font-medium text-red-800 mb-1 font-poppins">
                                Error Loading Repository
                              </p>
                              <p className="text-xs text-red-600 font-inter">
                                {c.error}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Latest Commit Highlight */}
                      {latest && (
                        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-4 mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                                <TrendingUp className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-xs font-bold text-orange-800 uppercase tracking-wide font-poppins">
                                Latest Commit
                              </span>
                            </div>
                            <span className="text-xs text-gray-500 bg-white px-2 py-0.5 rounded-full font-inter">
                              {formatDate(latest.date)}
                            </span>
                          </div>
                          <a
                            href={latest.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-sm text-gray-800 hover:text-orange-600 transition-colors font-medium line-clamp-2 leading-relaxed font-inter"
                            title={latest.message}
                          >
                            {latest.message}
                          </a>
                          {latest.author_name && (
                            <div className="flex items-center gap-2 mt-2">
                              <div className="w-5 h-5 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">
                                  {latest.author_name[0]?.toUpperCase()}
                                </span>
                              </div>
                              <span className="text-xs text-gray-600 font-medium font-inter">
                                by {latest.author_name}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Recent Commits */}
                      <div className="space-y-4">
                        {c.commits.length > 0 ? (
                          <>
                            <div className="flex items-center gap-2 pb-2 border-b border-gray-100">
                              <GitBranch className="w-4 h-4 text-orange-500" />
                              <h4 className="font-semibold text-gray-800 text-sm font-poppins">
                                Recent Activity
                              </h4>
                              <div className="flex-1"></div>
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full font-inter">
                                {c.commits.length} commits
                              </span>
                            </div>

                            <div className="space-y-3 max-h-64 overflow-y-auto">
                              {c.commits.slice(0, 3).map((commit, idx) => (
                                <motion.a
                                  key={commit.sha}
                                  href={commit.html_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-start gap-3 p-3 bg-gray-50 hover:bg-orange-50 rounded-lg transition-all duration-200 group/commit border border-transparent hover:border-orange-200"
                                  whileHover={{ x: 2 }}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                >
                                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0">
                                    {commit.author_name
                                      ? commit.author_name[0]?.toUpperCase()
                                      : "?"}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm text-gray-800 font-medium line-clamp-2 group-hover/commit:text-orange-700 transition-colors mb-1 font-inter">
                                      {commit.message}
                                    </p>
                                    <div className="flex items-center text-xs text-gray-500 gap-3">
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {formatDate(commit.date)}
                                      </div>
                                      {commit.author_name && (
                                        <div className="flex items-center gap-1">
                                          <Users className="w-3 h-3" />
                                          {commit.author_name}
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </motion.a>
                              ))}
                            </div>
                          </>
                        ) : (
                          !c.error && (
                            <div className="text-center py-8 text-gray-400">
                              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                <Clock className="w-8 h-8" />
                              </div>
                              <p className="text-sm font-medium font-poppins">
                                No commits available
                              </p>
                              <p className="text-xs mt-1 font-inter">
                                Check back later for updates
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    {repo && (
                      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50/50">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-4 text-gray-600">
                            {repo.forks_count > 0 && (
                              <div className="flex items-center gap-1">
                                <GitBranch className="w-3 h-3" />
                                <span className="font-medium font-inter">
                                  {repo.forks_count}
                                </span>
                              </div>
                            )}
                            {repo.open_issues_count > 0 && (
                              <div className="flex items-center gap-1">
                                <AlertTriangle className="w-3 h-3 text-orange-500" />
                                <span className="font-medium font-inter">
                                  {repo.open_issues_count}
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="text-gray-500 font-medium font-inter">
                            Updated {formatDate(repo.updated_at)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .font-inter { font-family: 'Inter', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-jetbrains { font-family: 'JetBrains Mono', monospace; }
        .font-poppins { font-family: 'Poppins', sans-serif; }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #FFE4D6, #FFD4B8);
          border-radius: 6px;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ff9555, #ffb183);
          border-radius: 6px;
          border: 2px solid #FFE4D6;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #ff7733, #ff9555);
        }

        /* Firefox Scrollbar */
        * {
          scrollbar-width: thin;
          scrollbar-color: #ff9555 #FFE4D6;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Better text rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* Enhanced selection colors */
        ::selection {
          background-color: #ff9555;
          color: white;
        }
        ::-moz-selection {
          background-color: #ff9555;
          color: white;
        }

        /* Enhanced focus styles */
        *:focus {
          outline: 2px solid #ff9555;
          outline-offset: 2px;
        }

        /* Line clamping utilities */
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}