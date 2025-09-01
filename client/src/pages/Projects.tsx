import React from "react";
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {[projects[0], projects[1]].map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white/40 backdrop-blur-md border border-white/30 shadow-lg rounded-xl overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h2 className="font-semibold text-lg text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-sm">{project.desc}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {[projects[2]].map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white/40 backdrop-blur-md border border-white/30 shadow-lg rounded-xl overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-204 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h2 className="font-semibold text-lg text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-sm">{project.desc}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {[projects[3], projects[4]].map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white/40 backdrop-blur-md border border-white/30 shadow-lg rounded-xl overflow-hidden flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h2 className="font-semibold text-lg text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-700 text-sm">{project.desc}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
