import {
  Github,
  Linkedin,
  Download,
  Layers,
  Database,
  Code,
  AlertTriangle,
  X,
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Harshit from "../assets/harshit.png";

export default function Home() {
  const roles = useMemo(
    () => ["Full-Stack Developer", "MERN Enthusiast", "Problem Solver"],
    []
  );

  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showError, setShowError] = useState(false);

  // Typing Effect Logic
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

  const handleResumeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <main className="pt-24 md:pt-36 w-full min-h-screen flex flex-col items-center justify-center font-[Inter]">
      <section
        className="mt-8 flex flex-col md:flex-row items-center justify-between w-full min-h-[80vh] px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 rounded-tl-[2rem] rounded-tr-[2rem] overflow-hidden relative"
        style={{
          background:
            "linear-gradient(180deg, #FFD4B8 0%, #FFB183 50%, #FF9555 100%)",
        }}
      >
        {/* ===== Left Section ===== */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center space-y-8 z-10">
          <div>
            <h2 className="fade-in font-[Playfair_Display] text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Hi 👋, I’m{" "}
              <span className="bg-gradient-to-r from-orange-600 via-pink-500 to-red-400 bg-clip-text text-transparent drop-shadow-sm">
                Harshit Aggarwal
              </span>
            </h2>

            {/* Typing Effect */}
            <p className="text-base sm:text-lg md:text-xl mt-3 font-medium text-gray-800 h-6 md:h-8">
              {displayedText}
              <span className="blinking-cursor">|</span>
            </p>

            <p className="fade-in delay-200 mt-6 text-sm sm:text-base md:text-lg text-gray-900/90 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              I’m a passionate developer who loves creating impactful{" "}
              <span className="text-orange-700 font-semibold">
                web experiences
              </span>
              . I enjoy building{" "}
              <span className="text-pink-600 font-semibold">
                full-stack applications
              </span>{" "}
              and crafting{" "}
              <span className="text-red-500 font-semibold">
                user-friendly interfaces
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div className="fade-in delay-300 flex justify-center md:justify-start space-x-3 sm:space-x-4 mt-6 sm:mt-8">
              <a
                href="/projects"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-red-400 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform text-sm sm:text-base"
              >
                View My Work
              </a>
              <a
                href="/contact"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl border-2 border-orange-300 text-orange-700 font-semibold bg-white/80 backdrop-blur-md hover:bg-orange-50 hover:scale-105 transition-transform text-sm sm:text-base"
              >
                Let’s Connect
              </a>
            </div>

            {/* Social Icons */}
            <div className="fade-in delay-400 flex justify-center md:justify-start space-x-5 sm:space-x-6 mt-6 sm:mt-8">
              <a
                href="https://www.linkedin.com/in/harshit-aggarwal100306/"
                target="_blank"
                className="text-gray-800 hover:text-orange-500 hover:scale-110 transition"
              >
                <Linkedin className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <a
                href="https://github.com/HarshitAggarwal10"
                target="_blank"
                className="text-gray-800 hover:text-pink-500 hover:scale-110 transition"
              >
                <Github className="w-6 h-6 sm:w-8 sm:h-8" />
              </a>
              <button
                onClick={handleResumeClick}
                className="text-gray-800 hover:text-red-500 hover:scale-110 transition"
              >
                <Download className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>
          </div>

          {/* ===== Tech Focus Section ===== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-2xl relative"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
              Technologies I Work With
            </h3>
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  icon: (
                    <Layers className="w-8 h-8 sm:w-10 sm:h-10 text-orange-600" />
                  ),
                  title: "Full Stack",
                  desc: "Creating scalable apps with modern stacks.",
                  color: "from-orange-500 to-pink-400",
                },
                {
                  icon: (
                    <Database className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500" />
                  ),
                  title: "MERN Stack",
                  desc: "Dynamic apps with Node.js backend.",
                  color: "from-pink-500 to-red-400",
                },
                {
                  icon: (
                    <Code className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                  ),
                  title: "Programming",
                  desc: "Clean, efficient, and maintainable code.",
                  color: "from-red-500 to-orange-400",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative p-4 sm:p-6 rounded-2xl bg-white/40 backdrop-blur-xl shadow-lg border overflow-hidden cursor-pointer"
                >
                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-30 blur-2xl group-hover:opacity-50 transition`}
                  ></div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div className="p-2 sm:p-3 rounded-full bg-white shadow-inner group-hover:shadow-lg transition">
                      {item.icon}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-800">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ===== Right Section - Profile Image Only ===== */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0 relative z-10">
          {/* Profile Image */}
          <motion.img
            src={Harshit}
            alt="Harshit Aggarwal portrait"
            className="relative 
    w-64 sm:w-72 md:w-80 lg:w-[380px] 
    h-auto 
    rounded-3xl object-cover 
    shadow-[0_5px_25px_rgba(0,0,0,0.25)] 
    border-4 border-white/30 
    z-10 
    mt-6 sm:mt-4 md:-mt-8 lg:-mt-16 xl:-mt-24"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
          />
        </div>
      </section>

      {/* ===== Resume 404 Modal ===== */}
      <AnimatePresence>
        {showError && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full relative border border-orange-200"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setShowError(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 text-center mb-2">
                404 Error
              </h2>

              <p className="text-center text-gray-600 mb-6 text-sm sm:text-base">
                Oops! The resume file you are trying to download doesn’t exist
                right now. Please check back later.
              </p>

              <div className="flex justify-center">
                <button
                  onClick={() => setShowError(false)}
                  className="px-4 sm:px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold rounded-full shadow hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  Go Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Custom Animations ===== */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;800&family=Inter:wght@400;500;600&display=swap');

          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeSlideUp 1s ease-out forwards;
          }
          .fade-in.delay-200 { animation-delay: 0.2s; }
          .fade-in.delay-300 { animation-delay: 0.3s; }
          .fade-in.delay-400 { animation-delay: 0.4s; }

          .blinking-cursor {
            display: inline-block;
            margin-left: 2px;
            width: 1ch;
            color: #ff6b35;
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
