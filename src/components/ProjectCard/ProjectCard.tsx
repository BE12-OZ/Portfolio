'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
// import Link from 'next/link'; // Link 제거
import { useCursorStore } from '@/store/cursorStore';
import styles from './ProjectCard.module.scss'; // Import the SCSS module

type Project = {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  longDescription: string; // ProjectDetailModal에서 사용
  technologies: string[];
  links: {
    github?: string;
    liveDemo?: string;
  };
};

type ProjectCardProps = {
  project: Project;
  onProjectClick: (project: Project) => void; // 새로 추가
};

export default function ProjectCard({ project, onProjectClick }: ProjectCardProps) {
  const { setCursorType } = useCursorStore();

  return (
    // <Link // Link 제거
    //   href={`/projects/${project.id}`}
    //   onMouseEnter={() => setCursorType('hovered')}
    //   onMouseLeave={() => setCursorType('default')}
    //   className={styles.projectCardLink}
    // >
      <motion.div
        className={styles.projectCard}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
        onMouseEnter={() => setCursorType('hovered')} // motion.div로 이동
        onMouseLeave={() => setCursorType('default')} // motion.div로 이동
        onClick={() => onProjectClick(project)} // onClick 핸들러 추가
      >
        {/* Next.js Image 컴포넌트는 public 디렉터리를 기준으로 경로를 잡습니다. */}
        {/* 현재는 placeholder 이미지를 사용합니다. */}
              <div className={styles.thumbnailWrapper}>
                <Image src={project.thumbnail} alt={`${project.title} thumbnail`} width={320} height={192} className={styles.thumbnailImage} />
              </div>        <div className={styles.content}>
          <p className={styles.category}>{project.category}</p>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.shortDescription}</p>
          <div className={styles.technologies}>
            {project.technologies.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    // </Link> // Link 제거
  );
}
