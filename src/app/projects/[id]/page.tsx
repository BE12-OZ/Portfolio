import projectsData from '../../../../data/projects.json';
import Image from 'next/image';
import Link from 'next/link';

type Params = {
  id: string;
};

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

// generateStaticParams: 빌드 시점에 정적 페이지들을 미리 생성합니다.
export async function generateStaticParams() {
  const projects: Project[] = projectsData;
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailPage({ params }: { params: Params }) {
  const projects: Project[] = projectsData;
  const project = projects.find((p) => p.id.toString() === params.id);

  if (!project) {
    return <div className="text-center py-10">Project not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-lg text-indigo-400 mb-8">{project.category}</p>
        
        <div className="w-full h-96 bg-gray-700 flex items-center justify-center mb-8 rounded-lg">
          <Image src={project.thumbnail} alt={`${project.title} image`} width={960} height={384} className="object-cover w-full h-full" />
        </div>

        <h2 className="text-2xl font-bold mb-4">About this project</h2>
        <p className="text-gray-300 mb-8 whitespace-pre-line">{project.longDescription}</p>

        <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-700 text-gray-300 text-sm font-medium px-3 py-1.5 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Links</h2>
        <div className="flex gap-4 mb-8">
          <Link href={project.links.github} target="_blank" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">
            GitHub
          </Link>
          <Link href={project.links.liveDemo} target="_blank" className="bg-teal-accent hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors">
            Live Demo
          </Link>
        </div>
        <Link href="/" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors">
          &larr; Back to Projects
        </Link>
      </div>
    </div>
  );
}
