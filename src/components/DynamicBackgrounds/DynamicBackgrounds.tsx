'use client';

import { useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import styles from './DynamicBackgrounds.module.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type DynamicBackgroundsProps = {
  children: React.ReactNode;
};

const sectionColors: { [key: string]: string } = {
  home: '#121212', // Background Color
  about: '#333333', // Section Color
  skills: '#121212', // Background Color
  projects: '#333333', // Section Color
  journey: '#121212', // Background Color
  contact: '#333333', // Section Color
};

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Shapes />
      <OrbitControls />
      <EffectComposer>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </>
  );
}

interface ShapeProps {
  position: [number, number, number];
  args: [number, number, number] | [number, number, number, number];
  color: string;
  speed: number;
  shapeType: 'box' | 'tetrahedron';
}

function Shape({ position, args, color, speed, shapeType }: ShapeProps) {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.005 * speed;
      mesh.current.rotation.y += 0.005 * speed;
    }
  });

  return (
    <mesh position={position} ref={mesh} scale={args[0]}>
      {shapeType === 'box' && <boxGeometry args={[args[0], args[0], args[0]]} />}
      {shapeType === 'tetrahedron' && <tetrahedronGeometry args={[args[0], 0]} />}
      <meshBasicMaterial color={color} wireframe={true} />
    </mesh>
  );
}

function Shapes() {
  const shapes = Array.from({ length: 50 }).map((_, i) => {
    const shapeType = ['box', 'tetrahedron'][Math.floor(Math.random() * 2)] as 'box' | 'tetrahedron';
    const position: [number, number, number] = [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ];
    const args: [number, number, number] | [number, number, number, number] = [Math.random() * 0.5 + 0.2, 1, 1];
    const color = `hsl(${Math.random() * 360}, 70%, 70%)`;
    const speed = Math.random() * 0.5 + 0.1;
    return { key: i, position, args, color, speed, shapeType };
  });

  return (
    <>
      {shapes.map((props) => (
        <Shape key={props.key} {...props} />
      ))}
    </>
  );
}

export default function DynamicBackgrounds({ children }: DynamicBackgroundsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundLayerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current && backgroundLayerRef.current) {
      const sections = Array.from(containerRef.current.querySelectorAll('section[id]'));

      sections.forEach((section) => {
        const id = section.id;
        const color = sectionColors[id] || sectionColors.home;

        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(backgroundLayerRef.current, { backgroundColor: color, duration: 0.5 });
          },
          onEnterBack: () => {
            gsap.to(backgroundLayerRef.current, { backgroundColor: color, duration: 0.5 });
          },
        });
      });
      // Initial background color
      gsap.to(backgroundLayerRef.current, { backgroundColor: sectionColors.home, duration: 0 });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [children]);

  return (
    <div ref={containerRef} className={styles.dynamicBackground}>
      <div ref={backgroundLayerRef} className={styles.backgroundLayer}>
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      {children}
    </div>
  );
}