import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Work Experience", path: "/work" },
    { name: "Contact Me", path: "/contact" },
    { name: "Skills", path: "/skills" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full px-8 py-4 flex justify-between items-center z-50 bg-white/90 backdrop-blur-md">
      {/* Left - Name */}
      <h1 className="text-3xl md:text-3xl font-serif italic font-bold tracking-wide text-gray-900 hover:text-orange-600 transition-all duration-300 cursor-pointer">
        <Link to="/">Harshit Aggarwal</Link>
      </h1>

      {/* Middle - Cute Quote */}
      <p className="hidden md:block text-sm md:text-base font-medium text-gray-700 italic">
        “Turning coffee ☕ into code 💻 & ideas ✨ into reality 🚀”
      </p>

      {/* Right - Resume + Menu */}
      <div className="flex items-center space-x-6">
        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all"
        >
          <Download className="w-5 h-5" />
          <span className="hidden md:inline text-sm font-semibold">Resume</span>
        </a>

        {/* Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-gray-200 transition"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-800 transition-transform duration-300 rotate-90" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-8 top-16 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-lg transform transition-all duration-300 origin-top-right ${
          menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col text-gray-800 text-lg font-medium p-5 space-y-4">
          {navItems.map((item) => (
            <li key={item.name} className="hover:text-orange-500 cursor-pointer transition">
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)} // close menu on click
                className={location.pathname === item.path ? "font-semibold text-orange-600" : ""}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
