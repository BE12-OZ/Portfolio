'use client';

import AnimatedText from '../AnimatedText/AnimatedText';
import styles from './hero.module.scss';

export default function Hero() {
  return (
    <section id="home" className={styles.heroSection}>
      <AnimatedText text="I-LU's Portfolio" el="h1" className={styles.heroTitle} animationType="scatter" />
      <AnimatedText text="데이터베이스부터 UI/UX까지, 끊김 없는 경험을 설계합니다." el="p" className={styles.heroSubtitle} />
    </section>
  );
}