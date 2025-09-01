import React from "react";
import { Github, Linkedin, Mail, Code } from "lucide-react";
import MyImage from "../assets/About.png"; // Right side image
import Harshit from "../assets/harshit.png"; // Left side personal photo

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-gradient-to-b from-[#FA8F5A] to-[#F9D9B9] p-4 sm:p-8 lg:p-12 overflow-hidden">
      
      {/* Left Side: Personal Info + Scrollable Details */}
      <div className="w-full lg:w-1/2 flex flex-col p-4 sm:p-8 md:p-12 mt-10">
        <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-serif font-extrabold text-black mb-8">
          About Me
        </h1>

        {/* Personal Photo + Info */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10 relative">
          {/* Profile Photo */}
          <div className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full shadow-2xl overflow-hidden">
            <img
              src={Harshit}
              alt="Harshit Aggarwal"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Info Card */}
          <div className="flex flex-col items-center sm:items-start rounded-xl p-5 w-full sm:w-auto">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              Harshit Aggarwal
            </h2>
            <p className="text-black text-sm sm:text-base mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-blue-500" /> Full-Stack Developer
            </p>

            {/* Email with Icon */}
            <p className="text-black text-sm mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-red-500" />{" "}
              harshitaggarwal100306@gmail.com
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://github.com/harshit-aggarwal-100306"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
              >
                <Github className="w-6 h-6 text-gray-800" />
              </a>
              <a
                href="https://linkedin.com/in/harshit-aggarwal-100306"
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
              >
                <Linkedin className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="mailto:harshit@example.com"
                className="p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200 transition"
              >
                <Mail className="w-6 h-6 text-orange-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 max-h-[75vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 rounded-xl shadow-lg bg-white/40 backdrop-blur-md border border-white/30 p-6 space-y-6 font-sans">
          {/* Education */}
          <section className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Education
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>
                B.E. in Computer Science – Chitkara University, Punjab
                (2023–2027)
              </li>
            </ul>
          </section>

          {/* Work Experience */}
          <section className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Work Experience
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              <li>
                Web Team Member @OpenSourceChandigarh – 2024-2025
                <p className="text-gray-600 text-sm mt-1 pl-5">
                  Contributed to various open-source projects and collaborated
                  with a team of developers.
                </p>
              </li>
              <li>Lead multiple Project Teams</li>
            </ul>
          </section>

          {/* Skills */}
          <section className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-1">
                  Frontend
                </h4>
                <p className="text-gray-700 text-sm">
                  React, Tailwind CSS, BootStrap, Framer-Motion, Typescript
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-1">
                  Backend
                </h4>
                <p className="text-gray-700 text-sm">
                  Node.js, Express.js, REST APIs
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-1">
                  Database
                </h4>
                <p className="text-gray-700 text-sm">MongoDB, MySQL</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-1">
                  Programming Languages
                </h4>
                <p className="text-gray-700 text-sm">
                  JavaScript, TypeScript, C++, Java
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1 flex items-center gap-1">
                  Tools & Others
                </h4>
                <p className="text-gray-700 text-sm">
                  Git, GitHub, VS Code
                </p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Achievements
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Name in Dean's List for STAR PROGRAMMER</li>
              <li>Hack The Mountains held in Rajkot, Gujarat finalist</li>
              <li>Open-source contributor on GitHub</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Right Side: About Text + Illustration */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start p-4 sm:p-8 md:p-12 mt-10 lg:mt-16">
        <p className="text-lg sm:text-xl md:text-2xl font-light font-serif text-black leading-relaxed mb-6">
          I am a passionate developer and designer with experience in building
          full-stack applications, creating visually appealing interfaces, and
          crafting engaging user experiences. I love solving complex problems
          and building projects that make an impact.
        </p>

        <img
          src={MyImage}
          alt="Illustration"
          className="w-full sm:w-96 md:w-[38rem] h-64 sm:h-80 md:h-[22rem] rounded-2xl object-cover shadow-lg mt-10"
        />
      </div>

      {/* Scrollbar Styling */}
      <style>
        {`
          .scrollbar-gradient::-webkit-scrollbar {
            width: 6px;
          }
          .scrollbar-gradient::-webkit-scrollbar-track {
            background: transparent;
          }
          .scrollbar-gradient::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #FA8F5A, #F472B6);
            border-radius: 9999px;
          }
          .scrollbar-gradient::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #F472B6, #FA8F5A);
          }
        `}
      </style>
    </div>
  );
};

export default About;
