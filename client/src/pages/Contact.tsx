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
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

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
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-orange-100 p-6 overflow-hidden">
      {/* Background blobs */}
      <motion.div
        className="absolute top-10 left-10 w-60 h-60 bg-orange-300/30 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl grid md:grid-cols-2 gap-8 relative z-10"
      >
        {/* Contact Info Card */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col justify-center border border-orange-200">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-700 mb-6">
            Feel free to reach out via this form or through my social profiles.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition"
            >
              <Mail className="w-5 h-5 text-orange-500" /> harshitaggarwal100306@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-aggarwal100306/"
              target="_blank"
              className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition"
            >
              <Linkedin className="w-5 h-5 text-blue-600" /> LinkedIn
            </a>
            <a
              href="https://github.com/HarshitAggarwal10"
              target="_blank"
              className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition"
            >
              <Github className="w-5 h-5 text-gray-900" /> GitHub
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl flex flex-col gap-6 border border-orange-200"
        >
          <h1 className="text-3xl font-extrabold font-serif text-orange-600 mb-2">
            Contact Me
          </h1>

          {/* Name */}
          <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
            <User className="text-orange-500 w-5 h-5" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
            <Mail className="text-orange-500 w-5 h-5" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500"
            />
          </div>

          {/* Message */}
          <div className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-200 focus-within:ring-2 focus-within:ring-orange-400 transition">
            <MessageSquare className="text-orange-500 w-5 h-5 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="relative px-6 py-3 font-semibold rounded-xl border-2 border-orange-500 text-orange-600 hover:text-white hover:bg-orange-500 transition-all duration-300 shadow-md"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status */}
          {status === "success" && (
            <p className="text-green-600 text-center font-medium mt-2">
              ✅ Your message has been sent!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center font-medium mt-2">
              ❌ Something went wrong. Try again later.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
