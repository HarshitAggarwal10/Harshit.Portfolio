import { useState } from "react";
import {
  Menu,
  X,
  Download,
  Home,
  User,
  FolderGit2,
  Briefcase,
  Mail,
  Cpu,
  AlertTriangle,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showError, setShowError] = useState(false); // Resume error modal
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    { name: "About", path: "/about", icon: <User className="w-5 h-5" /> },
    { name: "Projects", path: "/projects", icon: <FolderGit2 className="w-5 h-5" /> },
    { name: "Experience", path: "/work-experience", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Skills", path: "/skills", icon: <Cpu className="w-5 h-5" /> },
    { name: "Contact", path: "/contact", icon: <Mail className="w-5 h-5" /> },
  ];

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <>
      {/* ===== Top Navbar ===== */}
      <header className="fixed top-0 left-0 w-full px-6 md:px-12 py-4 flex justify-between items-center z-50 bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100">
        {/* Left - Logo */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-gray-900 hover:text-orange-600 transition-all duration-300">
          <Link to="/">Harshit Aggarwal</Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative group flex items-center space-x-1 transition ${
                location.pathname === item.path
                  ? "text-orange-600 font-semibold"
                  : "hover:text-orange-500"
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? "w-full" : ""
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        {/* Right - Resume + Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Resume Button */}
          <button
            onClick={handleResumeClick}
            className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all"
          >
            <Download className="w-5 h-5" />
            <span className="text-sm font-semibold">Resume</span>
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-400 to-pink-500 shadow-lg hover:scale-110 transition-all"
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-white transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-6 h-6 text-white transition-transform duration-300" />
            )}
          </button>
        </div>
      </header>

      {/* ===== Mobile Full-Screen Menu ===== */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center space-y-8 transform transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`flex items-center space-x-3 text-xl font-semibold transition ${
              location.pathname === item.path
                ? "text-orange-600"
                : "text-gray-700 hover:text-orange-500"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}

        {/* Resume Button in Mobile Menu */}
        <button
          onClick={handleResumeClick}
          className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Download Resume
        </button>
      </div>

      {/* ===== Resume 404 Error Modal ===== */}
      <AnimatePresence>
        {showError && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowError(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                  <AlertTriangle className="w-10 h-10 text-red-500" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                404 Error
              </h2>

              {/* Message */}
              <p className="text-center text-gray-600 mb-6">
                Oops! The resume file you are trying to download doesn’t exist
                right now. Please check back later.
              </p>

              {/* Action Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => setShowError(false)}
                  className="px-6 py-2 bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold rounded-full shadow hover:scale-105 transition-transform"
                >
                  Go Back
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
