'use client';

import { motion, useScroll } from 'framer-motion';
import styles from './ScrollProgressBar.module.scss'; // Import the SCSS module

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={styles.progressBar}
      style={{ scaleX: scrollYProgress }}
    />
  );
}
