import { motion } from 'framer-motion';
import { useCursorStore } from '@/store/cursorStore';
import styles from './SkillCategoryCard.module.scss';

interface Skill {
  name: string;
}

interface SkillCategory {
  categoryName: string;
  skills: Skill[];
}

type SkillCategoryCardProps = {
  category: SkillCategory;
};

export default function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const { setCursorType } = useCursorStore();

  return (
    <motion.div
      className={styles.skillCategoryCard}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setCursorType('hovered')}
      onMouseLeave={() => setCursorType('default')}
    >
      <div className={styles.content}>
        <h3 className={styles.categoryTitle}>{category.categoryName}</h3>
        <div className={styles.skillsContainer}>
          {category.skills.map((skill) => (
            <span key={skill.name} className={styles.skillTag}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
