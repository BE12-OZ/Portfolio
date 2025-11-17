'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function BackgroundAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  useEffect(() => {
    // 클라이언트 환경에서만 window 객체에 접근
    if (typeof window !== 'undefined') {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
      
      const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', updateMousePosition);

      const handleResize = () => {
        setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  // windowDimensions가 0일 경우 기본값 (서버 렌더링 시)
  const gradientX = windowDimensions.width > 0 ? mousePosition.x / windowDimensions.width : 0.5;
  const gradientY = windowDimensions.height > 0 ? mousePosition.y / windowDimensions.height : 0.5;

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10 opacity-30"
      style={{
        backgroundImage: `radial-gradient(circle at ${gradientX * 100}% ${gradientY * 100}%, rgba(46, 196, 182, 0.15) 0%, rgba(1, 22, 39, 0.15) 50%, rgba(1, 22, 39, 0.15) 100%)`,
        backgroundSize: '200% 200%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        y: backgroundY, // 스크롤 패럴랙스 적용
      }}
      // animate={{
      //   backgroundPosition: [`${gradientX * 100}% ${gradientY * 100}%`, `${(gradientX + 0.1) * 100}% ${(gradientY + 0.1) * 100}%`],
      // }}
      // transition={{
      //   duration: 10,
      //   repeat: Infinity,
      //   repeatType: "reverse",
      //   ease: "linear"
      // }}
    />
  );
}
