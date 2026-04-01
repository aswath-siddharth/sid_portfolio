"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 z-50 flex w-full max-w-7xl items-center justify-between px-4 pt-6 sm:px-8">
      <div className="flex flex-1 justify-end md:justify-center">
        <nav className="pointer-events-auto hidden md:block">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            <li>
              <a href="#about" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">About</a>
            </li>
            <li>
              <a href="#projects" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Projects</a>
            </li>
            <li>
              <a href="#experience" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Experience</a>
            </li>
            <li>
              <a href="#skills" className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">Skills</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-end pointer-events-auto">
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && theme === "dark" ? (
             <Sun className="h-5 w-5 fill-teal-500 stroke-teal-500 transition group-hover:fill-teal-400 group-hover:stroke-teal-400" />
          ) : (
             <Moon className="h-5 w-5 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700" />
          )}
        </button>
      </div>
    </header>
  );
}
