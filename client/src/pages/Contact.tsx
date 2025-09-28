
import React, { useState, useEffect } from "react";
import { Mail, User, MessageSquare, Send, Github, Linkedin, Sparkles, Shield, Star, Wand2, CheckCircle, AlertTriangle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error" | "timeout">(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    if (status) {
      const t = setTimeout(() => {
        setStatus(null);
        setResponseMessage("");
      }, 6000);
      return () => clearTimeout(t);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    setResponseMessage("");

    const controller = new AbortController();
    const to = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
        signal: controller.signal,
      });

      clearTimeout(to);
      const data = await res.json();

      if (res.ok && data?.success) {
        setStatus("success");
        setResponseMessage(data.msg || "Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(data?.msg || "Failed to send message. Try again later.");
      }
    } catch (err: unknown) {
      clearTimeout(to);
      if (err && typeof err === "object" && "name" in err && (err as { name?: string }).name === "AbortError") {
        setStatus("timeout");
        setResponseMessage("Request timed out. Please try again.");
      } else {
        setStatus("error");
        setResponseMessage("Network error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Ambient accent rings
  const rings = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: 220 + i * 120,
    opacity: 0.08 - i * 0.01,
  }));

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFE5D4] via-[#FFD1B7] to-[#FFB891] px-4 sm:px-6 md:px-8 py-24 overflow-hidden">
      {/* Accent concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {rings.map((r) => (
          <motion.div
            key={r.id}
            className="rounded-full border border-white"
            style={{ width: r.size, height: r.size, opacity: r.opacity }}
            animate={{ scale: [1, 1.02, 1], opacity: [r.opacity, r.opacity + 0.02, r.opacity] }}
            transition={{ duration: 10 + r.id * 2, repeat: Infinity, ease: "easeInOut", delay: r.id * 0.6 }}
          />
        ))}
      </div>

      {/* Floating sparkles badge */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-sm">
          <Wand2 className="w-4 h-4 text-orange-600" />
          <span className="text-xs sm:text-sm text-gray-700">Polished with delightful micro-interactions</span>
        </div>
      </motion.div>

      {/* Decorative corner orbs */}
      <motion.div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-orange-300/20 blur-3xl" animate={{ x: [0, 20, 0] }} transition={{ duration: 10, repeat: Infinity }} />
      <motion.div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-orange-400/20 blur-3xl" animate={{ x: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity }} />

      <div className="relative z-10 w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/70 backdrop-blur-md border border-white/60 shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-700">Let’s build something amazing</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold font-serif bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Share a few details, and a thoughtful reply will follow after reviewing the message.
          </p>
        </motion.div>

        {/* Unique highlight strip */}
        <div className="relative mx-auto max-w-5xl mb-8">
          <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-orange-300 via-orange-500 to-pink-500 shadow-inner" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Contact info and badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="bg-white/75 backdrop-blur-xl rounded-3xl shadow-xl border border-white/60 overflow-hidden"
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 shadow-md">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-medium text-orange-700">Secure</span>
                </div>
                <div className="p-3 rounded-xl bg-pink-50 border border-pink-100 flex items-center gap-2">
                  <Star className="w-4 h-4 text-pink-600" />
                  <span className="text-xs font-medium text-pink-700">Professional</span>
                </div>
                <div className="p-3 rounded-xl bg-orange-50 border border-orange-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span className="text-xs font-medium text-orange-700">Polished</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:harshitaggarwal100306@gmail.com"
                  className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-white/70 border border-white/60 hover:bg-white transition-all"
                >
                  <div className="p-2 rounded-lg bg-orange-50 border border-orange-100">
                    <Mail className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-800">Email</div>
                    <div className="text-sm text-gray-600 group-hover:text-orange-700 truncate">harshitaggarwal100306@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/harshit-aggarwal100306/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-white/70 border border-white/60 hover:bg-white transition-all"
                >
                  <div className="p-2 rounded-lg bg-blue-50 border border-blue-100">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-800">LinkedIn</div>
                    <div className="text-sm text-gray-600 group-hover:text-orange-700 truncate">/harshit-aggarwal100306</div>
                  </div>
                </a>

                <a
                  href="https://github.com/HarshitAggarwal10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-3 py-3 rounded-xl bg-white/70 border border-white/60 hover:bg-white transition-all"
                >
                  <div className="p-2 rounded-lg bg-gray-50 border border-gray-200">
                    <Github className="w-4 h-4 text-gray-800" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-800">GitHub</div>
                    <div className="text-sm text-gray-600 group-hover:text-orange-700 truncate">@HarshitAggarwal10</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-pink-500" />
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/60 p-6 sm:p-8 relative overflow-hidden"
          >
            {/* Glow gradient */}
            <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-overlay" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(255,145,99,0.18) 0%, transparent 70%)" }} />

            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 shadow-md">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Send a message</h3>
              </div>

              {loading && (
                <div className="mb-5">
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-orange-400 via-pink-400 to-red-400"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 15, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="text-center mt-2 text-sm text-gray-600 flex items-center justify-center gap-2">
                    <Clock className="w-4 h-4" /> Sending...
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
                  <User className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base disabled:opacity-60"
                  />
                </div>

                <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
                  <Mail className="text-orange-500 w-5 h-5 flex-shrink-0" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base disabled:opacity-60"
                  />
                </div>

                <div className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
                  <MessageSquare className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows={5}
                    className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 resize-none text-sm sm:text-base disabled:opacity-60"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`mt-5 relative w-full px-6 py-4 font-bold rounded-xl border-2 border-orange-500 text-orange-600 hover:text-white hover:bg-orange-500 transition-all duration-300 shadow-md text-sm sm:text-base flex items-center justify-center gap-2 ${loading ? "opacity-60 cursor-not-allowed" : "hover:scale-[1.01]"}`}
              >
                {loading ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Toasts */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div
              className={`p-4 rounded-2xl shadow-2xl border-2 backdrop-blur-xl ${
                status === "success"
                  ? "bg-green-50/90 border-green-200 text-green-800"
                  : status === "timeout"
                  ? "bg-yellow-50/90 border-yellow-200 text-yellow-800"
                  : "bg-red-50/90 border-red-200 text-red-800"
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-full ${
                    status === "success"
                      ? "bg-green-500"
                      : status === "timeout"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {status === "success" ? (
                    <CheckCircle className="w-4 h-4 text-white" />
                  ) : status === "timeout" ? (
                    <Clock className="w-4 h-4 text-white" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-white" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1">
                    {status === "success"
                      ? "Message Delivered"
                      : status === "timeout"
                      ? "Request Timed Out"
                      : "Failed to Send"}
                  </h4>
                  <p className="text-xs leading-relaxed">{responseMessage}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global custom scrollbar styles */}
      <style>{`
        /* WebKit Scrollbar */
        ::-webkit-scrollbar { width: 10px; height: 10px; }
        ::-webkit-scrollbar-track { background: linear-gradient(to bottom, #FFE5D4, #FFD1B7); border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(180deg, #FF9555, #FFB183); border-radius: 10px; border: 2px solid #FFE5D4; }
        ::-webkit-scrollbar-thumb:hover { background: linear-gradient(180deg, #FF7A33, #FF9C66); }

        /* Firefox Scrollbar */
        * { scrollbar-width: thin; scrollbar-color: #FF9555 #FFE5D4; }

        /* Focus and selection */
        ::selection { background: #FF9555; color: #fff; }
        ::-moz-selection { background: #FF9555; color: #fff; }
      `}</style>
    </div>
  );
};

export default Contact;
