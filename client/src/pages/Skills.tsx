import React from "react";
import { Code, Palette, Cpu, Database, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { icon: <Code />, name: "MERN Stack Development", level: 100 },
  { icon: <Database />, name: "Databases & Backend", level: 80 },
  { icon: <Globe />, name: "Full-Stack Development", level: 85 },
  { icon: <Smartphone />, name: "Mobile Development", level: 60 },
  { icon: <Cpu />, name: "Programming", level: 95 },
  { icon: <Palette />, name: "UI/UX Design", level: 75 },
];

const Skills: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-orange-400 to-white flex flex-col items-center px-6 py-16 mt-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold font-serif text-orange-700 mb-4"
      >
        My Skills
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 text-lg text-center max-w-2xl mb-12"
      >
        A blend of creativity, problem-solving, and technology expertise that helps me craft
        modern, responsive, and efficient digital solutions.
      </motion.p>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-orange-200 hover:shadow-xl hover:scale-105 transition-transform"
          >
            {/* Icon + Name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-100 text-orange-600 rounded-full">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600"
              />
            </div>
            <p className="text-sm text-gray-600">{skill.level}% Proficiency</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
