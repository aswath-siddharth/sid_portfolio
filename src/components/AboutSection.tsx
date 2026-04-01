"use client";
import styles from './AboutSection.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
          <h2 className="title-section">about me.</h2>
        </motion.div>
        
        <div className={styles.grid}>
          <motion.div 
            className={styles.textColumn}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" as const }}
          >
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
          
          <motion.div 
            className={styles.imageColumn}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.2 }}
          >
            <Image 
              src="/profile.jpg" 
              alt="Aswath Siddharth R." 
              width={400} 
              height={500} 
              className={styles.image}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
