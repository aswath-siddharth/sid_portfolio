"use client";
import styles from './HeroSection.module.css';
import { Mail, FileText } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./ThreeScene'), { ssr: false });

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className={styles.hero}>
      {/* Top Header Navigation Overlay */}
      <header className={styles.nav}>
        <div className={styles.logo}>aswath_</div>
        <div className={styles.navActions}>
          <a href="mailto:aswathsiddharthrajendran@gmail.com" className="pill-btn">
            Chat with Me <Mail size={16} />
          </a>
          <a href="/Aswath_Siddharth_R_Resume.pdf" target="_blank" className="pill-btn pill-btn-solid">
            Resume <FileText size={16} />
          </a>
        </div>
      </header>

      {/* Epicenter 3D Canvas */}
      <div className={styles.canvasContainer}>
        <ThreeScene />
      </div>

      {/* Massive Typography overlapping the 3D Object partially */}
      <div className={styles.typographyContainer}>
        <motion.h1 style={{ y: yText }} animate={{ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }} className={styles.massiveText}>
          aswath
        </motion.h1>
      </div>

      {/* Bottom Subtitle anchored */}
      <div className={styles.bottomSubtitle}>
        <p>Software Engineering Intern</p>
        <p style={{ color: "var(--foreground-muted)", fontWeight: "normal", fontSize: "1rem", marginTop: "0.5rem"}}>
          Building distributed systems & lightweight ML pipelines.
        </p>
      </div>
    </section>
  );
}
