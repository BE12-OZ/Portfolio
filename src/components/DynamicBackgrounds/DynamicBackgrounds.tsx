'use client';

import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import styles from './DynamicBackgrounds.module.scss'; // Import the SCSS module
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type DynamicBackgroundsProps = {
  children: React.ReactNode;
};

const sectionColors: { [key: string]: string } = {
  home: '#1a202c', // navy-dark
  about: '#2d3748', // slightly lighter navy
  skills: '#1a202c',
  projects: '#2d3748',
  journey: '#1a202c',
  contact: '#2d3748',
};

export default function DynamicBackgrounds({ children }: DynamicBackgroundsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current && backgroundRef.current) {
      const sections = Array.from(containerRef.current.querySelectorAll('section[id]'));
      
      sections.forEach((section, index) => {
        const id = section.id;
        const color = sectionColors[id] || sectionColors.home;

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => gsap.to(backgroundRef.current, { backgroundColor: color, duration: 0.5 }),
          onEnterBack: () => gsap.to(backgroundRef.current, { backgroundColor: color, duration: 0.5 }),
          // scrub: true, // Optional: for continuous color transition
          // markers: true, // For debugging
        });
      });
    }

    // Set initial background color
    if (backgroundRef.current) {
      gsap.set(backgroundRef.current, { backgroundColor: sectionColors.home });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef} className={styles.dynamicBackground}>
      <div ref={backgroundRef} className={styles.backgroundLayer}></div>
      {children}
    </div>
  );
}
