
import {
  Github,
  Linkedin,
  Download,
  Layers,
  Database,
  AlertTriangle,
  X,
  ChevronRight,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Zap,
  ArrowUpRight,
  MousePointer2,
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Harshit from "../assets/harshit.png";

export default function Home() {
  const roles = useMemo(
    () => [
      "Full-Stack Developer",
      "MERN Enthusiast", 
      "Problem Solver",
      "Code Architect",
    ],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for subtle parallax effects
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

  // Enhanced typing effect with more natural feel
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : Math.random() * 100 + 50;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowError(true);
  };

  // Floating particles animation data
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 4 + 3,
  }));

  return (
    <main className="pt-16 md:pt-20 w-full min-h-screen flex flex-col items-center justify-center font-inter relative overflow-hidden">
      {/* Google Fonts Import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 107, 53, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 107, 53, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
            animation: "gridMove 25s linear infinite",
          }}
        />
      </div>

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(255, 107, 53, 0.4) 0%, rgba(255, 177, 131, 0.2) 70%, transparent 100%)`,
          }}
          animate={{
            y: [-20, -120],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.id * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <section
        className="mt-20 flex flex-col items-center w-full min-h-[95vh] px-4 sm:px-6 md:px-16 lg:px-20 py-8 sm:py-12 rounded-tl-[2rem] rounded-tr-[2rem] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(180deg, #FFD4B8 0%, #FFB183 50%, #FF9555 100%)",
        }}
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-[1px]" />

        {/* Animated orbs in background */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-orange-400/25 to-pink-400/25 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-40 h-40 rounded-full bg-gradient-to-r from-pink-400/25 to-red-400/25 blur-3xl"
          animate={{
            x: [0, -35, 0],
            y: [0, 20, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-orange-300/20 to-yellow-300/20 blur-2xl"
          animate={{
            x: [0, 25, -15, 0],
            y: [0, -20, 10, 0],
            scale: [0.8, 1.1, 0.9, 0.8],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hero Section with Photo */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 z-10 relative mb-16">

          {/* Left Content Section */}
          <div className="flex-1 text-center lg:text-left flex flex-col justify-center space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex items-center justify-center lg:justify-start space-x-3"
            >
              <div className="relative flex items-center">
                <div className="w-3.5 h-3.5 bg-emerald-500 rounded-full animate-pulse shadow-lg" />
                <div className="absolute inset-0 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping opacity-40" />
                <div
                  className="absolute inset-0 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-pulse opacity-20"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
              <span className="text-sm font-jetbrains text-gray-800/90 tracking-wider font-medium">
                Available for opportunities
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="ml-2"
              >
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <div>
              <motion.h2
                className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 font-poppins font-medium text-gray-700">
                  Hey there! 👋
                </span>
                I'm{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 bg-clip-text text-transparent drop-shadow-sm font-extrabold">
                    Harshit Aggarwal
                  </span>
                  <motion.div
                    className="absolute -top-3 -right-4 md:-top-4 md:-right-6"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    }}
                  >
                    <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
                  </motion.div>

                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "100%", opacity: 1 }}
                    transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                  />
                </span>
              </motion.h2>

              {/* Enhanced Typing Effect */}
              <div className="relative mt-6">
                <motion.div
                  className="flex items-center justify-center lg:justify-start space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <Terminal className="w-5 h-5 text-orange-600" />
                    <span className="font-jetbrains text-sm text-gray-600">
                      ~/dev
                    </span>
                  </div>
                  <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 font-poppins"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {displayedText}
                    <span className="blinking-cursor font-jetbrains">|</span>
                  </motion.p>
                </motion.div>
              </div>

              <motion.p
                className="mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-gray-900/90 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-inter font-medium"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                I'm a passionate developer who loves creating impactful{" "}
                <span className="relative text-orange-700 font-semibold group cursor-default">
                  web experiences
                  <motion.div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </span>
                . I enjoy building{" "}
                <span className="relative text-pink-600 font-semibold group cursor-default">
                  full-stack applications
                  <motion.div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500 to-pink-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </span>{" "}
                and crafting{" "}
                <span className="relative text-red-500 font-semibold group cursor-default">
                  user-friendly interfaces
                  <motion.div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-red-500 to-red-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                </span>
                .
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.a
                  href="/projects"
                  className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-semibold shadow-2xl overflow-hidden font-poppins text-sm sm:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>View My Work</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.a>

                <motion.a
                  href="/contact"
                  className="group relative px-8 py-4 rounded-2xl border-2 border-orange-300/60 text-orange-700 font-semibold bg-white/60 backdrop-blur-lg overflow-hidden font-poppins shadow-lg text-sm sm:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-pink-50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>Let's Connect</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.a>
              </motion.div>

              {/* Enhanced Social Icons */}
              <motion.div
                className="flex justify-center lg:justify-start space-x-5 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
              >
                {[
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/harshit-aggarwal100306/",
                    color: "hover:text-blue-600",
                    bgColor: "hover:bg-blue-50",
                    shadowColor: "hover:shadow-blue-200",
                  },
                  {
                    Icon: Github,
                    href: "https://github.com/HarshitAggarwal10",
                    color: "hover:text-gray-900",
                    bgColor: "hover:bg-gray-50",
                    shadowColor: "hover:shadow-gray-200",
                  },
                  {
                    Icon: Download,
                    onClick: handleResumeClick,
                    color: "hover:text-red-500",
                    bgColor: "hover:bg-red-50",
                    shadowColor: "hover:shadow-red-200",
                  },
                ].map(
                  ({ Icon, href, onClick, color, bgColor, shadowColor }, idx) => (
                    <motion.a
                      key={idx}
                      href={href}
                      onClick={onClick}
                      className={`relative p-4 rounded-2xl bg-white/70 backdrop-blur-lg border border-white/40 text-gray-700 ${color} ${bgColor} transition-all duration-300 group shadow-lg ${shadowColor}`}
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 + idx * 0.1 }}
                    >
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-pink-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-10 group-hover:animate-ping" />
                    </motion.a>
                  )
                )}
              </motion.div>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="flex-shrink-0 order-1 lg:order-2 relative">
            <div className="relative">
              {/* Floating code snippets */}
              <motion.div
                className="absolute -top-6 -left-8 lg:-top-8 lg:-left-12 p-3 lg:p-4 bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl border border-orange-200/50 z-20"
                animate={{
                  y: [0, -12, 0],
                  rotate: [-1.5, 1.5, -1.5],
                }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <code className="text-xs lg:text-sm text-gray-700 font-jetbrains font-medium">
                  <span className="text-blue-600">const</span>{" "}
                  <span className="text-purple-600">dev</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-green-600">'Harshit'</span>
                </code>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-8 lg:-bottom-6 lg:-right-12 p-3 lg:p-4 bg-white/95 backdrop-blur-sm rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl border border-pink-200/50 z-20"
                animate={{
                  y: [0, 12, 0],
                  rotate: [1.5, -1.5, 1.5],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <code className="text-xs lg:text-sm text-gray-700 font-jetbrains font-medium">
                  <span className="text-gray-500">{"{"}</span>{" "}
                  <span className="text-blue-600">passion</span>
                  <span className="text-gray-500">:</span>{" "}
                  <span className="text-orange-600">true</span>{" "}
                  <span className="text-gray-500">{"}"}</span>
                </code>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-12 lg:-left-16 p-2 lg:p-3 bg-white/95 backdrop-blur-sm rounded-lg lg:rounded-xl shadow-md lg:shadow-xl border border-red-200/50 z-20"
                animate={{
                  x: [0, -6, 0],
                  rotate: [-0.5, 0.5, -0.5],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <code className="text-xs text-gray-700 font-jetbrains">
                  <span className="text-red-500">npm</span>{" "}
                  <span className="text-gray-600">run</span>{" "}
                  <span className="text-green-600">dev</span>
                </code>
              </motion.div>

              {/* Profile Image with enhanced effects */}
              <motion.div
                className="relative"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${
                    mousePosition.y * 0.02
                  }px)`,
                }}
              >
                <motion.img
                  src={Harshit}
                  alt="Harshit Aggarwal - Full Stack Developer"
                  className="relative 
                    w-64 sm:w-72 md:w-80 lg:w-[350px] xl:w-[400px]
                    h-auto 
                    rounded-[2rem] lg:rounded-[2.5rem] object-cover 
                    shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                    border-3 lg:border-4 border-white/60 
                    z-10
                    transform-gpu"
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                  whileHover={{
                    scale: 1.03,
                    rotate: 1,
                    transition: { duration: 0.3 },
                  }}
                />

                {/* Multiple glowing ring effects */}
                <motion.div
                  className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 opacity-20 blur-xl lg:blur-2xl"
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.15, 0.35, 0.15],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-[2rem] lg:rounded-[2.5rem] bg-gradient-to-l from-pink-300 via-orange-300 to-red-300 opacity-10 blur-2xl lg:blur-3xl"
                  animate={{
                    scale: [1.08, 1.22, 1.08],
                    opacity: [0.08, 0.22, 0.08],
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Tech Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full max-w-7xl mx-auto relative z-10"
        >
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-12 lg:mb-16 text-center sm:text-left">
            <motion.div
              className="p-4 lg:p-5 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 shadow-xl"
              whileHover={{ rotate: 8, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Cpu className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-playfair leading-tight">
                Tech Stack & Expertise
              </h3>
              <p className="text-base lg:text-lg text-gray-600 font-inter mt-2 max-w-2xl mx-auto sm:mx-0">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </div>

          {/* Enhanced Tech Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Layers className="w-14 h-14 lg:w-16 lg:h-16" />,
                title: "Full Stack Development",
                desc: "End-to-end development with modern architectures, scalable solutions, and best practices for seamless user experiences.",
                color: "from-orange-500 to-pink-400",
                iconColor: "text-orange-600",
                skills: ["React", "Node.js", "TypeScript", "Next.js"],
                accent: "orange"
              },
              {
                icon: <Database className="w-14 h-14 lg:w-16 lg:h-16" />,
                title: "MERN Stack",
                desc: "Scalable applications using MongoDB ecosystem with modern backend solutions and real-time capabilities.",
                color: "from-pink-500 to-red-400",
                iconColor: "text-pink-500",
                skills: ["MongoDB", "Express.js", "JWT", "Socket.io"],
                accent: "pink"
              },
              {
                icon: <Globe className="w-14 h-14 lg:w-16 lg:h-16" />,
                title: "Web Technologies",
                desc: "Modern web standards, performance optimization, and responsive design for exceptional digital experiences.",
                color: "from-red-500 to-orange-400",
                iconColor: "text-red-500",
                skills: ["REST APIs", "GraphQL", "PWA", "Responsive Design"],
                accent: "red"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative"
                whileHover={{ y: -12, scale: 1.02 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
              >
                <div className="relative p-8 lg:p-10 rounded-3xl lg:rounded-[2rem] bg-white/60 backdrop-blur-xl shadow-xl border border-white/50 overflow-hidden cursor-pointer h-full transform-gpu hover:shadow-2xl transition-all duration-500">
                  {/* Dynamic background patterns */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-15 transition-all duration-700`}
                    whileHover={{ scale: 1.1 }}
                  />

                  {/* Accent border on hover */}
                  <div className={`absolute inset-0 rounded-3xl lg:rounded-[2rem] bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} 
                       style={{ padding: '2px' }}>
                    <div className="w-full h-full rounded-3xl lg:rounded-[2rem] bg-white/60 backdrop-blur-xl" />
                  </div>

                  {/* Floating glow effects */}
                  <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-r from-${item.accent}-400/0 via-${item.accent}-400/25 to-transparent rounded-full blur-3xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100`} />
                  <div className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-r from-transparent via-${item.accent}-300/20 to-${item.accent}-400/0 rounded-full blur-2xl group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100`} />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-6 h-full">
                    {/* Enhanced Icon */}
                    <motion.div
                      className={`relative p-5 lg:p-6 rounded-3xl bg-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 ${item.iconColor} border border-gray-100/50`}
                      whileHover={{ rotate: 15, scale: 1.15 }}
                      transition={{ duration: 0.4 }}
                    >
                      {item.icon}
                      {/* Icon glow effect */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h4 className="text-xl lg:text-2xl font-bold text-gray-800 font-poppins leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm lg:text-base text-gray-600 leading-relaxed font-inter line-clamp-4">
                        {item.desc}
                      </p>

                      {/* Enhanced skill tags */}
                      <div className="flex flex-wrap gap-2.5 justify-center pt-3">
                        {item.skills.map((skill, skillIdx) => (
                          <motion.span
                            key={skillIdx}
                            className="px-4 py-2 text-xs lg:text-sm font-medium bg-white/90 text-gray-700 rounded-2xl border border-white/70 backdrop-blur-sm font-jetbrains tracking-wide shadow-sm hover:shadow-md transition-all duration-300"
                            whileHover={{ scale: 1.08, y: -2 }}
                            initial={{ opacity: 0, scale: 0.7 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.15 + skillIdx * 0.08 }}
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Enhanced hover indicator */}
                    <motion.div
                      className="absolute bottom-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300"
                      animate={{
                        x: [0, 4, 0],
                        y: [0, -3, 0],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                        <MousePointer2 className="w-4 h-4 lg:w-5 lg:h-5" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Resume 404 Modal */}
      <AnimatePresence>
        {showError && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 max-w-lg w-full relative border border-orange-200/50 overflow-hidden"
              initial={{ scale: 0.7, opacity: 0, y: 60 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.7, opacity: 0, y: 60 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-50/80 to-pink-50/80"
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-pink-400 to-red-400" />

              <button
                onClick={() => setShowError(false)}
                className="absolute top-5 right-5 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100/80 rounded-full transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative z-10">
                <motion.div
                  className="flex justify-center mb-8"
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-100 to-orange-100 flex items-center justify-center shadow-xl">
                      <AlertTriangle className="w-12 h-12 text-red-500" />
                    </div>
                    <motion.div
                      className="absolute inset-0 rounded-full bg-red-500/30"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0, 0.3],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                <motion.h2
                  className="text-3xl font-bold text-gray-800 text-center mb-4 font-playfair"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="font-jetbrains text-red-500 font-normal">
                    404
                  </span>{" "}
                  File Not Found
                </motion.h2>

                <motion.p
                  className="text-center text-gray-600 mb-8 leading-relaxed text-lg font-inter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  The resume file is currently being updated with my latest
                  projects and achievements.
                  <span className="block mt-2 font-medium text-gray-700">
                    Please check back soon! 🚀
                  </span>
                </motion.p>

                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.button
                    onClick={() => setShowError(false)}
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-3 group font-poppins"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Got it!</span>
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&display=swap');

        .font-inter { font-family: 'Inter', sans-serif; }
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-jetbrains { font-family: 'JetBrains Mono', monospace; }
        .font-poppins { font-family: 'Poppins', sans-serif; }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(40px, 40px); }
        }

        .blinking-cursor {
          display: inline-block;
          margin-left: 3px;
          width: 1ch;
          color: #ff6b35;
          animation: blink 1.4s cubic-bezier(0.68, 0.01, 0.01, 0.99) infinite;
        }

        @keyframes blink {
          0%, 45% { opacity: 1; }
          46%, 100% { opacity: 0; }
        }

        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Enhanced scrollbar */
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
      `}</style>
    </main>
  );
}