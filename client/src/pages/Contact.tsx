import React, { useState } from "react";
import { Mail, User, MessageSquare, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-orange-100 
  px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-10 overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute top-5 left-5 sm:top-10 sm:left-10 w-40 sm:w-60 h-40 sm:h-60 bg-orange-300/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-52 sm:w-72 h-52 sm:h-72 bg-orange-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10"
      >
        {/* Contact Info Card */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-center border border-orange-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-3 sm:mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-5 sm:mb-6">
            Feel free to reach out via this form or through my social profiles.
          </p>
          <div className="space-y-3 sm:space-y-4">
            <a
              href="mailto:harshitaggarwal100306@gmail.com"
              className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition text-sm sm:text-base break-words"
            >
              <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
              harshitaggarwal100306@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-aggarwal100306/"
              target="_blank"
              className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition text-sm sm:text-base"
            >
              <Linkedin className="w-5 h-5 text-blue-600 flex-shrink-0" />
              LinkedIn
            </a>
            <a
              href="https://github.com/HarshitAggarwal10"
              target="_blank"
              className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition text-sm sm:text-base"
            >
              <Github className="w-5 h-5 text-gray-900 flex-shrink-0" />
              GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full p-6 sm:p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl flex flex-col gap-5 sm:gap-6 border border-orange-200"
        >
          <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-orange-600 mb-2">
            Contact Me
          </h1>

          {/* Name Field */}
          <div className="flex items-center gap-3 bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
            <User className="text-orange-500 w-5 h-5 flex-shrink-0" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center gap-3 bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
            <Mail className="text-orange-500 w-5 h-5 flex-shrink-0" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base"
            />
          </div>

          {/* Message Field */}
          <div className="flex items-start gap-3 bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
            <MessageSquare className="text-orange-500 w-5 h-5 mt-1 flex-shrink-0" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 resize-none text-sm sm:text-base"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="relative px-5 sm:px-6 py-2.5 sm:py-3 font-semibold rounded-xl border-2 border-orange-500 text-orange-600 hover:text-white hover:bg-orange-500 transition-all duration-300 shadow-md text-sm sm:text-base"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status === "success" && (
            <p className="text-green-600 text-center font-medium mt-2 text-sm sm:text-base">
              Your message has been sent!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center font-medium mt-2 text-sm sm:text-base">
              Something went wrong. Try again later.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
