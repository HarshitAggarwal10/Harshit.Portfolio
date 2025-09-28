import React, { useState, useEffect } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  AlertTriangle,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error" | "timeout">(
    null
  );
  const [responseMessage, setResponseMessage] = useState("");

  // Auto-hide status message after 6 seconds
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
        setResponseMessage("");
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        alert(
          "✅ Message sent successfully! Check your email for confirmation."
        );
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(`❌ Error: ${data.msg}`);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("❌ Failed to send message. Please try again later.");
    }
  };

  // Direct email function
  const handleDirectEmail = () => {
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(`Hi Harshit,

Name: ${form.name || "[Your name]"}
Email: ${form.email || "[Your email]"}

Message:
${form.message || "[Your message here]"}

Best regards,
${form.name || "[Your name]"}`);

    window.location.href = `mailto:harshitaggarwal100306@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 via-white to-orange-100 px-4 sm:px-6 md:px-8 pt-24 sm:pt-28 md:pt-32 pb-10 overflow-hidden">
      {/* Floating animated background circles */}
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
        {/* Contact Info Section */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-center border border-orange-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-3 sm:mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-5 sm:mb-6">
            Send me a message through the form and I'll get back to you quickly!
            Or reach out directly via the methods below.
          </p>

          {/* Quick Email Button */}
          <motion.button
            onClick={handleDirectEmail}
            className="w-full mb-6 p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-5 h-5" />
            <span>📧 Email Me Directly</span>
          </motion.button>

          <div className="space-y-3 sm:space-y-4">
            <a
              href="mailto:harshitaggarwal100306@gmail.com"
              className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition text-sm sm:text-base break-words group"
            >
              <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
              harshitaggarwal100306@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-aggarwal100306/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition text-sm sm:text-base group"
            >
              <Linkedin className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
              LinkedIn Profile
            </a>
            <a
              href="https://github.com/HarshitAggarwal10"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-800 hover:text-orange-600 transition text-sm sm:text-base group"
            >
              <Github className="w-5 h-5 text-gray-900 flex-shrink-0 group-hover:scale-110 transition-transform" />
              GitHub Profile
            </a>
          </div>

          {/* Response Time Info */}
          <div className="mt-6 p-4 bg-orange-50 rounded-xl border border-orange-100">
            <div className="flex items-center gap-2 text-orange-800">
              <Clock className="w-4 h-4" />
              <span className="font-semibold text-sm">⚡ Quick Response</span>
            </div>
            <p className="text-orange-700 text-xs mt-1">
              I typically respond within 24 hours
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full p-6 sm:p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl flex flex-col gap-5 sm:gap-6 border border-orange-200"
        >
          <div className="flex items-center gap-3 mb-2">
            <Send className="w-6 h-6 text-orange-500" />
            <h1 className="text-2xl sm:text-3xl font-extrabold font-serif text-orange-600">
              Send Message
            </h1>
          </div>

          <p className="text-sm text-gray-600 -mt-2 mb-2">
            Only I will receive your message - no confirmation email to you
          </p>

          {/* Loading Bar */}
          {loading && (
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <motion.div
                className="bg-gradient-to-r from-orange-400 to-pink-400 h-2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 15, ease: "easeInOut" }}
              />
              <div className="text-center mt-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 inline mr-1" />
                Sending message to Harshit... (up to 15 seconds)
              </div>
            </div>
          )}

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
              disabled={loading}
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base disabled:opacity-60"
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
              disabled={loading}
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 text-sm sm:text-base disabled:opacity-60"
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
              disabled={loading}
              rows={4}
              className="w-full bg-transparent outline-none text-gray-900 placeholder-gray-500 resize-none text-sm sm:text-base disabled:opacity-60"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`relative px-5 sm:px-6 py-3 sm:py-4 font-bold rounded-xl border-2 border-orange-500 
              text-orange-600 hover:text-white hover:bg-orange-500 transition-all duration-300 shadow-md 
              text-sm sm:text-base flex items-center justify-center gap-2 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.02]"
              }`}
          >
            {loading ? (
              <>
                <motion.div
                  className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Sending to Harshit...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send to Harshit
              </>
            )}
          </button>

          {/* Alternative Email Option */}
          <div className="text-center">
            <p className="text-xs text-gray-500 mb-2">Having trouble?</p>
            <button
              type="button"
              onClick={handleDirectEmail}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm underline"
            >
              Email me directly instead →
            </button>
          </div>
        </form>
      </motion.div>

      {/* Status Messages */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 max-w-sm"
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
              <div className="flex items-start space-x-3">
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
                      ? "✅ Message Delivered!"
                      : status === "timeout"
                      ? "⏱️ Timeout"
                      : "❌ Failed to Send"}
                  </h4>
                  <p className="text-xs leading-relaxed mb-2">
                    {responseMessage}
                  </p>
                  {status !== "success" && (
                    <button
                      onClick={handleDirectEmail}
                      className="text-xs underline hover:no-underline"
                    >
                      📧 Try direct email
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
