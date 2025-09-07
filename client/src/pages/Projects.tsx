import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import Project1 from "../assets/cmv.png";
import Project2 from "../assets/osc.png";
import Project3 from "../assets/cid.png";
import Project4 from "../assets/quizopedia.png";
import Project5 from "../assets/coderdesign.png";

const projects = [
  {
    img: Project1,
    title: "CodeMultiVerse",
    desc: "A coding platform where you can learn coding with proper roadmap, quizzes, challenges, assignments and many more.",
    link: "https://code-multi-verse.vercel.app/",
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
  },
  {
    img: Project2,
    title: "OpenSourceChandigarh Official Website",
    desc: "The official website for OpenSourceChandigarh, showcasing community projects, events, and resources for developers.",
    link: "https://osc-tan.vercel.app/",
    tech: ["TypeScript", "Tailwind", "Vercel", "MERN Stack"],
  },
  {
    img: Project3,
    title: "CID-CTF Event Website",
    desc: "A dynamic platform for the CID-CTF event, providing participants with challenges, leaderboards, and event updates in real-time.",
    link: "https://cid-ctf.vercel.app/login",
    tech: ["React", "Express", "MongoDB", "Node.js"],
  },
  {
    img: Project4,
    title: "Quizopedia",
    desc: "An interactive online quiz application offering diverse quizzes across categories, with a user-friendly interface and real-time scoring.",
    link: "https://quizopedia.vercel.app/",
    tech: ["HTML", "CSS", "Firebase", "JavaScript"],
  },
  {
    img: Project5,
    title: "CoderDesign",
    desc: "A portfolio and project showcase platform for developers and designers to present their work creatively and professionally.",
    link: "https://www.coderdesign.com/",
    tech: ["React", "Tailwind", "Node.js", "Express", "Next.js", "MongoDB"],
  },
];

// Particle component
const TechParticle = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-orange-400 opacity-30"
    style={{ width: size, height: size, top: `${y}%`, left: `${x}%` }}
    animate={{ y: [0, -10, 0], opacity: [0.2, 0.7, 0.2] }}
    transition={{ repeat: Infinity, duration: 2 + delay, ease: "easeInOut" }}
  />
);

const Projects: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [cardPositions, setCardPositions] = useState<{ x: number; y: number }[]>([]);
  const [particles, setParticles] = useState<{ x: number; y: number; size: number; delay: number }[]>([]);

  // Calculate card positions for connecting lines
  useEffect(() => {
    const updatePositions = () => {
      if (gridRef.current) {
        const cards = Array.from(gridRef.current.querySelectorAll(".project-card")) as HTMLElement[];
        setCardPositions(
          cards.map((card) => {
            const rect = card.getBoundingClientRect();
            return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
          })
        );
      }
    };
    updatePositions();
    window.addEventListener("resize", updatePositions);
    return () => window.removeEventListener("resize", updatePositions);
  }, []);

  // Generate random tech particles
  useEffect(() => {
    const tempParticles = [];
    for (let i = 0; i < 30; i++) {
      tempParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 3 + Math.random() * 4,
        delay: Math.random() * 2,
      });
    }
    setParticles(tempParticles);
  }, []);

  return (
    <div className="relative w-full min-h-screen px-6 py-16 overflow-hidden bg-gradient-to-b from-[#FFF4EB] via-[#FFE0C7] to-[#FFD4B0]">
      {/* Tech particles floating around */}
      {particles.map((p, i) => (
        <TechParticle key={i} x={p.x} y={p.y} size={p.size} delay={p.delay} />
      ))}

      {/* Section Heading */}
      <div className="relative z-10 text-center mb-16 mt-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 via-[#A65F00] to-red-500 bg-clip-text text-transparent">
          Code in Action
        </h1>
        <div className="mt-5 w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-400 mx-auto rounded-full" />
      </div>

      {/* Masonry-style grid */}
      <div ref={gridRef} className="relative z-10 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="project-card relative block break-inside-avoid bg-white/50 backdrop-blur-xl border border-white/30 rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative flex items-center gap-2 px-5 pt-4">
              <Cpu size={20} className="text-orange-400" />
              <h2 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition">
                {project.title}
              </h2>
            </div>

            <img
              src={project.img}
              alt={project.title}
              className="w-full h-auto object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105 mt-2"
            />

            {/* Project Info */}
            <div className="p-5 flex flex-col gap-3">
              <p className="text-gray-700 text-sm leading-relaxed">{project.desc}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-gray-800 font-medium shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Animated border glow */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-orange-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>
        ))}
      </div>

      {/* Circuit lines connecting card centers */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {cardPositions.map((pos, idx) => {
          if (idx === cardPositions.length - 1) return null;
          const next = cardPositions[idx + 1];
          return (
            <motion.line
              key={idx}
              x1={pos.x}
              y1={pos.y}
              x2={next.x}
              y2={next.y}
              stroke="#FF7A4A"
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default Projects;
