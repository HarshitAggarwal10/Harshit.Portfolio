
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Home, User, FolderGit2, Briefcase, Mail, Cpu, GitBranch } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showError, setShowError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const items = [
    { label: 'Home', path: '/', icon: <Home className="w-4.5 h-4.5" /> },
    { label: 'About', path: '/about', icon: <User className="w-4.5 h-4.5" /> },
    { label: 'Projects', path: '/projects', icon: <FolderGit2 className="w-4.5 h-4.5" /> },
    { label: 'Experience', path: '/work-experience', icon: <Briefcase className="w-4.5 h-4.5" /> },
    { label: 'Skills', path: '/skills', icon: <Cpu className="w-4.5 h-4.5" /> },
    { label: 'Open Source', path: '/open-source', icon: <GitBranch className="w-4.5 h-4.5" /> },
    { label: 'Contact', path: '/contact', icon: <Mail className="w-4.5 h-4.5" /> },
  ];

  const handleResume = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowError(true);
  };

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(255,149,85,0.35)] border-b border-white/60' : 'bg-white/70 backdrop-blur-md border-b border-white/50'
      }`}>
        <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10 py-3 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white grid place-items-center shadow-md">
              <span className="text-sm font-extrabold">H</span>
            </div>
            <div className="leading-tight">
              <div className="text-[17px] md:text-[18px] lg:text-[19px] font-extrabold tracking-tight text-gray-900 group-hover:text-orange-600 transition-colors">Harshit Aggarwal</div>
              <div className="text-[11px] text-gray-500">Portfolio</div>
            </div>
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center gap-2">
            {items.map((it) => {
              const active = location.pathname === it.path;
              return (
                <Link
                  key={it.label}
                  to={it.path}
                  className={`relative px-3 py-2 rounded-xl text-[13.5px] flex items-center gap-2 transition-colors ${
                    active ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-orange-100 to-pink-100 border border-orange-200/60"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {it.icon}
                  <span>{it.label}</span>
                  <span className={`absolute left-3 -bottom-0.5 h-[2px] w-0 bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-300 ${active ? 'w-[calc(100%-1.5rem)]' : 'group-hover:w-[calc(100%-1.5rem)]'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleResume}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md hover:shadow-lg hover:scale-[1.03] transition-all text-[13px] font-semibold"
            >
              <Download className="w-4.5 h-4.5" />
              Resume
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden h-11 w-11 grid place-items-center rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg hover:scale-110 transition-all"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50 via-white to-pink-50" />
            <div className="absolute inset-0 backdrop-blur-lg" />
            <div className="relative h-full flex flex-col items-center justify-center gap-5 px-6">
              {items.map((it, idx) => {
                const active = location.pathname === it.path;
                return (
                  <motion.div
                    key={it.label}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.04 * idx }}
                    className="w-full max-w-xs"
                  >
                    <Link
                      to={it.path}
                      onClick={() => setOpen(false)}
                      className={`group flex items-center justify-center gap-3 py-3 rounded-2xl border text-lg font-semibold transition-all ${
                        active
                          ? 'bg-white text-orange-600 border-orange-200 shadow'
                          : 'bg-white/75 text-gray-800 border-white/60 hover:bg-white hover:text-orange-600 shadow-sm'
                      }`}
                    >
                      {it.icon}
                      <span>{it.label}</span>
                    </Link>
                  </motion.div>
                );
              })}

              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.28 }}
                onClick={handleResume}
                className="mt-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg hover:scale-105 transition"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Resume modal */}
      <AnimatePresence>
        {showError && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-orange-100"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              <button onClick={() => setShowError(false)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-orange-100 border border-orange-200 grid place-items-center">
                  <Download className="w-9 h-9 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Resume Unavailable</h2>
                <p className="text-gray-600 mb-6">The resume file isn’t available right now. Please check back later.</p>
                <button
                  onClick={() => setShowError(false)}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow hover:scale-105 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global themed scrollbar */}
      <style>{`
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-track { background: linear-gradient(to bottom, #FFE5D4, #FFD1B7); border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #FF9555, #FFB183); border-radius: 10px; border: 2px solid #FFE5D4; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #FF7A33, #FF9C66); }
        * { scrollbar-width: thin; scrollbar-color: #FF9555 #FFE5D4; }
      `}</style>
    </>
  );
}
