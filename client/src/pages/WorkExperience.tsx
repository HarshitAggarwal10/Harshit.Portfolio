
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Rocket,
  Star,
  Globe,
  Target,
  Brain,
  Linkedin,
  ExternalLink,
  Calendar,
  MapPin,
  ChevronRight,
  Zap,
  BookOpen,
  Trophy,
  Gamepad2,
  Shield,
  Coffee,
  Presentation,
  UserCheck,
  GitBranch,
} from "lucide-react";

type Experience = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  year: string;
  images?: string[];
  linkedin?: string;
  category?: string;
  location?: string;
};

const experiences: Experience[] = [
  {
    icon: <Presentation className="w-7 h-7 text-orange-600" />,
    title: "Tech Abhivyakti 2.0",
    desc: "Participated in Tech Abhivyakti 2.0 organized by Open Source Chandigarh, Chitkara University, Punjab.",
    year: "2024",
    category: "Participation",
    location: "Punjab",
    images: ["/work/abhivyakti2.png"],
  },
  {
    icon: <Trophy className="w-7 h-7 text-orange-600" />,
    title: "Hack The Mountains 5.0",
    desc: "Finalist at Hack The Mountains 5.0 held in Rajkot, Gujarat.",
    year: "2024",
    category: "Achievement",
    location: "Gujarat",
    images: ["/work/htm.jpg", "/work/htm1.jpg"],
    linkedin:
      "https://www.linkedin.com/posts/harshit-aggarwal100306_hackathon5-team404kevidhayak-whenthingsgowrong-activity-7240939248772640768-NVHk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <Shield className="w-7 h-7 text-orange-600" />,
    title: "Authentication System & SIH 2024",
    desc: "Built a fully developed authentication system and contributed as a developer in Smart India Hackathon 2024.",
    year: "2024",
    category: "Development",
    location: "India",
  },
  {
    icon: <GitBranch className="w-7 h-7 text-orange-600" />,
    title: "Web Team Member",
    desc: "Worked with Open Source Chandigarh's web team and contributed to their official websites.",
    year: "2024",
    category: "Collaboration",
    location: "Chandigarh",
    images: ["/work/osc.jpg", "/work/osc1.jpg"],
    linkedin:
      "https://www.linkedin.com/posts/harshit-aggarwal100306_opensourcechandigarh-chitkarauniversity-chitkarau-activity-7245370443291865088-XO9-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <UserCheck className="w-7 h-7 text-orange-600" />,
    title: "Mentor - Hack With Her 4.0",
    desc: "Mentored an all-girls team which won the special All Girls Team Award.",
    year: "2025",
    category: "Mentorship",
    location: "India",
    images: ["/work/hwh.jpg"],
  },
  {
    icon: <Star className="w-7 h-7 text-orange-600" />,
    title: "GitHub Rally 2.0",
    desc: "Organized GitHub Rally 2.0, encouraging open source contributions.",
    year: "2025",
    category: "Organization",
    location: "Punjab",
    images: ["/work/gr.jpg"],
  },
  {
    icon: <Rocket className="w-7 h-7 text-orange-600" />,
    title: "Tech Abhivyakti 3.0",
    desc: "Organized Tech Abhivyakti 3.0 with innovative events and activities.",
    year: "2025",
    category: "Organization",
    location: "Punjab",
    images: ["/work/th3.jpg", "/work/th31.jpg"],
    linkedin:
      "https://www.linkedin.com/posts/harshit-aggarwal100306_techabhivyakti3-osc-chitkarauniversity-activity-7319988776456327168-_cdM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <Target className="w-7 h-7 text-orange-600" />,
    title: "CID-CTF",
    desc: "Organized CID-CTF event, focusing on cybersecurity challenges.",
    year: "2025",
    category: "Organization",
    location: "Punjab",
    images: ["/work/cid.jpg", "/work/cid1.jpg"],
    linkedin:
      "https://www.linkedin.com/posts/harshit-aggarwal100306_cybersecurity-ctf-capturetheflag-activity-7328796244972134400-Kp3J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <Brain className="w-7 h-7 text-orange-600" />,
    title: "Critical Thinking Coding Cup",
    desc: "Organized CTCC event to challenge coding and problem-solving skills.",
    year: "2025",
    category: "Organization",
    location: "Punjab",
    images: ["/work/ctcc.jpeg", "/work/ctcc1.jpg"],
    linkedin:
      "https://www.linkedin.com/posts/harshit-aggarwal100306_opensourcechandigarh-criticalthinkingcodingcup-activity-7354904877036130304-mCFA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <Gamepad2 className="w-7 h-7 text-orange-600" />,
    title: "Brains Over Brute",
    desc: "Organized Brains Over Brute, focusing on logical coding.",
    year: "2025",
    category: "Organization",
    location: "Punjab",
    images: ["/work/bob.jpeg", "/work/bob1.jpeg"],
    linkedin:
      "https://www.linkedin.com/posts/harshit-aggarwal100306_opensourcechandigarh-dsa-techevents-activity-7360627382694678528-MUjt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <Coffee className="w-7 h-7 text-orange-600" />,
    title: "Step Into Innovation: Build Your First App",
    desc: "Organized Step Into Innovation: Build Your First App.",
    year: "2025",
    category: "Organization",
    location: "Punjab",
    images: ["/work/si.jpg", "/work/si1.jpg"],
    linkedin:
      "https://www.linkedin.com/posts/harshit-aggarwal100306_event-recap-hands-on-android-app-development-activity-7365619047956140032-gN2y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <Globe className="w-7 h-7 text-orange-600" />,
    title: "Open Source Chandigarh Orientation 2025",
    desc: "Organized Open Source Chandigarh Orientation 2025.",
    year: "2025",
    category: "Organization",
    location: "Punjab",
    images: ["/work/o.jpg", "/work/o1.jpeg"],
    linkedin:
      "https://www.linkedin.com/posts/harshit-aggarwal100306_osc-opensource-orientation2025-activity-7372890022888288257-Mji9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
];

const categoryColors: { [key: string]: { bg: string; text: string; border: string } } = {
  "Participation": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Achievement": { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
  "Development": { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  "Collaboration": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  "Mentorship": { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  "Organization": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
};

const WorkExperience: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating particles data
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 4 + 3,
  }));

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#FFE5D4] via-[#FFD1B7] to-[#FFB891] px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden font-inter">
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(255, 107, 53, 0.3) 0%, rgba(255, 177, 131, 0.1) 70%, transparent 100%)`,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.id * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Header with Added Margin Top */}
        <motion.div
          className="text-center mb-16 mt-16"
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
              <Award className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 bg-clip-text text-transparent font-playfair"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Work Experience
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mt-4 font-inter max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Journey through my professional experiences, achievements, and contributions to the tech community
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

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: "Total Experiences", value: experiences.length, icon: <Briefcase className="w-5 h-5" />, color: "from-blue-500 to-purple-500" },
            { label: "Events Organized", value: experiences.filter(e => e.category === "Organization").length, icon: <Star className="w-5 h-5" />, color: "from-orange-500 to-pink-500" },
            { label: "Years Active", value: "2", icon: <Calendar className="w-5 h-5" />, color: "from-green-500 to-teal-500" },
            { label: "Achievements", value: experiences.filter(e => e.category === "Achievement").length, icon: <Award className="w-5 h-5" />, color: "from-yellow-500 to-orange-500" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/50 text-center shadow-lg hover:shadow-xl transition-all duration-300 group"
              whileHover={{ y: -4, scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
            >
              <div className="flex justify-center mb-3">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-800 font-playfair mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600 font-inter font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-pink-400 to-red-400 rounded-full shadow-lg" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-16"
                onHoverStart={() => setActiveCard(idx)}
                onHoverEnd={() => setActiveCard(null)}
              >
                {/* Enhanced Timeline Icon */}
                <motion.div 
                  className="absolute -left-6 top-4 bg-white border-4 border-orange-500 w-14 h-14 rounded-full flex items-center justify-center shadow-xl z-10 group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    transform: activeCard === idx ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                  }}
                >
                  <div className="p-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                    {exp.icon}
                  </div>
                </motion.div>

                {/* Enhanced Card */}
                <motion.div 
                  className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden group"
                  whileHover={{ y: -8, scale: 1.01 }}
                  style={{
                    transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
                  }}
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-pink-50/30 rounded-3xl" />

                  <div className="relative z-10">
                    {/* Header Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 font-playfair leading-tight">
                            {exp.title}
                          </h3>
                          {exp.category && (
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[exp.category]?.bg || 'bg-gray-50'} ${categoryColors[exp.category]?.text || 'text-gray-700'} ${categoryColors[exp.category]?.border || 'border-gray-200'} font-poppins`}>
                              {exp.category}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4 text-orange-500" />
                            <span className="font-medium font-poppins">{exp.year}</span>
                          </div>
                          {exp.location && (
                            <>
                              <div className="w-1 h-1 bg-gray-400 rounded-full" />
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4 text-orange-500" />
                                <span className="font-medium font-poppins">{exp.location}</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {exp.linkedin && (
                        <motion.a
                          href={exp.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 rounded-xl border-2 border-[#0A66C2] text-[#0A66C2] text-sm font-medium hover:bg-[#0A66C2] hover:text-white transition-all duration-300 font-poppins shadow-lg hover:shadow-xl group w-fit"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-4 h-4" />
                          <span>View Post</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </motion.a>
                      )}
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed font-inter mb-6">
                      {exp.desc}
                    </p>

                    {/* Enhanced Images with Increased Height */}
                    {exp.images && exp.images.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        {exp.images.slice(0, 2).map((img, i) => (
                          <motion.div
                            key={i}
                            className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                          >
                            <img
                              src={img}
                              alt={`${exp.title}-${i}`}
                              className="w-full h-64 md:h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="p-3 rounded-full bg-white/20 backdrop-blur-lg border border-white/30">
                                <Zap className="w-5 h-5 text-white" />
                              </div>
                            </div>
                            {/* Image overlay with title */}
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm">
                                <p className="text-white text-sm font-medium font-poppins">
                                  {exp.title}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ 
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="p-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-lg">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Section */}
        <motion.div 
          className="mt-20 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-pink-50/50 rounded-3xl" />

          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 shadow-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4 font-playfair">
              Journey Highlights
            </h2>

            <p className="text-gray-600 text-lg font-inter max-w-3xl mx-auto leading-relaxed">
              From participating in hackathons to organizing major tech events, my journey showcases continuous 
              growth in the technology space. Each experience has contributed to my development as a{" "}
              <span className="font-semibold text-orange-600">leader</span>, 
              <span className="font-semibold text-pink-600"> developer</span>, and{" "}
              <span className="font-semibold text-red-600">community builder</span>.
            </p>
          </div>
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
      `}</style>
    </div>
  );
};

export default WorkExperience;