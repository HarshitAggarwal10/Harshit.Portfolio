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
  Linkedin,
} from "lucide-react";

type Experience = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  year: string;
  images?: string[];
  linkedin?: string;
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
    images: ["/work/htm.jpg", "/work/htm1.jpg"],
    linkedin: "https://www.linkedin.com/posts/harshit-aggarwal100306_hackathon5-team404kevidhayak-whenthingsgowrong-activity-7240939248772640768-NVHk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
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
    images: ["/work/osc.jpg", "/work/osc1.jpg"],
    linkedin: "https://www.linkedin.com/posts/harshit-aggarwal100306_opensourcechandigarh-chitkarauniversity-chitkarau-activity-7245370443291865088-XO9-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
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
    images: ["/work/th3.jpg", "/work/th31.jpg"],
    linkedin: "https://www.linkedin.com/posts/harshit-aggarwal100306_techabhivyakti3-osc-chitkarauniversity-activity-7319988776456327168-_cdM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <Target className="w-7 h-7 text-orange-600" />,
    title: "CID-CTF",
    desc: "Organized CID-CTF event, focusing on cybersecurity challenges.",
    year: "2025",
    images: ["/work/cid.jpg", "/work/cid1.jpg"],
    linkedin: "https://www.linkedin.com/posts/harshit-aggarwal100306_cybersecurity-ctf-capturetheflag-activity-7328796244972134400-Kp3J?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <Brain className="w-7 h-7 text-orange-600" />,
    title: "Critical Thinking Coding Cup",
    desc: "Organized CTCC event to challenge coding and problem-solving skills.",
    year: "2025",
    images: ["/work/ctcc.jpeg", "/work/ctcc1.jpg"],
    linkedin: "https://www.linkedin.com/posts/harshit-aggarwal100306_opensourcechandigarh-criticalthinkingcodingcup-activity-7354904877036130304-mCFA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",
  },
  {
    icon: <Lightbulb className="w-7 h-7 text-orange-600" />,
    title: "Brains Over Brute",
    desc: "Organized Brains Over Brute, focusing on logical coding.",
    year: "2025",
    images: ["/work/bob.jpeg", "/work/bob1.jpeg"],
    linkedin: "https://www.linkedin.com/posts/harshit-aggarwal100306_opensourcechandigarh-dsa-techevents-activity-7360627382694678528-MUjt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",

  },
  {
    icon: <Globe className="w-7 h-7 text-orange-600" />,
    title: "Step Into Innovation: Build Your First App",
    desc: "Organized Step Into Innovation: Build Your First App.",
    year: "2025",
    images: ["/work/si.jpg", "/work/si1.jpg"],
    linkedin: "https://www.linkedin.com/posts/harshit-aggarwal100306_event-recap-hands-on-android-app-development-activity-7365619047956140032-gN2y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEePQT8BQAYCzG8DpqwHTpq5SaESVPTtGf8",

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
      <div className="relative border-l-4 border-orange-300 ml-6 space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-12"
          >
            {/* Icon */}
            <div className="absolute -left-7 top-2 bg-white border-2 border-orange-500 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
              {exp.icon}
            </div>

            {/* Card */}
            <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl transition border border-orange-100">
              {/* Title + LinkedIn button */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-orange-700">
                  {exp.title}
                </h3>

                {exp.linkedin && (
                  <a
                    href={exp.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#0A66C2] text-[#0A66C2] text-sm font-medium hover:bg-[#0A66C2]/10 transition"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-2">{exp.year}</p>
              <p className="text-gray-700 mb-4">{exp.desc}</p>

              {/* Images */}
              {exp.images && exp.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {exp.images.slice(0, 2).map((img, i) => (
                    <motion.img
                      key={i}
                      src={img}
                      alt={`${exp.title}-${i}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="rounded-xl shadow-md object-cover w-full h-84"
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
