'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursorStore } from '@/store/cursorStore';
import styles from './CustomCursor.module.scss'; // Import the SCSS module

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { cursorType } = useCursorStore();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: '#2EC4B6', // teal-accent
      mixBlendMode: 'normal',
    },
    hovered: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: '#FDFFFC', // light-text
      mixBlendMode: 'difference',
    },
  };

  return (
    <motion.div
      className={styles.cursor}
      variants={variants}
      animate={cursorType}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
}
