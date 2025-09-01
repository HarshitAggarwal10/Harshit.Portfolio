import React, { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

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
      const res = await fetch("http://localhost:5000/api/contact", {
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
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-400 to-white p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg flex flex-col gap-6 border border-orange-200"
      >
        <h1 className="text-4xl font-extrabold font-serif text-center text-orange-600 mb-2">
          Contact Me
        </h1>
        <p className="text-center text-gray-600 text-sm mb-4">
          Have a project, idea, or question? Let’s connect.
        </p>

        {/* Name */}
        <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-100">
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
        <div className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-100">
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
        <div className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-sm border border-orange-100">
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
          className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          {loading ? "Sending..." : "Send Message 🚀"}
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
    </div>
  );
};

export default Contact;
