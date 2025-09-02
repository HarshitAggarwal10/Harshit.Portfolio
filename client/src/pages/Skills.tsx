import React from "react";
import { Code, Palette, Cpu, Database, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { icon: <Code className="w-6 h-6" />, name: "MERN Stack Development", level: 100 },
  { icon: <Database className="w-6 h-6" />, name: "Databases & Backend", level: 80 },
  { icon: <Globe className="w-6 h-6" />, name: "Full-Stack Development", level: 85 },
  { icon: <Smartphone className="w-6 h-6" />, name: "Mobile Development", level: 60 },
  { icon: <Cpu className="w-6 h-6" />, name: "Programming", level: 95 },
  { icon: <Palette className="w-6 h-6" />, name: "UI/UX Design", level: 75 },
];

// Circular Progress Component
const CircularProgress: React.FC<{ level: number }> = ({ level }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = (level / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="w-32 h-32 transform -rotate-90">
        <circle
          cx="64"
          cy="64"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="transparent"
        />
        <motion.circle
          cx="64"
          cy="64"
          r={radius}
          stroke="url(#grad)"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="drop-shadow-[0_0_8px_rgba(251,146,60,0.7)]"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#fb923c" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Percentage */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute text-xl font-bold text-gray-800"
      >
        {level}%
      </motion.span>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100 flex flex-col items-center px-6 py-20 mt-16 overflow-hidden">
      {/* Subtle gradient blob background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl animate-pulse" />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl font-extrabold font-serif text-orange-700 mb-6"
      >
        My Skills
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="relative text-gray-600 text-lg text-center max-w-2xl mb-16"
      >
        A fusion of creativity, problem-solving, and tech mastery that helps me craft
        impactful, modern, and scalable digital solutions.
      </motion.p>

      {/* Skills Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center gap-6 border border-orange-100 hover:shadow-2xl transition-all"
          >
            {/* Circular Progress */}
            <CircularProgress level={skill.level} />

            {/* Icon + Name */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="w-14 h-14 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full shadow-md"
            >
              {skill.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-800 text-center">{skill.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative mt-20 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-8 rounded-3xl shadow-lg max-w-3xl text-center"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          🚀 Let’s Build Something Amazing Together!
        </h2>
        <p className="text-lg text-orange-50 mb-6">
          With my expertise in full-stack development and design, I’m ready to bring your
          vision to life.
        </p>
        <a
          href="/contact"
          className="px-6 py-3 bg-white text-orange-600 rounded-full shadow hover:bg-orange-100 font-semibold transition"
        >
          Contact Me
        </a>
      </motion.div>
    </div>
  );
};

export default Skills;
