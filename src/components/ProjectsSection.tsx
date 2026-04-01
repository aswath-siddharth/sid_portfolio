"use client";
import styles from './ProjectsSection.module.css';
import { ExternalLink, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

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
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
  };

  return (
    <section id="projects" className={`section ${styles.projectsSection}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="title-section">featured projects.</h2>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((proj, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                perspective={2000} 
                scale={1.02} 
                transitionSpeed={1500} 
                className={styles.tiltWrapper}
              >
                <div className={`stark-card ${styles.projectCard}`}>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconBox}>
                      <Code size={24} />
                    </div>
                    <div className={styles.links}>
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                          <FaGithub size={20} />
                        </a>
                      )}
                      {proj.link && (
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className={styles.linkIcon}>
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className={styles.projectTitle}>{proj.title}</h3>
                  <p className={styles.projectDesc}>{proj.desc}</p>
                  <div className={styles.tags}>
                    {proj.tags.map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
