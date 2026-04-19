"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 z-50 flex w-full items-center justify-center pt-6 px-4"
    >
      <nav className="flex items-center gap-4 md:gap-8 rounded-full bg-white/70 dark:bg-zinc-900/70 px-4 md:px-6 py-2 md:py-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md dark:text-zinc-200 dark:ring-white/10 dark:shadow-black/50">
        <ul className="flex flex-wrap items-center gap-2 md:gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="relative block px-2 py-1 md:px-3 md:py-2 transition-colors hover:text-teal-600 dark:hover:text-teal-400 font-outfit"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="h-6 w-px bg-zinc-300 dark:bg-zinc-700 hidden sm:block"></div>
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="group rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <AnimatePresence mode="wait">
            {mounted && theme === "dark" ? (
               <motion.div
                 key="sun"
                 initial={{ rotate: -90, opacity: 0 }}
                 animate={{ rotate: 0, opacity: 1 }}
                 exit={{ rotate: 90, opacity: 0 }}
                 transition={{ duration: 0.2 }}
               >
                 <Sun className="h-5 w-5 fill-teal-500 stroke-teal-500 transition group-hover:fill-teal-400 group-hover:stroke-teal-400" />
               </motion.div>
            ) : (
               <motion.div
                 key="moon"
                 initial={{ rotate: 90, opacity: 0 }}
                 animate={{ rotate: 0, opacity: 1 }}
                 exit={{ rotate: -90, opacity: 0 }}
                 transition={{ duration: 0.2 }}
               >
                 <Moon className="h-5 w-5 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700" />
               </motion.div>
            )}
          </AnimatePresence>
        </button>
      </nav>
    </motion.header>
  );
}
