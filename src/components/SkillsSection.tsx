"use client";
import styles from './SkillsSection.module.css';
import { motion } from 'framer-motion';

const skills = {
  "Languages": ["C", "C++", "Python", "Java", "JavaScript/TypeScript", "SQL", "Haskell"],
  "Systems": ["Data Structures", "Algorithms", "Operating Systems", "Networking", "Distributed Systems", "API Design"],
  "AI & ML": ["TensorFlow", "Computer Vision", "Federated Learning", "Reinforcement Learning", "RAG"],
  "Technologies": ["Docker", "MQTT", "Django", "React", "Next.js", "Streamlit", "Electron"],
  "Databases": ["CockroachDB", "SQLite", "Firebase"]
};

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className={`section ${styles.skillsSection}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Technical Skills</h2>
          <div className={styles.line}></div>
        </motion.div>
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants} className={`glass-card ${styles.categoryCard}`} style={{ padding: '1.5rem' }}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.chipContainer}>
                {items.map((skill) => (
                  <span key={skill} className={styles.chip}>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
