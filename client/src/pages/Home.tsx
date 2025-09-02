import { Github, Linkedin, Download, Layers, Database, Code } from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import Harshit from "../assets/harshit.png";

export default function Home() {
  const roles = useMemo(
    () => [
      "Full-Stack Developer",
      "MERN Enthusiast",
      "Problem Solver",
    ],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayedText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <main className="pt-40 w-full h-screen flex items-start justify-center font-[Inter] mt-10">
      <section
        className="flex flex-col md:flex-row items-center justify-between w-full min-h-[80.5vh] px-8 md:px-20 py-20 rounded-tl-[3rem] rounded-tr-[3rem] overflow-hidden relative"
        style={{
          background: "linear-gradient(180deg, #fb8c5c 0%, #f9cda3 100%)",
        }}
      >
        {/* Left - Intro */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center space-y-8">
          <div>
            <h2 className="fade-in font-[Playfair_Display] text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Hi 👋, I’m{" "}
              <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
                Harshit Aggarwal
              </span>{" "}
            </h2>

            {/* Typing Effect */}
            <p className="text-lg md:text-xl mt-3 font-medium text-gray-700 h-6 md:h-8">
              {displayedText}
              <span className="blinking-cursor">|</span>
            </p>

            <p className="fade-in delay-200 mt-6 text-lg md:text-xl text-gray-800/90 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              I’m a passionate developer who loves creating impactful{" "}
              <span className="text-orange-700 font-semibold">web experiences</span>. I enjoy building{" "}
              <span className="text-pink-700 font-semibold">full-stack applications</span>{" "}
              and designing{" "}
              <span className="text-red-600 font-semibold">user-friendly interfaces</span>.
            </p>

            {/* CTA Buttons */}
            <div className="fade-in delay-300 flex justify-center md:justify-start space-x-4 mt-8">
              <a
                href="/projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-semibold shadow-lg animate-glow hover:shadow-xl hover:scale-105 transition-transform"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="px-6 py-3 rounded-xl border-2 border-orange-400 text-orange-600 font-semibold bg-white/70 backdrop-blur-md hover:bg-orange-50 hover:scale-105 transition-transform"
              >
                Let’s Connect
              </a>
            </div>

            {/* Socials */}
            <div className="fade-in delay-400 flex justify-center md:justify-start space-x-6 mt-8">
              <a
                href="https://www.linkedin.com/in/harshit-aggarwal100306/"
                target="_blank"
                className="text-gray-800 hover:text-orange-600 hover:scale-110 transition"
              >
                <Linkedin className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/HarshitAggarwal10"
                target="_blank"
                className="text-gray-800 hover:text-pink-600 hover:scale-110 transition"
              >
                <Github className="w-8 h-8" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="text-gray-800 hover:text-red-600 hover:scale-110 transition"
              >
                <Download className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Tech Focus Card */}
          <div className="tech-card w-full md:w-[80%] bg-white/80 backdrop-blur-lg border-2 border-transparent rounded-2xl shadow-xl p-6 flex flex-col space-y-4 animate-slideIn relative overflow-hidden">
            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-t-2xl"></div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Tech Focus</h3>

            <div className="group flex flex-col space-y-1 cursor-pointer p-2 rounded-lg hover:bg-orange-50 transition">
              <div className="flex items-center space-x-3">
                <Layers className="text-orange-600 w-6 h-6 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                <span className="font-semibold text-gray-800">Full-Stack Development</span>
              </div>
              <p className="max-h-0 overflow-hidden text-sm text-gray-600 transition-all duration-500 group-hover:max-h-20">
                Building scalable applications from front-end to back-end with modern tools and frameworks.
              </p>
            </div>

            <div className="group flex flex-col space-y-1 cursor-pointer p-2 rounded-lg hover:bg-pink-50 transition">
              <div className="flex items-center space-x-3">
                <Database className="text-pink-600 w-6 h-6 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                <span className="font-semibold text-gray-800">MERN Stack</span>
              </div>
              <p className="max-h-0 overflow-hidden text-sm text-gray-600 transition-all duration-500 group-hover:max-h-20">
                Expertise in MongoDB, Express.js, React, and Node.js for end-to-end web solutions.
              </p>
            </div>

            <div className="group flex flex-col space-y-1 cursor-pointer p-2 rounded-lg hover:bg-red-50 transition">
              <div className="flex items-center space-x-3">
                <Code className="text-red-600 w-6 h-6 transition-transform duration-500 group-hover:translate-y-1 group-hover:scale-110" />
                <span className="font-semibold text-gray-800">Programming & Problem Solving</span>
              </div>
              <p className="max-h-0 overflow-hidden text-sm text-gray-600 transition-all duration-500 group-hover:max-h-20">
                Strong foundation in algorithms, data structures, and competitive coding challenges.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Picture */}
        <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative">
          {/* Gradient Glow Behind */}
          <div className="absolute inset-0 flex justify-center md:justify-end items-end">
            <div className="w-80 md:w-[420px] h-[520px] rounded-3xl bg-gradient-to-tr from-pink-500 to-orange-400 opacity-30 blur-3xl"></div>
          </div>

          {/* Image */}
          <img
            src={Harshit}
            alt="Harshit Aggarwal portrait"
            className="relative w-82 md:w-[400px] h-[505px] rounded-3xl object-cover shadow-[0_5px_25px_rgba(0,0,0,0.35)] border-4 border-white/30 animate-float"
          />
        </div>
      </section>

      {/* Animations */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;800&family=Inter:wght@400;500;600&display=swap');

          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }

          /* Fade + Slide Animation */
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeSlideUp 1s ease-out forwards;
          }
          .fade-in.delay-200 {
            animation-delay: 0.2s;
          }
          .fade-in.delay-300 {
            animation-delay: 0.3s;
          }
          .fade-in.delay-400 {
            animation-delay: 0.4s;
          }

          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Glow Animation for CTA */
          @keyframes glowPulse {
            0% { box-shadow: 0 0 8px rgba(251,140,92,0.6), 0 0 15px rgba(249,205,163,0.4); }
            50% { box-shadow: 0 0 16px rgba(249,83,109,0.8), 0 0 25px rgba(249,205,163,0.6); }
            100% { box-shadow: 0 0 8px rgba(251,140,92,0.6), 0 0 15px rgba(249,205,163,0.4); }
          }
          .animate-glow {
            animation: glowPulse 3s infinite ease-in-out;
          }

          /* Slide In Animation for Card */
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-60px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slideIn {
            animation: slideInLeft 1s ease-out forwards;
          }

          /* Blinking Cursor */
          .blinking-cursor {
            display: inline-block;
            margin-left: 2px;
            width: 1ch;
            color: #ff4d4d;
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            from, to { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </main>
  );
}
