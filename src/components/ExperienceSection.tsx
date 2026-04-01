"use client";
import styles from './ExperienceSection.module.css';
import { Calendar, Briefcase } from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

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
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="experience" className={`section ${styles.experienceSection}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.title}>Experience</h2>
          <div className={styles.line}></div>
        </motion.div>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className={styles.timelineItem}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} className={styles.tiltWrapper}>
                  <div className={`glass-card ${styles.card}`}>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.meta}>
                      <span className={styles.metaItem}><Briefcase size={14}/> {exp.company}</span>
                      <span className={styles.metaItem}><Calendar size={14}/> {exp.duration}</span>
                    </div>
                    <p className={styles.desc}>{exp.desc}</p>
                  </div>
                </Tilt>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
