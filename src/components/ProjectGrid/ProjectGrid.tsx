import { useState } from 'react'; // useState 임포트
import ProjectCard from '../ProjectCard/ProjectCard'; // Updated path
import ProjectDetailModal from '../ProjectDetailModal/ProjectDetailModal'; // ProjectDetailModal 임포트
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
    github?: string; // optional
    liveDemo?: string; // optional
  };
};

export default function ProjectGrid() {
  const projects: Project[] = projectsData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className={styles.projectGridCard}>
      <div className={styles.projectGrid}>
        {projects.map((project) => {
          const projectCardRef = useGsapFadeIn<HTMLDivElement>(); // Apply fade-in to each ProjectCard
          return (
            <div key={project.id} ref={projectCardRef}>
              <ProjectCard project={project} onProjectClick={handleProjectClick} />
            </div>
          );
        })}
      </div>

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </div>
  );
}
