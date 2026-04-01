"use client";
import styles from './AboutSection.module.css';
import { Terminal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className={`container`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.line}></div>
        </motion.div>
        <div className={styles.content}>
          <motion.div 
            className={`glass-card ${styles.card}`}
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className={styles.iconWrapper}>
              <Terminal size={24} className={styles.icon} />
            </div>
            <p className={styles.text}>
              I'm a Software Engineering intern with experience in building distributed systems, lightweight ML pipelines, 
              and end-to-end applications. Skilled in Python, C++, and modern web technologies, I focus on creating reliable, 
              scalable, and efficient software.
            </p>
            <p className={styles.text}>
              Currently pursuing my B.Tech in Computer Science at Amrita Vishwa Vidyapeetham, I'm driven to apply engineering 
              principles and develop impactful solutions at scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
