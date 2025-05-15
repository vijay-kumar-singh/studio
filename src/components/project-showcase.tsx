import type { Project } from '@/lib/types';
import { ProjectCard } from './project-card';

interface ProjectShowcaseProps {
  projects: Project[];
}

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  if (!projects || projects.length === 0) {
    return <p className="text-center text-muted-foreground">No projects to display yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
