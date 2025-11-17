'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import styles from './ParallaxTitle.module.scss'; // Import the SCSS module

type ParallaxTitleProps = {
  title: string;
};

export default function ParallaxTitle({ title }: ParallaxTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-25%', '25%']);

  return (
    <div ref={containerRef} className={styles.parallaxContainer}>
      <motion.h2 
        className={styles.parallaxTitle}
        style={{ y }}
      >
        {title}
      </motion.h2>
    </div>
  );
}
