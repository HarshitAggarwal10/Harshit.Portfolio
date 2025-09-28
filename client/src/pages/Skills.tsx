
import React, { useEffect, useState } from "react";
import { Code, Palette, Cpu, Database, Globe, Smartphone, Zap, Star, Award, Layers, BookOpen, Target } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    icon: <Code className="w-6 h-6" />,
    name: "MERN Stack Development",
    level: 100,
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    category: "Full Stack",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Database className="w-6 h-6" />,
    name: "Databases & Backend",
    level: 80,
    technologies: ["MySQL", "PostgreSQL", "MongoDB", "REST APIs"],
    category: "Backend",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    name: "Full-Stack Development",
    level: 85,
    technologies: ["React", "Next.js", "Node.js", "GraphQL"],
    category: "Full Stack",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    name: "Mobile Development",
    level: 60,
    technologies: ["React Native", "Expo", "Flutter"],
    category: "Mobile",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    name: "Programming",
    level: 95,
    technologies: ["C++", "Java", "Python", "JavaScript"],
    category: "Programming",
    gradient: "from-red-500 to-orange-500"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    name: "UI/UX Design",
    level: 75,
    technologies: ["Figma", "Adobe XD", "Tailwind CSS"],
    category: "Design",
    gradient: "from-pink-500 to-rose-500"
  },
];

const techColors: { [key: string]: { bg: string; text: string; border: string } } = {
  "MongoDB": { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  "Express.js": { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" },
  "React": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Node.js": { bg: "bg-green-50", text: "text-green-700", border: "border-green-200" },
  "MySQL": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "PostgreSQL": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "REST APIs": { bg: "bg-orange-50", text: "text-orange-700", border: "border-orange-200" },
  "Next.js": { bg: "bg-black/5", text: "text-gray-800", border: "border-gray-200" },
  "GraphQL": { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  "React Native": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "Expo": { bg: "bg-indigo-50", text: "text-indigo-700", border: "border-indigo-200" },
  "Flutter": { bg: "bg-blue-50", text: "text-blue-700", border: "border-blue-200" },
  "C++": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  "Java": { bg: "bg-red-50", text: "text-red-700", border: "border-red-200" },
  "Python": { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
  "JavaScript": { bg: "bg-yellow-50", text: "text-yellow-700", border: "border-yellow-200" },
  "Figma": { bg: "bg-purple-50", text: "text-purple-700", border: "border-purple-200" },
  "Adobe XD": { bg: "bg-pink-50", text: "text-pink-700", border: "border-pink-200" },
  "Tailwind CSS": { bg: "bg-cyan-50", text: "text-cyan-700", border: "border-cyan-200" },
};

// Enhanced Circular Progress Component
const CircularProgress: React.FC<{ level: number; index: number }> = ({ level, index }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const progress = (level / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="w-40 h-40 transform -rotate-90">
        {/* Background circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="#f3f4f6"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Progress circle */}
        <motion.circle
          cx="80"
          cy="80"
          r={radius}
          stroke={`url(#grad-${index})`}
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 2, ease: "easeInOut", delay: index * 0.2 }}
          className="drop-shadow-[0_0_12px_rgba(251,146,60,0.4)]"
        />
        <defs>
          <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="50%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#fdba74" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center content */}
      <div className="absolute flex flex-col items-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
          className="text-2xl font-bold text-gray-800 font-playfair"
        >
          {level}%
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 + index * 0.2 }}
          className="text-xs text-gray-500 font-poppins mt-1"
        >
          Proficiency
        </motion.div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Floating particles data
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 4 + 3,
  }));

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#FFE5D4] via-[#FFD1B7] to-[#FFB891] px-4 sm:px-6 lg:px-8 py-16 overflow-hidden font-inter">
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20 mt-16"
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
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 bg-clip-text text-transparent font-playfair"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                My Skills
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mt-4 font-inter max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                A fusion of creativity, problem-solving, and tech mastery that helps me craft impactful, modern, and scalable digital solutions
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

        {/* Skills Overview Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { label: "Skills Mastered", value: skills.length, icon: <Star className="w-5 h-5" />, color: "from-yellow-500 to-orange-500" },
            { label: "Technologies", value: Array.from(new Set(skills.flatMap(s => s.technologies))).length, icon: <Layers className="w-5 h-5" />, color: "from-blue-500 to-purple-500" },
            { label: "Categories", value: Array.from(new Set(skills.map(s => s.category))).length, icon: <Target className="w-5 h-5" />, color: "from-green-500 to-teal-500" },
            { label: "Avg Proficiency", value: `${Math.round(skills.reduce((acc, skill) => acc + skill.level, 0) / skills.length)}%`, icon: <Award className="w-5 h-5" />, color: "from-pink-500 to-red-500" },
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

        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
              onHoverStart={() => setActiveSkill(index)}
              onHoverEnd={() => setActiveSkill(null)}
              style={{
                transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
              }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-pink-50/30 rounded-3xl" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                  {/* Circular Progress */}
                  <CircularProgress level={skill.level} index={index} />

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 flex items-center justify-center bg-gradient-to-r ${skill.gradient} text-white rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    animate={activeSkill === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Skill Info */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-800 font-playfair leading-tight">
                      {skill.name}
                    </h3>

                    <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200 font-poppins">
                      {skill.category}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="w-full space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 font-poppins">Technologies</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.technologies.map((tech, i) => {
                        const colors = techColors[tech] || { bg: "bg-gray-50", text: "text-gray-700", border: "border-gray-200" };
                        return (
                          <motion.span
                            key={i}
                            className={`text-xs px-3 py-1.5 rounded-full ${colors.bg} ${colors.text} font-medium border ${colors.border} font-jetbrains hover:shadow-md transition-all duration-200 cursor-default`}
                            whileHover={{ scale: 1.05, y: -2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.2 + index * 0.1 + i * 0.05 }}
                          >
                            {tech}
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
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
                    <Star className="w-4 h-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-white/50 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-pink-50/50 rounded-3xl" />

          <div className="relative z-10 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 shadow-xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-playfair">
              🚀 Let's Build Something Amazing Together!
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-inter leading-relaxed">
              With my expertise in full-stack development and design, I'm ready to bring your 
              vision to life with cutting-edge technologies and creative solutions.
            </p>

            <motion.a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl shadow-xl hover:shadow-2xl font-semibold transition-all duration-300 font-poppins"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Contact Me</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
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

export default Skills;