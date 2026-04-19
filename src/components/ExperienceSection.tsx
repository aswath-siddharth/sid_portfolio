"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Technical Lead",
    company: "Institution's Innovation Council (IIC)",
    date: "Oct 2025 – Present",
    description: "Led technical planning and execution for council workflows and event-based technical requirements. Coordinated development tasks and smooth on-ground operations.",
  },
  {
    role: "Student Council Member",
    company: "Institution's Innovation Council (IIC)",
    date: "Jul 2025 – Present",
    description: "Supported innovation-driven student initiatives, event coordination, and internal operations. Contributed to planning with effective task tracking.",
  },
  {
    role: "Co-Head, Web & Tech",
    company: "Amrita – Model United Nations Society (A-MUNSO)",
    date: "Sep 2024 – Present",
    description: "Managed web development and technical operations. Coordinated team deliverables, task delegation, and cross-team collaboration.",
  },
  {
    role: "Co-Head, Techfair & Exhibitions",
    company: "Anokha (Techfest)",
    date: "Aug 2025 – Jan 2026",
    description: "Coordinated the planning and execution of Techfair events. Managed team workflows and ensured smooth operations.",
  },
  {
    role: "Multimedia Designer (Internship)",
    company: "GalaxyZ Space",
    date: "Aug 2025 – Sep 2025",
    description: "Designed digital media creatives and assisted in visual content production. Supported branding and content workflows.",
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-outfit text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
          Experience
        </h2>
      </motion.div>

      <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 md:ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-10 ml-8 md:ml-12 relative group"
          >
            {/* Timeline dot */}
            <span className="absolute -left-[41px] md:-left-[57px] flex items-center justify-center w-5 h-5 rounded-full bg-teal-100 ring-4 ring-white dark:ring-zinc-950 dark:bg-teal-900/30">
              <span className="w-2 h-2 rounded-full bg-teal-500 group-hover:scale-150 transition-transform duration-300" />
            </span>
            
            <span className="block text-sm font-semibold text-teal-600 dark:text-teal-400 mb-2 font-inter tracking-wide uppercase">
              {exp.date}
            </span>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-outfit mb-1">
              {exp.role}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 font-medium mb-3">
              {exp.company}
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl font-inter">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
