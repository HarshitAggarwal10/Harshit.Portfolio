import { useState } from "react";
import { Menu, X, Download, Home, User, FolderGit2, Briefcase, Mail, Cpu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About", path: "/about", icon: <User className="w-5 h-5" /> },
    { name: "Projects", path: "/projects", icon: <FolderGit2 className="w-5 h-5" /> },
    { name: "Work Experience", path: "/work-experience", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Contact Me", path: "/contact", icon: <Mail className="w-5 h-5" /> },
    { name: "Skills", path: "/skills", icon: <Cpu className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* ===== Top Navbar ===== */}
      <header className="fixed top-0 left-0 w-full px-6 md:px-12 py-4 flex justify-between items-center z-50 bg-white/70 backdrop-blur-lg shadow-sm">
        {/* Left - Logo/Name */}
        <h1 className="text-2xl md:text-3xl font-serif italic font-bold tracking-wide text-gray-900 hover:text-orange-600 transition-all duration-300 cursor-pointer">
          <Link to="/">Harshit Aggarwal</Link>
        </h1>

        {/* Middle - Quote */}
        <p className="hidden lg:block text-sm md:text-base font-medium text-gray-600 italic">
          “Turning coffee into code & ideas into reality 🚀”
        </p>

        {/* Right - Resume + Menu */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all"
          >
            <Download className="w-5 h-5" />
            <span className="hidden md:inline text-sm font-semibold">Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-gray-200 transition md:hidden"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-gray-800 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative group transition ${
                location.pathname === item.path
                  ? "text-orange-600 font-semibold"
                  : "hover:text-orange-500"
              }`}
            >
              {item.name}
              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? "w-full" : ""
                }`}
              ></span>
            </Link>
          ))}
        </nav>
      </header>

      {/* ===== Mobile Dropdown ===== */}
      <div
        className={`absolute left-0 top-[72px] w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-orange-100 md:hidden transform transition-all duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col text-gray-800 text-lg font-medium p-5 space-y-4">
          {navItems.map((item, i) => (
            <li
              key={item.name}
              className={`transition delay-[${i * 75}ms] ${
                location.pathname === item.path
                  ? "text-orange-600 font-semibold"
                  : "hover:text-orange-500"
              }`}
            >
              <Link to={item.path} onClick={() => setMenuOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Floating Bottom Nav (Mobile Only) ===== */}
      <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/80 backdrop-blur-xl shadow-lg rounded-2xl px-6 py-3 flex justify-around items-center z-50 border border-orange-100">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex flex-col items-center justify-center text-xs ${
              location.pathname === item.path ? "text-orange-600 font-semibold" : "text-gray-600"
            }`}
          >
            {item.icon}
            <span className="text-[10px] mt-1">{item.name.split(" ")[0]}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
