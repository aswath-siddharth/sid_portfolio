const skills = {
    "Languages": ["C", "C++", "Python", "Java", "JavaScript/TypeScript", "SQL", "Haskell"],
    "Systems": ["Data Structures", "Algorithms", "Operating Systems", "Networking", "Distributed Systems", "API Design"],
    "AI & ML": ["TensorFlow", "Computer Vision", "Federated Learning", "Reinforcement Learning", "RAG"],
    "Technologies": ["Docker", "MQTT", "Django", "React", "Next.js", "Streamlit", "Electron"],
    "Databases": ["CockroachDB", "SQLite", "Firebase"]
  };
  
export default function SkillsSection() {
    return (
      <section id="skills" className="py-10">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-12">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 bg-zinc-50/50 dark:bg-zinc-800/20">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="inline-flex items-center rounded-md bg-white dark:bg-zinc-800 px-2 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-300 ring-1 ring-inset ring-zinc-200 dark:ring-zinc-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
