import React from "react";
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
} from "lucide-react";
import { GraduationCap, Briefcase, Sparkles, Trophy } from "lucide-react";
import MyImage from "../assets/About.png";
import Harshit from "../assets/harshit.png";

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#FFE5D4] via-[#FFD1B7] to-[#FFB891] p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full mt-6 md:mt-8">
          {/* Left Section - About Me */}
          <div className="w-full md:w-1/2 text-left">
            <div className="mb-6 md:mb-10">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#7A4A3B] mb-4">
                About Me
              </h1>
              <p className="text-lg text-[#9C6B58] max-w-lg">
                Full-Stack Developer passionate about creating impactful digital
                experiences
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="overflow-hidden w-full h-[22rem] sm:h-[26rem] md:h-[32rem]">
              <img
                src={MyImage}
                alt="Development Illustration"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* Left Column - Profile & Details */}
          <div className="w-full lg:w-2/5">
            {/* Profile Card */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 mb-6 border border-orange-100 backdrop-blur-sm">
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40 rounded-full shadow-xl overflow-hidden mb-5 border-4 border-white ring-2 ring-orange-100">
                  <img
                    src={Harshit}
                    alt="Harshit Aggarwal"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">
                  Harshit Aggarwal
                </h2>
                <div className="flex items-center gap-2 text-orange-600 font-medium mb-4">
                  <Code className="w-5 h-5" />
                  <span>Full-Stack Developer</span>
                </div>

                <div className="w-full bg-orange-100 h-px my-4"></div>

                <div className="w-full space-y-3">
                  <div className="flex items-center text-gray-700">
                    <Mail className="w-5 h-5 text-orange-500 mr-3" />
                    <span className="text-sm truncate">
                      harshitaggarwal100306@gmail.com
                    </span>
                  </div>

                  <div className="flex justify-center gap-4 mt-5">
                    <a
                      href="https://github.com/HarshitAggarwal10"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-orange-50 rounded-full shadow hover:bg-orange-100 transition transform hover:-translate-y-1"
                    >
                      <Github className="w-6 h-6 text-gray-800" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/harshit-aggarwal100306/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-orange-50 rounded-full shadow hover:bg-orange-100 transition transform hover:-translate-y-1"
                    >
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </a>
                    <a
                      href="mailto:harshitaggarwal100306@gmail.com"
                      className="p-3 bg-orange-50 rounded-full shadow hover:bg-orange-100 transition transform hover:-translate-y-1"
                    >
                      <Mail className="w-6 h-6 text-orange-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 border border-orange-100 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Sparkles className="w-5 h-5 text-orange-500 mr-2" />
                Tech Stack
              </h3>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "React", icon: <Code className="w-5 h-5" /> },
                  { name: "Node.js", icon: <Server className="w-5 h-5" /> },
                  { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
                  {
                    name: "PostgreSQL",
                    icon: <Database className="w-5 h-5" />,
                  },
                  {
                    name: "TypeScript",
                    icon: <Terminal className="w-5 h-5" />,
                  },
                  { name: "C++", icon: <Cpu className="w-5 h-5" /> },
                  { name: "Java", icon: <Cpu className="w-5 h-5" /> },
                  { name: "Git/GitHub", icon: <Boxes className="w-5 h-5" /> },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-orange-50/70 p-2 rounded-lg text-sm font-medium text-gray-700"
                  >
                    <div className="text-orange-500">{tech.icon}</div>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content & Full-height Image */}
          <div className="w-full lg:w-3/5">
            <div className="bg-white/90 rounded-2xl shadow-lg p-6 md:p-8 mb-6 border border-orange-100 backdrop-blur-sm">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  My Journey
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  I am a passionate developer and designer with experience in
                  building full-stack applications, creating visually appealing
                  interfaces, and crafting engaging user experiences. I love
                  solving complex problems and building projects that make an
                  impact.
                </p>
              </div>

              {/* Education */}
              <div className="bg-orange-50/50 rounded-xl p-5 mb-6 border-l-4 border-orange-500">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
                  <GraduationCap className="w-6 h-6 text-orange-500" />{" "}
                  Education
                </h3>
                <div className="pl-8 relative">
                  <div className="absolute left-2 top-2 w-0.5 h-full bg-orange-300"></div>
                  <div className="relative mb-4">
                    <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-orange-500"></div>
                    <h4 className="font-medium text-gray-800">
                      B.E. in Computer Science
                    </h4>
                    <p className="text-gray-600">
                      Chitkara University, Punjab (2023–2027)
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="bg-orange-50/50 rounded-xl p-5 mb-6 border-l-4 border-orange-600">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
                  <Briefcase className="w-6 h-6 text-orange-600" /> Work
                  Experience
                </h3>
                <div className="pl-8 relative">
                  <div className="absolute left-2 top-2 w-0.5 h-full bg-orange-300"></div>
                  <div className="relative mb-5">
                    <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-orange-600"></div>
                    <h4 className="font-medium text-gray-800">
                      Web Team Member @OpenSourceChandigarh
                    </h4>
                    <p className="text-gray-600 mb-2">2024-2025</p>
                    <p className="text-gray-700 text-sm bg-orange-100/50 p-3 rounded-lg">
                      Contributed to open-source projects and collaborated with
                      developers worldwide.
                    </p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-8 top-1.5 w-4 h-4 rounded-full bg-orange-600"></div>
                    <h4 className="font-medium text-gray-800">
                      Project Team Leadership
                    </h4>
                    <p className="text-gray-700">
                      Led multiple project teams with successful deliveries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-orange-50/50 rounded-xl p-5 mb-6 border-l-4 border-orange-700">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
                  <Sparkles className="w-6 h-6 text-orange-700" /> Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Code className="w-4 h-4 mr-2 text-orange-600" /> Frontend
                    </h4>
                    <p className="text-gray-700 text-sm">
                      React, Tailwind CSS, Framer-Motion, TypeScript
                    </p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Server className="w-4 h-4 mr-2 text-orange-600" />{" "}
                      Backend
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Node.js, Express.js, REST APIs
                    </p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Database className="w-4 h-4 mr-2 text-orange-600" />{" "}
                      Database
                    </h4>
                    <p className="text-gray-700 text-sm">MongoDB, MySQL</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <Terminal className="w-4 h-4 mr-2 text-orange-600" />{" "}
                      Languages
                    </h4>
                    <p className="text-gray-700 text-sm">
                      JavaScript, TypeScript, C++, Java
                    </p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-orange-50/50 rounded-xl p-5 border-l-4 border-amber-600">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-4">
                  <Trophy className="w-6 h-6 text-amber-600" /> Achievements
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-amber-600 mr-3"></div>
                    <p className="text-gray-700">
                      Dean's List – STAR PROGRAMMER recognition
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-amber-600 mr-3"></div>
                    <p className="text-gray-700">
                      Hack The Mountains 2024 (Rajkot, Gujarat) – Finalist
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-amber-600 mr-3"></div>
                    <p className="text-gray-700">
                      Active Open-source contributor on GitHub
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Image Section */}
      </div>
    </div>
  );
};

export default About;
