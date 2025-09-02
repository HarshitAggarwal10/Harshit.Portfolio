import React from "react";
import { motion } from "framer-motion";
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
    tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB"]
  },
  {
    img: Project2,
    title: "OpenSourceChandigarh Official Website",
    desc: "The official website for OpenSourceChandigarh, showcasing community projects, events, and resources for developers.",
    link: "https://osc-tan.vercel.app/",
    tech: ["TypeScript", "Tailwind", "Vercel", "MERN Stack"]
  },
  {
    img: Project3,
    title: "CID-CTF Event Website",
    desc: "A dynamic platform for the CID-CTF event, providing participants with challenges, leaderboards, and event updates in real-time.",
    link: "https://cid-ctf.vercel.app/login",
    tech: ["React", "Express", "MongoDB", "Node.js"]
  },
  {
    img: Project4,
    title: "Quizopedia",
    desc: "An interactive online quiz application offering diverse quizzes across categories, with a user-friendly interface and real-time scoring.",
    link: "https://quizopedia.vercel.app/",
    tech: ["HTML", "CSS", "Firebase", "JavaScript"]
  },
  {
    img: Project5,
    title: "CoderDesign",
    desc: "A portfolio and project showcase platform for developers and designers to present their work creatively and professionally.",
    link: "https://www.coderdesign.com/",
    tech: ["React", "Tailwind", "Node.js", "Express", "Next.js", "MongoDB"]
  },
];

const Projects: React.FC = () => {
  return (
    <div className="w-full min-h-screen p-8 bg-gradient-to-b from-[#FA8F5A] to-[#F9D9B9] mt-20">
      <h1 className="text-5xl sm:text-6xl font-serif font-extrabold text-black text-center mb-12">
        Projects
      </h1>

      {/* Masonry-style grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative block break-inside-avoid bg-white/40 backdrop-blur-md border border-white/30 shadow-lg rounded-xl overflow-hidden group hover:shadow-2xl"
          >
            <div className="relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-auto object-cover rounded-t-xl"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
                  View Project
                </span>
              </div>
            </div>

            <div className="p-4 flex flex-col gap-2">
              <h2 className="font-semibold text-lg text-gray-900">
                {project.title}
              </h2>
              <p className="text-gray-700 text-sm">{project.desc}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-orange-200 to-pink-200 text-gray-900 font-medium shadow-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
