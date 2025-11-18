import { useGsapFadeIn } from '@/hooks/useGsapFadeIn'; // Import useGsapFadeIn
import styles from './SkillsSection.module.scss'; // Import the SCSS module

const skills = [
  'Python', 'Django', 'HTML/CSS', 'React', 'Next.js',
  'PostgreSQL', 'MySQL', 'WebSocket', 'Redis',
  'Docker', 'AWS', 'Vercel', 'Slack', 'JIRA'
];

export default function SkillsSection() {
  return (
    <div className={styles.skillsCard}>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => {
          const skillCardRef = useGsapFadeIn<HTMLDivElement>(); // Apply fade-in to each skill card
          return (
            <div key={skill} ref={skillCardRef} className={styles.skillCard}>
              {skill}
            </div>
          );
        })}
      </div>
    </div>
  );
}
