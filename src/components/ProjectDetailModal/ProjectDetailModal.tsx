'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Link as LinkIcon } from 'lucide-react';
import styles from './ProjectDetailModal.module.scss';

type Project = {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  links: {
    github?: string;
    liveDemo?: string;
  };
};

type ProjectDetailModalProps = {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
};

export default function ProjectDetailModal({ isOpen, onClose, project }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.modalOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Overlay 클릭 시 닫기
        >
          <motion.div
            className={styles.modalContent}
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록
          >
            <button className={styles.closeButton} onClick={onClose}>
              <X size={24} />
            </button>

            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.category}>{project.category}</p>
            <p className={styles.longDescription}>{project.longDescription}</p>

            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  <Github size={20} /> GitHub
                </a>
              )}
              {project.links.liveDemo && (
                <a href={project.links.liveDemo} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                  <LinkIcon size={20} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
