
import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Server,
  Database,
  Terminal,
  Cpu,
  Boxes,
  MapPin,
  Calendar,
  Star,
  Zap,
  BookOpen,
  Rocket,
  Heart,
} from "lucide-react";
import { GraduationCap, Briefcase, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import MyImage from "../assets/About.png";
import Harshit from "../assets/harshit.png";

const About: React.FC = () => {
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
  const particles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    duration: Math.random() * 4 + 3,
  }));

  const techStack = [
    { name: "React", icon: <Code className="w-5 h-5" />, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Node.js", icon: <Server className="w-5 h-5" />, color: "text-green-500", bg: "bg-green-50" },
    { name: "MongoDB", icon: <Database className="w-5 h-5" />, color: "text-green-600", bg: "bg-green-50" },
    { name: "PostgreSQL", icon: <Database className="w-5 h-5" />, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "TypeScript", icon: <Terminal className="w-5 h-5" />, color: "text-blue-700", bg: "bg-blue-50" },
    { name: "C++", icon: <Cpu className="w-5 h-5" />, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Java", icon: <Cpu className="w-5 h-5" />, color: "text-red-500", bg: "bg-red-50" },
    { name: "Git/GitHub", icon: <Boxes className="w-5 h-5" />, color: "text-gray-700", bg: "bg-gray-50" },
  ];

  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-5 h-5" />,
      technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      color: "orange",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      category: "Backend", 
      icon: <Server className="w-5 h-5" />,
      technologies: ["Node.js", "Express.js", "REST APIs", "Authentication"],
      color: "blue",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      category: "Database",
      icon: <Database className="w-5 h-5" />,
      technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
      color: "green",
      gradient: "from-green-500 to-teal-500"
    },
    {
      category: "Languages",
      icon: <Terminal className="w-5 h-5" />,
      technologies: ["JavaScript", "TypeScript", "C++", "Java", "Python"],
      color: "purple",
      gradient: "from-purple-500 to-pink-500"
    },
  ];

  const achievements = [
    {
      title: "Dean's List – STAR PROGRAMMER",
      description: "Recognition for outstanding programming excellence",
      icon: <Star className="w-5 h-5" />,
      color: "text-yellow-500",
      bg: "bg-yellow-50"
    },
    {
      title: "Hack The Mountains 2024 Finalist",
      description: "Finalist in prestigious hackathon at Rajkot, Gujarat",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-amber-500", 
      bg: "bg-amber-50"
    },
    {
      title: "Active Open-source Contributor",
      description: "Contributing to open-source projects on GitHub",
      icon: <Heart className="w-5 h-5" />,
      color: "text-red-500",
      bg: "bg-red-50"
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#FFE5D4] via-[#FFD1B7] to-[#FFB891] p-4 sm:p-6 lg:p-8 overflow-hidden relative font-inter">
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

      <div className="max-w-7xl mx-auto mt-10 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8 w-full mt-12 sm:mt-16 md:mt-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Left Section - About Me */}
          <div className="w-full md:w-1/2 text-left">
            <div className="mb-6 md:mb-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="p-3 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#7A4A3B] font-playfair">
                    About Me
                  </h1>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-orange-500 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.p 
                className="text-lg lg:text-xl text-[#9C6B58] max-w-lg font-medium leading-relaxed font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full-Stack Developer passionate about creating{" "}
                <span className="text-orange-600 font-semibold">impactful digital experiences</span>{" "}
                and building the future, one line of code at a time
              </motion.p>
            </div>
          </div>

          {/* Right Section - Enhanced Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative overflow-hidden w-full h-[22rem] sm:h-[26rem] md:h-[32rem] rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-2xl">
              <motion.img
                src={MyImage}
                alt="Development Illustration"
                className="w-full h-full object-contain p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                }}
              />

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/20 via-pink-400/20 to-red-400/20 blur-xl opacity-50" />
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-8 md:gap-12">
          {/* Left Column - Profile & Details */}
          <div className="w-full xl:w-2/5 space-y-8">
            {/* Enhanced Profile Card */}
            <motion.div 
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-pink-50/50 rounded-3xl" />

              <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                  className="relative w-48 h-48 rounded-full shadow-2xl overflow-hidden mb-6 border-4 border-white ring-4 ring-orange-100"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={Harshit}
                    alt="Harshit Aggarwal"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-400/20 to-transparent rounded-full" />
                </motion.div>

                <motion.h2 
                  className="text-3xl font-bold text-gray-800 mb-2 text-center font-playfair"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  Harshit Aggarwal
                </motion.h2>

                <motion.div 
                  className="flex items-center gap-2 text-orange-600 font-semibold mb-4 bg-orange-50 px-4 py-2 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                >
                  <Code className="w-5 h-5" />
                  <span className="font-poppins">Full-Stack Developer</span>
                </motion.div>

                <div className="flex items-center space-x-2 text-gray-600 mb-6">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium">Punjab, India</span>
                  <div className="w-1 h-1 bg-gray-400 rounded-full" />
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium">Available</span>
                </div>

                <div className="w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent h-px my-6" />

                <div className="w-full space-y-4">
                  <motion.div 
                    className="flex items-center text-gray-700 bg-white/60 p-3 rounded-xl"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Mail className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-sm font-medium truncate font-jetbrains">
                      harshitaggarwal100306@gmail.com
                    </span>
                  </motion.div>

                  <div className="flex justify-center gap-4 mt-8">
                    {[
                      {
                        href: "https://github.com/HarshitAggarwal10",
                        icon: Github,
                        color: "hover:text-gray-900",
                        bg: "hover:bg-gray-50"
                      },
                      {
                        href: "https://www.linkedin.com/in/harshit-aggarwal100306/",
                        icon: Linkedin,
                        color: "hover:text-blue-600",
                        bg: "hover:bg-blue-50"
                      },
                      {
                        href: "mailto:harshitaggarwal100306@gmail.com",
                        icon: Mail,
                        color: "hover:text-orange-500",
                        bg: "hover:bg-orange-50"
                      },
                    ].map(({ href, icon: Icon, color, bg }, idx) => (
                      <motion.a
                        key={idx}
                        href={href}
                        target={href.includes("mailto") ? undefined : "_blank"}
                        rel="noreferrer"
                        className={`p-4 bg-white/80 rounded-2xl shadow-lg ${color} ${bg} transition-all duration-300 group border border-white/40`}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + idx * 0.1 }}
                      >
                        <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Tech Stack */}
            <motion.div 
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/40 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 rounded-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center font-playfair">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mr-3">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  Tech Stack
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {techStack.map((tech, i) => (
                    <motion.div
                      key={i}
                      className={`flex items-center gap-3 ${tech.bg} p-4 rounded-2xl text-sm font-medium text-gray-700 border border-white/50 cursor-pointer group`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      onHoverStart={() => setActiveSkill(i)}
                      onHoverEnd={() => setActiveSkill(null)}
                    >
                      <div className={`${tech.color} group-hover:scale-110 transition-transform`}>
                        {tech.icon}
                      </div>
                      <span className="font-poppins font-medium">{tech.name}</span>
                      {activeSkill === i && (
                        <motion.div
                          className="ml-auto"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <Zap className="w-4 h-4 text-yellow-500" />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="w-full xl:w-3/5 space-y-8">
            <motion.div 
              className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/40 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 to-pink-50/30 rounded-3xl" />

              <div className="relative z-10">
                {/* Introduction */}
                <motion.div 
                  className="mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 font-playfair">
                      My Journey
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg font-inter">
                    I am a passionate developer and designer with experience in building{" "}
                    <span className="font-semibold text-orange-600">full-stack applications</span>,
                    creating{" "}
                    <span className="font-semibold text-pink-600">visually appealing interfaces</span>,
                    and crafting{" "}
                    <span className="font-semibold text-red-600">engaging user experiences</span>.
                    I love solving complex problems and building projects that make a real impact.
                  </p>
                </motion.div>

                {/* Education */}
                <motion.div 
                  className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 mb-8 border border-orange-200/50 relative overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-pink-400/5" />
                  <div className="relative z-10">
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-6 font-playfair">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      Education
                    </h3>
                    <div className="pl-6 relative">
                      <div className="absolute left-4 top-2 w-0.5 h-full bg-gradient-to-b from-orange-400 to-pink-400 rounded-full" />
                      <div className="relative bg-white/60 rounded-xl p-6 border border-white/50">
                        <div className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 border-4 border-white shadow-lg" />
                        <h4 className="font-bold text-gray-800 text-lg font-poppins">
                          B.E. in Computer Science
                        </h4>
                        <p className="text-orange-600 font-medium mb-2">
                          Chitkara University, Punjab
                        </p>
                        <p className="text-gray-600 font-medium">2023–2027</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Work Experience */}
                <motion.div 
                  className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8 border border-blue-200/50 relative overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5" />
                  <div className="relative z-10">
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-6 font-playfair">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      Work Experience
                    </h3>
                    <div className="pl-6 relative space-y-6">
                      <div className="absolute left-4 top-2 w-0.5 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />

                      <div className="relative bg-white/60 rounded-xl p-6 border border-white/50">
                        <div className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white shadow-lg" />
                        <h4 className="font-bold text-gray-800 text-lg font-poppins">
                          Web Team Member @OpenSourceChandigarh
                        </h4>
                        <p className="text-blue-600 font-medium mb-3">2024-2025</p>
                        <p className="text-gray-700 bg-white/70 p-4 rounded-lg border border-white/50 font-inter">
                          Contributed to open-source projects and collaborated with developers worldwide
                          to build impactful solutions.
                        </p>
                      </div>

                      <div className="relative bg-white/60 rounded-xl p-6 border border-white/50">
                        <div className="absolute -left-10 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-white shadow-lg" />
                        <h4 className="font-bold text-gray-800 text-lg font-poppins">
                          Project Team Leadership
                        </h4>
                        <p className="text-gray-700 font-inter mt-2">
                          Led multiple project teams with successful deliveries and mentored junior developers.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Enhanced Skills */}
                <motion.div 
                  className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 mb-8 border border-green-200/50 relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-teal-400/5" />
                  <div className="relative z-10">
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-8 font-playfair">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-teal-500">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      Skills & Expertise
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {skills.map((skill, i) => (
                        <motion.div
                          key={i}
                          className="bg-white/70 rounded-2xl p-6 border border-white/50 group cursor-pointer"
                          whileHover={{ y: -5, scale: 1.02 }}
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 2 + i * 0.1 }}
                        >
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.gradient} text-white`}>
                              {skill.icon}
                            </div>
                            <h4 className="font-bold text-gray-800 text-lg font-poppins">
                              {skill.category}
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {skill.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 text-sm bg-white/80 text-gray-700 rounded-full border border-white/60 font-jetbrains font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Achievements */}
                <motion.div 
                  className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-6 border border-yellow-200/50 relative overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-amber-400/5" />
                  <div className="relative z-10">
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-gray-800 mb-8 font-playfair">
                      <div className="p-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500">
                        <Trophy className="w-6 h-6 text-white" />
                      </div>
                      Achievements & Recognition
                    </h3>
                    <div className="space-y-4">
                      {achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          className={`flex items-start space-x-4 bg-white/70 rounded-2xl p-6 border border-white/50 group hover:shadow-lg transition-all duration-300`}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2.4 + i * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className={`p-3 ${achievement.bg} rounded-full ${achievement.color} group-hover:scale-110 transition-transform`}>
                            {achievement.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-800 font-poppins mb-2">
                              {achievement.title}
                            </h4>
                            <p className="text-gray-600 font-inter">
                              {achievement.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom Styles with Scrollbar */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .font-inter { font-family: 'Inter', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-jetbrains { font-family: 'JetBrains Mono', monospace; }
        .font-poppins { font-family: 'Poppins', sans-serif; }

        /* Custom Scrollbar Styling */
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
        *:focus {
          outline: 2px solid #ff9555;
          outline-offset: 2px;
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
      `}</style>
    </div>
  );
};

export default About;