'use client';

import { motion } from 'framer-motion';
import styles from './QnaBlock.module.scss'; // Assuming a new SCSS module for QnaBlock

type QnaBlockProps = {
  q: string;
  a: string;
};

export default function QnaBlock({ q, a }: QnaBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles.qnaBlock}
    >
      <p className={styles.question}>{q}</p>
      <p className={styles.answer}>{a}</p>
    </motion.div>
  );
}
