import { ProjectShowcase } from '@/components/project-showcase';
import { projectsData } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">My Projects</h1>
      <ProjectShowcase projects={projectsData} />
    </div>
  );
}
