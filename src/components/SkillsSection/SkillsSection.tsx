import { useGsapFadeIn } from '@/hooks/useGsapFadeIn'; // Import useGsapFadeIn
import styles from './SkillsSection.module.scss'; // Import the SCSS module
import SkillCategoryCard from './SkillCategoryCard'; // Import the new component

interface Skill {
  name: string;
}

interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

const categorizedSkills: SkillCategory[] = [
  {
    categoryName: 'Frontend',
    skills: [
      { name: 'HTML/CSS' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    categoryName: 'Backend',
    skills: [
      { name: 'Python' },
      { name: 'Django' },
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'WebSocket' },
      { name: 'Redis' },
      { name: 'RESTful API' },
    ],
  },
  {
    categoryName: 'Design',
    skills: [
      { name: 'Figma' },
      { name: 'Photoshop' },
      { name: 'AfterEffect' },
    ],
  },
  {
    categoryName: 'DevOps',
    skills: [
      { name: 'Docker' },
      { name: 'AWS' },
      { name: 'Vercel' },
    ],
  },
  {
    categoryName: 'Communication',
    skills: [
      { name: 'JIRA' },
      { name: 'Slack' },
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className={styles.skillsGridContainer}>
      <div className={styles.skillsGrid}>
        {categorizedSkills.map((category) => {
          const skillCardRef = useGsapFadeIn<HTMLDivElement>();
          return (
            <div key={category.categoryName} ref={skillCardRef}>
              <SkillCategoryCard category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
