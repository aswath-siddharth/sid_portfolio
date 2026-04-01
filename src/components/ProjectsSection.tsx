import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "Grocery Billing System",
    tags: ["Electron", "React", "TypeScript", "IndexedDB"],
    desc: "Desktop billing solution supporting Tamil invoice printing, GST automation, and schema-free persistent storage with real-time multi-language UI support.",
    github: "https://github.com/aswath-siddharth"
  },
  {
    title: "ME-FLEET Framework",
    tags: ["Edge-Fog-Cloud", "Docker", "MQTT"],
    desc: "Distributed simulation framework for Federated Fleet Anomaly Detection with Dockerized edge nodes streaming telemetry to a fog node.",
    github: "https://github.com/aswath-siddharth"
  },
  {
    title: "GYAN Academic Portal",
    tags: ["Django", "React", "CockroachDB"],
    desc: "Platform for academic project submissions and evaluations. Integrated scalable data handling, secure auth, and real-time analytics dashboards.",
    link: "#",
    github: "https://github.com/aswath-siddharth"
  },
  {
    title: "AI Crop Disease",
    tags: ["TensorFlow", "FastAPI", "Flutter"],
    desc: "End-to-end crop disease classification system with a trained deep learning model deployed via an API-backed workflow directly to a mobile frontend.",
    github: "https://github.com/aswath-siddharth"
  },
  {
    title: "Secure Auth API",
    tags: ["Flask", "RBAC", "OTP"],
    desc: "Token-based authorization system with Role-Based Access Control, OTP verification, bcrypt hashing, and replay-protection logic.",
    github: "https://github.com/aswath-siddharth"
  },
  {
    title: "Automated Bone Fracture",
    tags: ["CNN", "DIP", "TensorFlow"],
    desc: "Hybrid DIP + CNN pipeline to detect and highlight fracture patterns in X-rays, achieving 90.3% accuracy on the MURA dataset.",
    github: "https://github.com/aswath-siddharth"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-12">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-2">
        {projects.map((proj, idx) => (
          <article key={idx} className="group relative flex flex-col items-start transition hover:bg-zinc-50 dark:hover:bg-zinc-800/50 p-6 -m-6 rounded-2xl">
            <h3 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50 bg-zinc-50 border border-zinc-100 dark:border-zinc-800" />
              <span className="relative z-10">{proj.title}</span>
            </h3>
            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 leading-6">
              {proj.desc}
            </p>
            <div className="relative z-10 mt-4 flex flex-wrap gap-2 text-xs font-medium">
              {proj.tags.map(tag => (
                <span key={tag} className="text-teal-500 bg-teal-50 dark:bg-teal-500/10 dark:text-teal-400 px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="relative z-10 mt-6 flex gap-4 text-sm font-medium text-zinc-400 dark:text-zinc-500">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-teal-500 dark:hover:text-teal-400 transition">
                  <FaGithub size={16} /> GitHub
                </a>
              )}
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-teal-500 dark:hover:text-teal-400 transition">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
