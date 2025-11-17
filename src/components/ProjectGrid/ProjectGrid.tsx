import ProjectCard from '../ProjectCard/ProjectCard'; // Updated path
import projectsData from '../../../data/projects.json';
import { useGsapFadeIn } from '@/hooks/useGsapFadeIn'; // Import useGsapFadeIn
import styles from './ProjectGrid.module.scss'; // Import the SCSS module

type Project = {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  links: {
    github: string;
    liveDemo: string;
  };
};

export default function ProjectGrid() {
  const projects: Project[] = projectsData;

  return (
    <div className={styles.projectGrid}>
      {projects.map((project) => {
        const projectCardRef = useGsapFadeIn(); // Apply fade-in to each ProjectCard
        return (
          <div key={project.id} ref={projectCardRef}>
            <ProjectCard project={project} />
          </div>
        );
      })}
    </div>
  );
}
