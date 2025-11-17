'use client';

import React, { useRef, useState, useLayoutEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import styles from './DynamicBackgrounds.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type DynamicBackgroundsProps = {
  children: React.ReactNode;
};

const sectionColors: { [key: string]: string } = {
  home: '#1a202c',
  about: '#2d3748',
  skills: '#1a202c',
  projects: '#2d3748',
  journey: '#1a202c',
  contact: '#2d3748',
};

function Scene({ color }: { color: string }) {
  return (
    <>
      <color attach="background" args={[color]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}

export default function DynamicBackgrounds({ children }: DynamicBackgroundsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgColor, setBgColor] = useState(sectionColors.home);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const sections = Array.from(containerRef.current.querySelectorAll('section[id]'));

      sections.forEach((section) => {
        const id = section.id;
        const color = sectionColors[id] || sectionColors.home;

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setBgColor(color),
          onEnterBack: () => setBgColor(color),
        });
      });
    }

    setBgColor(sectionColors.home);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef} className={styles.dynamicBackground}>
      <div className={styles.backgroundLayer}>
        <Canvas>
          <Scene color={bgColor} />
        </Canvas>
      </div>
      {children}
    </div>
  );
}
