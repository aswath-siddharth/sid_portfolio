"use client";
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false });

export default function HeroSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className={`section ${styles.hero}`}>
      <div className={styles.canvasContainer}>
        <ThreeScene />
      </div>
      <motion.div 
        className={`container ${styles.container}`}
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <div className={styles.content}>
          <motion.p variants={fadeUp} className={styles.greeting}>Hi, I'm</motion.p>
          <motion.h1 variants={fadeUp} className={styles.name}>Aswath Siddharth R.</motion.h1>
          <motion.h2 variants={fadeUp} className={styles.role}>
            <span className="gradient-text">Software Engineering Intern</span>
          </motion.h2>
          <motion.p variants={fadeUp} className={styles.description}>
            Building distributed systems, lightweight ML pipelines, and end-to-end applications that solve real-world problems.
          </motion.p>
          <motion.div variants={fadeUp} className={styles.actions}>
            <a href="mailto:aswathsiddharthrajendran@gmail.com" className="btn-primary" style={{ pointerEvents: 'auto' }}>
              <Mail size={20} /> Contact Me
            </a>
            <a href="/Aswath_Siddharth_R_Resume.pdf" target="_blank" className="btn-secondary" style={{ pointerEvents: 'auto' }}>
              <FileText size={20} /> Resume
            </a>
          </motion.div>
          <motion.div variants={fadeUp} className={styles.socials} style={{ pointerEvents: 'auto' }}>
            <a href="https://github.com/aswath-siddharth" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/aswath-siddharth-rajendran" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </motion.div>
        </div>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ pointerEvents: 'auto' }}
        >
          <div className={styles.imageGlow}></div>
          <Image 
            src="/profile.jpg" 
            alt="Aswath Siddharth R." 
            width={320} 
            height={320} 
            className={styles.image}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
