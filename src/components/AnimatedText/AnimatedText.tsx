'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedText.module.scss'; // Import the SCSS module

type AnimatedTextProps = {
  text: string;
  el?: keyof React.JSX.IntrinsicElements; // 'h1', 'p', 'span' 등 HTML 태그
  className?: string;
  once?: boolean; // 한 번만 애니메이션할지 여부
  animationType?: 'fade' | 'scatter'; // 애니메이션 타입 추가
};

const defaultVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scatterVariants = {
  hidden: {
    opacity: 0,
    x: Math.random() * 200 - 100, // -100에서 100 사이의 랜덤 x
    y: Math.random() * 200 - 100, // -100에서 100 사이의 랜덤 y
    rotate: Math.random() * 360 - 180, // -180에서 180 사이의 랜덤 회전
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
  },
};

export default function AnimatedText({ text, el: Wrapper = 'p', className, once = true, animationType = 'fade' }: AnimatedTextProps) {
  const chars = Array.from(text); // 텍스트를 문자로 분할

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: animationType === 'scatter' ? 0.02 : 0.05, // 애니메이션 타입에 따라 staggerChildren 조정
      },
    },
  };

  const currentVariants = animationType === 'scatter' ? scatterVariants : defaultVariants;

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: 0.5 }}
    >
      {chars.map((char, i) => (
        <motion.span
          key={i}
          variants={currentVariants}
          className={styles.inlineBlock}
          style={{ whiteSpace: 'nowrap' }} // Apply only whiteSpace here, display is handled by className
        >
          {char === ' ' ? '\u00A0' : char} {/* 공백 처리 */}
        </motion.span>
      ))}
    </motion.div>
  );
}
