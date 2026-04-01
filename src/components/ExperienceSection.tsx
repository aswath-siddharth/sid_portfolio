import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Technical Lead",
    company: "Amrita IIC",
    duration: "Oct 2025 – Present",
    desc: "Led technical planning and execution for council workflows and event requirements. Coordinated development tasks and cross-team collaboration."
  },
  {
    role: "Co-Head, Web & Tech",
    company: "Amrita MUN Society",
    duration: "Sep 2024 – Present",
    desc: "Managed web development and technical operations for MUN workflows. Delegated tasks and ensured smooth on-ground execution."
  },
  {
    role: "Co-Head, Techfair & Exhibitions",
    company: "Anokha Techfest",
    duration: "Aug 2025 – Jan 2026",
    desc: "Coordinated planning and execution of tech exhibitions. Managed team workflows and improved task tracking efficiency."
  },
  {
    role: "Multimedia Designer",
    company: "GalaxyZ Space",
    duration: "Aug 2025 – Sep 2025",
    desc: "Designed digital media creatives and assisted in visual content production for social platforms ensuring brand consistency."
  }
];

export default function ExperienceSection() {
  return (
    <div id="experience" className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Briefcase className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
        <span className="ml-3">Experience</span>
      </h2>
      <ol className="mt-6 space-y-4 text-sm/6 text-zinc-600 dark:text-zinc-400">
        {experiences.map((exp, idx) => (
          <li key={idx} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
               <span className="font-bold text-zinc-500">{exp.company.charAt(0)}</span>
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {exp.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {exp.role}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                {exp.duration}
              </dd>
              <dd className="w-full mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                 {exp.desc}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <a href="/Aswath_Siddharth_R_Resume.pdf" target="_blank" className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 w-full mt-6">
         Download CV
      </a>
    </div>
  );
}
