'use client';

import AnimatedText from '../AnimatedText/AnimatedText';
import styles from './hero.module.scss';

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <AnimatedText text="Code, Build, Innovate." el="h1" className={styles.heroTitle} animationType="scatter" />
      <AnimatedText text="A collection of my works and experiments." el="p" className={styles.heroSubtitle} />
    </section>
  );
}