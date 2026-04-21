"use client";

import { motion, type Variants } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };


  return (
    <section id="about" className="relative w-full min-h-screen overflow-hidden px-6 lg:px-12 mx-auto flex flex-col md:flex-row items-center justify-center">
      {/* Background ambient glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-teal-500/10 dark:bg-teal-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none -z-10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-[1400px] relative z-10 flex flex-col md:flex-row items-center justify-between mt-20 md:mt-0"
      >
        {/* Extreme Left Vertical Socials (Desktop only) */}
        <motion.div variants={item} className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-20">
          <a
            href="https://linkedin.com/in/aswath-siddharth-rajendran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/aswath-siddharth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="mailto:aswathsiddharthrajendran@gmail.com"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <FaEnvelope className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Central Image - Displayed Inline on Mobile, Absolute Centered on Desktop */}
        <motion.div variants={item} className="md:absolute md:left-1/2 md:-translate-x-1/2 md:-bottom-20 lg:-bottom-30 xl:-bottom-40 w-full max-w-[400px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1150px] z-0 pointer-events-none mx-auto md:mx-0 flex justify-center mb-8 md:mb-0">
          <div 
            className="relative w-full"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' 
            }}
          >
            <Image 
              src="/profile.png" 
              alt="Aswath Siddharth Rajendran" 
              width={1000} 
              height={1200} 
              className="w-full h-auto object-contain drop-shadow-2xl opacity-95"
              priority
            />
          </div>
        </motion.div>

        {/* Left Side Text */}
        <motion.div variants={item} className="z-10 w-full md:w-[40%] flex flex-col items-center md:items-start text-center md:text-left xl:pl-16">
          <span className="text-teal-600 dark:text-teal-400 font-semibold mb-2 tracking-wide uppercase text-sm md:text-base">Hello, I'm</span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 font-outfit leading-[1.1] md:leading-[1]">
            Aswath <br className="hidden md:block" />
            Siddharth
          </h1>
          
          {/* Mobile Socials (hidden on large displays where vertical socials take over) */}
          <div className="mt-6 flex items-center justify-center gap-4 xl:hidden">
            <a href="https://linkedin.com/in/aswath-siddharth-rajendran" className="p-2 text-zinc-400 hover:text-teal-500"><FaLinkedin className="w-5 h-5" /></a>
            <a href="https://github.com/aswath-siddharth" className="p-2 text-zinc-400 hover:text-teal-500"><FaGithub className="w-5 h-5" /></a>
            <a href="mailto:aswathsiddharthrajendran@gmail.com" className="p-2 text-zinc-400 hover:text-teal-500"><FaEnvelope className="w-5 h-5" /></a>
          </div>
        </motion.div>

        {/* Spacer for mobile to force separation before right element */}
        <div className="h-12 md:hidden" />

        {/* Right Side Text */}
        <motion.div variants={item} className="z-10 w-full md:w-[40%] flex flex-col items-center md:items-end text-center md:text-right pb-16 md:pb-0 xl:pr-12">
          <span className="text-teal-600 dark:text-teal-400 font-semibold mb-2 tracking-wide uppercase text-sm md:text-base">Software Engineering</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold tracking-tighter font-outfit text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-sky-700 dark:from-teal-300 dark:to-sky-500 leading-[1.1] md:leading-[1]">
            Intern & <br className="hidden md:block" />
            Developer
          </h2>
          
          <a
            href="/Resume.pdf"
            download="Aswath_Siddharth_R_Resume.pdf"
            className="mt-8 md:mt-12 group flex items-center gap-3 text-sm tracking-[0.2em] uppercase font-semibold text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            RESUME 
            <span className="p-2 border border-zinc-200 dark:border-zinc-800 rounded group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 transition-colors">
              <FaDownload className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
}
