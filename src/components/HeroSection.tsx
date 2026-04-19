"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section id="about" className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center min-h-[90vh]">
      {/* Background ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-teal-500/10 to-transparent blur-3xl -z-10 dark:from-teal-900/20" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-sm font-medium mb-8 ring-1 ring-teal-500/20">
           <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
           Software Engineering Intern
        </motion.div>

        <motion.h1 
          variants={item}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 font-outfit leading-[1.1] mb-8"
        >
          Aswath <br />
          <span className="text-zinc-400 dark:text-zinc-500">Siddharth R.</span>
        </motion.h1>

        <motion.p 
          variants={item}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-inter"
        >
          I build distributed systems, lightweight ML pipelines, and end-to-end applications.
          Driven to apply engineering principles and learn new technologies to build impactful solutions at scale.
        </motion.p>

        <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-6">
          <a
            href="mailto:aswathsiddharthrajendran@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform font-outfit"
          >
            <FaEnvelope className="w-5 h-5" />
            Contact Me
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/aswath-siddharth"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/aswath-siddharth-rajendran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-6 lg:left-8 text-zinc-400 dark:text-zinc-500 hidden md:block"
      >
        <FaArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
