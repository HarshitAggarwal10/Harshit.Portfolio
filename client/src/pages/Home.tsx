import { Github, Linkedin, Download } from "lucide-react";
import Harshit from "../assets/harshit.png";

export default function Home() {
  return (
    <main className="pt-40 w-full h-screen flex items-start justify-center font-[Inter]">
      <section
        className="flex flex-col md:flex-row items-center justify-between w-full min-h-[80.5vh] px-8 md:px-20 py-20 rounded-tl-[3rem] rounded-tr-[3rem] overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #fb8c5c 0%, #f9cda3 100%)",
        }}
      >
        {/* Left - Intro */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center">
          <h2 className="fade-in font-[Playfair_Display] text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
              Harshit Aggarwal
            </span>{" "}
            👋
          </h2>
          <p className="fade-in delay-200 mt-6 text-lg md:text-xl text-gray-800/90 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
            I’m a passionate developer who loves creating impactful{" "}
            <span className="text-orange-700 font-semibold">
              web experiences
            </span>
            . I enjoy building{" "}
            <span className="text-pink-700 font-semibold">
              full-stack applications
            </span>{" "}
            and designing{" "}
            <span className="text-red-600 font-semibold">
              user-friendly interfaces
            </span>
            .
          </p>

          {/* Socials */}
          <div className="fade-in delay-400 flex justify-center md:justify-start space-x-6 mt-8">
            <a
              href="https://linkedin.com/in/harshit-aggarwal-100306"
              target="_blank"
              className="text-gray-800 hover:text-orange-600 hover:scale-110 transition"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/harshit-aggarwal-100306"
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
          .fade-in.delay-400 {
            animation-delay: 0.4s;
          }

          @keyframes fadeSlideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </main>
  );
}
