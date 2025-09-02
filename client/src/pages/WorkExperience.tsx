import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Rocket,
  Users,
  Code,
  Star,
  Sparkles,
  Globe,
  Target,
  Brain,
  Lightbulb,
} from "lucide-react";

type Experience = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  year: string;
  images?: string[]; // optional: up to 2 images
};

const experiences: Experience[] = [
  {
    icon: <Briefcase className="w-7 h-7 text-orange-600" />,
    title: "Tech Abhivyakti 2.0",
    desc: "Participated in Tech Abhivyakti 2.0 organized by Open Source Chandigarh, Chitkara University, Punjab.",
    year: "2024",
    images: ["/work/abhivyakti2.png"],
  },
  {
    icon: <Award className="w-7 h-7 text-orange-600" />,
    title: "Hack The Mountains 5.0",
    desc: "Finalist at Hack The Mountains 5.0 held in Rajkot, Gujarat.",
    year: "2024",
    images: ["/work/htm.jpg","/work/htm1.jpg"],
  },
  {
    icon: <Rocket className="w-7 h-7 text-orange-600" />,
    title: "Authentication System & SIH 2024",
    desc: "Built a fully developed authentication system and contributed as a developer in Smart India Hackathon 2024.",
    year: "2024",
  },
  {
    icon: <Code className="w-7 h-7 text-orange-600" />,
    title: "Web Team Member",
    desc: "Worked with Open Source Chandigarh’s web team and contributed to their official websites.",
    year: "2024",
    images: ["/work/osc.jpg","/work/osc1.jpg"],
  },
  {
    icon: <Users className="w-7 h-7 text-orange-600" />,
    title: "Mentor - Hack With Her 4.0",
    desc: "Mentored an all-girls team which won the special All Girls Team Award.",
    year: "2025",
    images: ["/work/hwh.jpg"],
  },
  {
    icon: <Star className="w-7 h-7 text-orange-600" />,
    title: "GitHub Rally 2.0",
    desc: "Organized GitHub Rally 2.0, encouraging open source contributions.",
    year: "2025",
    images: ["/work/gr.jpg"],
  },
  {
    icon: <Sparkles className="w-7 h-7 text-orange-600" />,
    title: "Tech Abhivyakti 3.0",
    desc: "Organized Tech Abhivyakti 3.0 with innovative events and activities.",
    year: "2025",
    images: ["/work/th3.jpg","/work/th31.jpg"],
  },
  {
    icon: <Target className="w-7 h-7 text-orange-600" />,
    title: "CID-CTF",
    desc: "Organized CID-CTF event, focusing on cybersecurity challenges.",
    year: "2025",
    images: ["/work/cid.jpg","/work/cid1.jpg"],
  },
  {
    icon: <Brain className="w-7 h-7 text-orange-600" />,
    title: "Critical Thinking Coding Cup",
    desc: "Organized CTCC event to challenge coding and problem-solving skills.",
    year: "2025",
    images: ["/work/ctcc.jpeg","/work/ctcc1.jpg"],

  },
  {
    icon: <Lightbulb className="w-7 h-7 text-orange-600" />,
    title: "Brains Over Brute",
    desc: "Organized Brains Over Brute, focusing on logical coding.",
    year: "2025",
    images: ["/work/bob.jpeg","/work/bob1.jpeg"],
  },
  {
    icon: <Globe className="w-7 h-7 text-orange-600" />,
    title: "Step Into Innovation: Build Your First App",
    desc: "Organized Step Into Innovation: Build Your First App.",
    year: "2025",
    images: ["/work/si.jpg","/work/si1.jpg"],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-orange-100 via-white to-orange-50 px-6 sm:px-12 py-16 mt-20">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl font-extrabold text-center text-orange-600 mb-16 font-serif"
      >
        Work Experience
      </motion.h1>

      {/* Timeline */}
      <div className="relative border-l-4 border-orange-400 ml-4 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-10"
          >
            {/* Icon */}
            <div className="absolute -left-6 top-0 bg-white border-2 border-orange-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
              {exp.icon}
            </div>

            {/* Card */}
            <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-md p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-orange-700">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{exp.year}</p>
              <p className="text-gray-700 mb-4">{exp.desc}</p>

              {/* Image placeholders */}
              {/* Image placeholders */}
              {exp.images && exp.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {exp.images.slice(0, 2).map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      alt={`${exp.title}-${i}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="rounded-xl shadow-md object-cover w-full h-76"
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
