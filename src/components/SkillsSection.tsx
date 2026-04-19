"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript/TypeScript", "SQL", "Haskell"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["TensorFlow", "Computer Vision", "Federated Learning", "Neuroevolution", "Reinforcement Learning", "RAG"]
  },
  {
    category: "Technologies & Frameworks",
    skills: ["Docker", "MQTT", "Django", "React", "Tailwind CSS", "Streamlit", "Electron", "Google Earth Engine"]
  },
  {
    category: "Systems & Databases",
    skills: ["Distributed Systems", "API Design", "Event-Driven Architecture", "CockroachDB", "SQLite", "Firebase"]
  },
  {
    category: "Tools",
    skills: ["Git", "Linux", "Azure", "Power BI / Tableau"]
  }
];

export default function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-outfit text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
          Skills & Expertise
        </h2>
      </motion.div>

      <div className="flex flex-col gap-10">
        {skillCategories.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <h3 className="text-xl font-semibold font-outfit text-zinc-800 dark:text-zinc-200 mb-4">
              {group.category}
            </h3>
            <motion.div 
              variants={container} 
              initial="hidden" 
              whileInView="show" 
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-3"
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-xl font-medium font-inter text-sm ring-1 ring-zinc-200 dark:ring-zinc-700 shadow-sm transition-colors hover:bg-teal-50 hover:text-teal-700 dark:hover:bg-teal-900/30 dark:hover:text-teal-300 dark:hover:ring-teal-500/30 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
