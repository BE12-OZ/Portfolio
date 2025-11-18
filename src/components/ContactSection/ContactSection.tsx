'use client';

import { Github, Mail, Phone, Book } from 'lucide-react';
import Link from 'next/link';
import { useCursorStore } from '@/store/cursorStore';
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn'; // Import useGsapFadeIn
import AnimatedText from '../AnimatedText/AnimatedText'; // Updated path
import styles from './ContactSection.module.scss'; // Import the SCSS module

export default function ContactSection() {
  const { setCursorType } = useCursorStore();
  const infoRef = useGsapFadeIn<HTMLDivElement>(); // Apply fade-in to info group
  const socialLinksRef = useGsapFadeIn<HTMLDivElement>(); // Apply fade-in to social links

  return (
    <div className={styles.contactSection}>
      <div className={styles.contactCard}>
        <AnimatedText text="Gwang-il Jeon" el="h3" className={styles.title} />
        <div className="space-y-4" ref={infoRef}> {/* Tailwind class for spacing, will be converted later */}
          <div className={styles.infoGroup}>
            <Mail size={20} />
            <span className={styles.infoText}>dhwmzheld6470@gmail.com</span>
          </div>
          <div className={styles.infoGroup}>
            <Phone size={20} />
            <span className={styles.infoText}>010-2868-6470</span>
          </div>
        </div>
        <div className={styles.socialLinks} ref={socialLinksRef}>
          <Link 
            href="https://github.com/BE12-OZ"
            target="_blank" 
            className={`${styles.socialLink} ${styles.github}`}
            onMouseEnter={() => setCursorType('hovered')}
            onMouseLeave={() => setCursorType('default')}
          >
            <Github size={20} />
            GitHub
          </Link>
          <Link 
            href="https://velog.io/@i_lu/about"
            target="_blank" 
            className={`${styles.socialLink} ${styles.velog}`}
            onMouseEnter={() => setCursorType('hovered')}
            onMouseLeave={() => setCursorType('default')}
          >
            <Book size={20} />
            Velog
          </Link>
        </div>
      </div>
    </div>
  );
}
