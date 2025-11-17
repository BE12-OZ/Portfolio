'use client';

import { useRef } from 'react';
import styles from './TimelineItem.module.scss'; // Import the SCSS module
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn'; // Import useGsapFadeIn

type TimelineEvent = {
  date: string;
  title: string;
  company: string;
  description: string;
};

type TimelineItemProps = {
  event: TimelineEvent;
  isLeft: boolean;
};

export default function TimelineItem({ event, isLeft }: TimelineItemProps) {
  const itemRef = useGsapFadeIn<HTMLDivElement>({ x: isLeft ? -100 : 100 }); // Apply fade-in with direction

  return (
    <div
      className={styles.timelineItem}
      ref={itemRef}
    >
      <div className={`${styles.contentWrapper} ${isLeft ? styles.left : styles.right} items-center w-full`}>
        <div className={styles.textContainer}>
          <div className={`${styles.card} ${isLeft ? styles.left : styles.right}`}>
            <p className={styles.date}>{event.date}</p>
            <h3 className={styles.title}>{event.title}</h3>
            <p className={styles.company}>{event.company}</p>
            <p className={styles.description}>{event.description}</p>
          </div>
        </div>
        <div className={styles.dot}></div>
      </div>
    </div>
  );
}
