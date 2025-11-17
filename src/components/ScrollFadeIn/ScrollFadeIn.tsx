'use client';

import { motion } from 'framer-motion';

type ScrollFadeInProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollFadeIn({ children, className }: ScrollFadeInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }} // 뷰포트에 40% 보일 때 애니메이션 시작
      transition={{ duration: 1.0, ease: "easeOut" }} // 애니메이션 시간과 이징 함수 조정 (더 극적인 효과)
      variants={{
        hidden: { opacity: 0, y: 150 }, // y축 이동 거리를 더 늘림
        visible: { opacity: 1, y: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
