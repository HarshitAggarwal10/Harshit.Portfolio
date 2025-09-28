
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Cpu, 
  ExternalLink, 
  Code2, 
  Layers, 
  Database, 
  Globe, 
  Zap,
  Eye,
  Filter,
  Search,
  ArrowUpRight,
  MousePointer2,
  Calendar,
  Tag
} from "lucide-react";
import Project1 from "../assets/cmv.png";
import Project2 from "../assets/osc.png";
import Project3 from "../assets/cid.png";
import Project4 from "../assets/quizopedia.png";
import Project5 from "../assets/coderdesign.png";

const projects = [
  {
    img: Project1,
    title: "CodeMultiVerse",
    desc: "A comprehensive coding platform featuring structured learning roadmaps, interactive quizzes, coding challenges, and assignments designed to enhance programming skills across multiple technologies.",
    link: "https://code-multi-verse.vercel.app/",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    category: "Full Stack",
    year: "2024"
  },
  {
    img: Project2,
    title: "OpenSourceChandigarh Official Website",
    desc: "The official community website for OpenSourceChandigarh, featuring project showcases, event management, developer resources, and community engagement tools.",
    link: "https://osc-tan.vercel.app/",
    tech: ["TypeScript", "Tailwind", "Vercel", "MERN Stack"],
    category: "Community",
    year: "2024"
  },
  {
    img: Project3,
    title: "CID-CTF Event Website",
    desc: "A dynamic Capture The Flag event platform providing real-time challenges, live leaderboards, participant tracking, and automated scoring systems for cybersecurity competitions.",
    link: "https://cid-ctf.vercel.app/login",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    category: "Event Platform",
    year: "2024"
  },
  {
    img: Project4,
    title: "Quizopedia",
    desc: "An engaging online quiz application offering diverse question categories, real-time scoring, progress tracking, and competitive leaderboards with an intuitive user interface.",
    link: "https://quizopedia.vercel.app/",
    tech: ["HTML", "CSS", "Firebase", "JavaScript"],
    category: "Education",
    year: "2023"
  },
  {
    img: Project5,
    title: "CoderDesign",
    desc: "A sophisticated portfolio and project showcase platform enabling developers and designers to present their work professionally with customizable templates and modern layouts.",
    link: "https://www.coderdesign.com/",
    tech: ["React", "Tailwind", "Node.js", "Express", "Next.js", "MongoDB"],
    category: "Freelance",
    year: "2024"
  },
];

const categories = ["All", "Full Stack", "Community", "Event Platform", "Education", "Freelance"];

const techColors: { [key: string]: { bg: string; text: string; border: string } } = {
  React: { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Node.js": { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  MongoDB: { bg: "bg-green-50", text: "text-green-600", border: "border-green-200" },
  Express: { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" },
  Tailwind: { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
  TypeScript: { bg: "bg-blue-50", text: "text-blue-800", border: "border-blue-200" },
  "Next.js": { bg: "bg-black/5", text: "text-gray-800", border: "border-gray-200" },
  JavaScript: { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
  HTML: { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  CSS: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  Firebase: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
  Vercel: { bg: "bg-black/5", text: "text-gray-800", border: "border-gray-200" },
  "MERN Stack": { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
};

// Enhanced particle component
const TechParticle = ({ x, y, size, delay, type }: { 
  x: number; 
  y: number; 
  size: number; 
  delay: number;
  type: string;
}) => {
  const icons = {
    code: <Code2 className="w-3 h-3 text-orange-400" />,
    cpu: <Cpu className="w-3 h-3 text-pink-400" />,
    database: <Database className="w-3 h-3 text-blue-400" />,
    globe: <Globe className="w-3 h-3 text-green-400" />
  };

  return (
    <motion.div
      className="absolute flex items-center justify-center rounded-full bg-white/30 backdrop-blur-sm border border-white/40"
      style={{ width: size, height: size, top: `${y}%`, left: `${x}%` }}
      animate={{ 
        y: [0, -20, 0], 
        opacity: [0.3, 0.8, 0.3],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        repeat: Infinity, 
        duration: 3 + delay, 
        ease: "easeInOut"
      }}
    >
      {icons[type as keyof typeof icons]}
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [particles, setParticles] = useState<{ 
    x: number; 
    y: number; 
    size: number; 
    delay: number;
    type: string;
  }[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate enhanced tech particles
  useEffect(() => {
    const particleTypes = ["code", "cpu", "database", "globe"];
    const tempParticles = [];
    for (let i = 0; i < 15; i++) {
      tempParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 20 + Math.random() * 12,
        delay: Math.random() * 2,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
      });
    }
    setParticles(tempParticles);
  }, []);

  // Filter projects
  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="relative w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden bg-gradient-to-br from-[#FFF4EB] via-[#FFE0C7] to-[#FFD4B0] font-inter">
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Enhanced tech particles */}
      {particles.map((p, i) => (
        <TechParticle key={i} x={p.x} y={p.y} size={p.size} delay={p.delay} type={p.type} />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-16 mt-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-8">
            <motion.div 
              className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 shadow-xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Layers className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 bg-clip-text text-transparent font-playfair"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Code in Action
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mt-4 font-inter max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Explore my portfolio of innovative projects, each crafted with passion and cutting-edge technologies
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

        {/* Enhanced Filter Controls */}
        <motion.div 
          className="mb-12 flex flex-col lg:flex-row gap-6 items-center justify-between bg-white/40 backdrop-blur-xl rounded-2xl p-6 border border-white/30 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent font-inter placeholder-gray-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 font-poppins ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
                      : "bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-white/80 border border-white/40"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <AnimatePresence>
          <div 
            ref={gridRef} 
            className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8"
          >
            {filteredProjects.map((project, i) => (
              <motion.div
                key={`${project.title}-${selectedCategory}`}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  layout: { duration: 0.3 }
                }}
                className="break-inside-avoid group relative"
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group"
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  style={{
                    transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
                  }}
                >
                  {/* Enhanced Project Header */}
                  <div className="relative p-6 pb-4 bg-gradient-to-br from-white/30 to-white/10 border-b border-white/30">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start space-x-4 flex-1">
                        <motion.div 
                          className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg flex-shrink-0"
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Cpu className="w-6 h-6 text-white" />
                        </motion.div>

                        <div className="flex-1 min-w-0">
                          <h2 className="font-bold text-xl lg:text-2xl text-gray-900 group-hover:text-orange-600 transition-colors duration-300 font-playfair leading-tight mb-2">
                            {project.title}
                          </h2>

                          <div className="flex items-center space-x-3 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Tag className="w-4 h-4 text-orange-500" />
                              <span className="font-medium font-poppins">{project.category}</span>
                            </div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full" />
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4 text-orange-500" />
                              <span className="font-medium font-poppins">{project.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <motion.div
                        className="opacity-60 group-hover:opacity-100 transition-all duration-300 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
                        whileHover={{ scale: 1.1, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-orange-600" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                      whileHover={{ scale: 1.02 }}
                    />

                    {/* Enhanced Overlay on hover */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div 
                        className="flex items-center space-x-2 text-white bg-white/20 backdrop-blur-lg rounded-full px-4 py-2 border border-white/30 shadow-lg"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Eye className="w-4 h-4" />
                        <span className="text-sm font-medium font-poppins">View Project</span>
                        <ExternalLink className="w-3 h-3" />
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-6">
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-inter">
                      {project.desc}
                    </p>

                    {/* Enhanced Tech Stack */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
                          <Zap className="w-4 h-4 text-orange-500" />
                          <span className="font-poppins">Tech Stack</span>
                        </h4>
                        <div className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-full">
                          {project.tech.length} technologies
                        </div>
                      </div>

                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech, idx) => {
                          const colors = techColors[tech] || { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" };
                          return (
                            <motion.span
                              key={idx}
                              className={`text-xs lg:text-sm px-3 py-2 rounded-full ${colors.bg} ${colors.text} font-medium shadow-sm border ${colors.border} font-jetbrains hover:shadow-md transition-all duration-200 cursor-default`}
                              whileHover={{ 
                                scale: 1.05, 
                                y: -2,
                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 + idx * 0.05 }}
                            >
                              {tech}
                            </motion.span>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Hover Indicator */}
                  <motion.div 
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ 
                      x: [0, 3, 0],
                      y: [0, -2, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-lg border border-white/30 backdrop-blur-sm">
                      <MousePointer2 className="w-4 h-4" />
                    </div>
                  </motion.div>

                  {/* Enhanced border glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-300/50 transition-all duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Enhanced glowing background effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-400/0 via-pink-400/0 to-red-400/0 group-hover:from-orange-400/5 group-hover:via-pink-400/5 group-hover:to-red-400/5 transition-all duration-500" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Enhanced No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div 
              className="p-8 rounded-3xl bg-gradient-to-r from-orange-100 to-pink-100 w-24 h-24 mx-auto mb-8 flex items-center justify-center border border-white/50 shadow-xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Search className="w-12 h-12 text-orange-500" />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">No Projects Found</h3>
            <p className="text-gray-600 font-inter text-lg mb-8 max-w-md mx-auto">
              Try adjusting your search terms or filters to discover more projects
            </p>
            <motion.button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-poppins"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Reset Filters
            </motion.button>
          </motion.div>
        )}

        {/* Enhanced Project Stats */}
        <motion.div 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          {[
            { label: "Total Projects", value: projects.length, icon: <Layers className="w-7 h-7" />, color: "from-blue-500 to-purple-500" },
            { label: "Technologies", value: Array.from(new Set(projects.flatMap(p => p.tech))).length, icon: <Code2 className="w-7 h-7" />, color: "from-green-500 to-teal-500" },
            { label: "Categories", value: categories.length - 1, icon: <Tag className="w-7 h-7" />, color: "from-yellow-500 to-orange-500" },
            { label: "Years Active", value: "2", icon: <Calendar className="w-7 h-7" />, color: "from-pink-500 to-red-500" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 text-center shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ delay: i * 0.1 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex justify-center mb-5">
                <motion.div 
                  className={`p-5 rounded-3xl bg-gradient-to-r ${stat.color} text-white shadow-xl group-hover:shadow-2xl transition-all duration-300`}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  {stat.icon}
                </motion.div>
              </div>
              <motion.div 
                className="text-4xl font-bold text-gray-800 font-playfair mb-3 group-hover:text-orange-600 transition-colors"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 font-inter font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
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

        /* Enhanced focus styles */
        input:focus {
          box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.15);
        }

        /* Better selection colors */
        ::selection {
          background-color: #ff9555;
          color: white;
        }
        ::-moz-selection {
          background-color: #ff9555;
          color: white;
        }

        /* Enhanced button hover effects */
        button:hover {
          transform: translateY(-1px);
        }

        /* Improved card shadows */
        .group:hover {
          box-shadow: 0 32px 64px -12px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Projects;