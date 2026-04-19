"use client";

import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "Grocery Billing System",
    tags: ["Electron", "React", "TypeScript", "IndexedDB"],
    description: "Desktop billing solution supporting Tamil invoice printing, GST automation, and schema-free persistent storage.",
    link: "https://github.com/aswath-siddharth",
    featured: true,
  },
  {
    title: "ME-FLEET Anomaly Detection",
    tags: ["Edge-Fog-Cloud", "Docker", "MQTT", "Streamlit"],
    description: "Distributed simulation framework with Dockerized edge nodes streaming telemetry to a fog node via MQTT for anomaly detection.",
    link: "https://github.com/aswath-siddharth",
    featured: true,
  },
  {
    title: "GYAN (SATCHI) Portal",
    tags: ["Django", "React", "CockroachDB"],
    description: "Platform for academic project submissions and event registrations with scalable data handling and secure auth.",
    link: "https://github.com/aswath-siddharth",
    featured: true,
  },
  {
    title: "Secure API Access",
    tags: ["Flask", "RBAC", "OTP", "SQLite"],
    description: "Token-based authorization system with Role-Based Access Control, bcrypt hashing, and HMAC-SHA256 signatures.",
    link: "https://github.com/aswath-siddharth",
  },
  {
    title: "AI Crop Disease Diagnosis",
    tags: ["TensorFlow", "FastAPI", "Flutter"],
    description: "End-to-end crop disease classification system with a trained deep learning model and real-time mobile API.",
    link: "https://github.com/aswath-siddharth",
  },
  {
    title: "Automated Bone Fracture Detection",
    tags: ["DIP", "CNN", "TensorFlow"],
    description: "Hybrid Digital Image Processing + CNN pipeline to enhance fracture patterns, achieving 90.3% accuracy on MURA.",
    link: "https://github.com/aswath-siddharth",
  },
  {
    title: "Neuroevolution for Lightweight NNs",
    tags: ["Research", "TensorFlow", "DEAP", "NSGA-II"],
    description: "Evolving compact neural architectures for edge devices. Produces a Pareto front optimizing model accuracy and size.",
    link: "#",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
          Selected Works
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg font-inter">
          A showcase of systems I've architected, from distributed ML frameworks to full-stack platforms and ongoing research.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden flex flex-col justify-between 
              ${project.featured ? "md:col-span-2 lg:col-span-2" : "col-span-1"}`}
          >
            {/* Hover subtle background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-500/0 group-hover:from-teal-500/5 group-hover:to-transparent transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-white/50 dark:bg-black/50 text-zinc-700 dark:text-zinc-300 rounded-full ring-1 ring-zinc-300/50 dark:ring-zinc-700/50">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold font-outfit text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-inter leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="relative z-10 mt-8 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                View Project <FaArrowUpRightFromSquare className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <a 
                href={project.link} 
                className="p-2 rounded-full bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white shadow-sm ring-1 ring-zinc-200 dark:ring-zinc-700 transition-all hover:scale-110"
              >
                <FaGithub className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
