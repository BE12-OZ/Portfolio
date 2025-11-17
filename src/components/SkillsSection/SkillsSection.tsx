import { useGsapFadeIn } from '@/hooks/useGsapFadeIn'; // Import useGsapFadeIn
import styles from './SkillsSection.module.scss'; // Import the SCSS module

const skills = [
  'Python', 'Django', 'FastAPI', 'Node.js', 'TypeScript',
  'React', 'Next.js', 'PostgreSQL', 'MySQL', 'MongoDB',
  'Redis', 'Docker', 'Kubernetes', 'AWS', 'Terraform'
];

export default function SkillsSection() {
  return (
    <div className={styles.skillsCard}>
      <div className={styles.skillsGrid}>
        {skills.map((skill) => {
          const skillCardRef = useGsapFadeIn(); // Apply fade-in to each skill card
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
