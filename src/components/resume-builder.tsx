import type { WorkExperience, Education, Skill } from '@/lib/types';
import { WorkExperienceItem } from './work-experience-item';
import { EducationItem } from './education-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';
import { FaReact, FaHtml5 } from 'react-icons/fa'; // Import React icon, Typescript, and HTML5
import { SiTypescript, SiKubernetes, SiGitlab } from 'react-icons/si'; // Import Typescript icon and Kubernetes icon
import { TbBrandNextjs } from 'react-icons/tb'; // Import Next.js icon



interface ResumeBuilderProps {
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
}

export function ResumeBuilder({ workExperience, education, skills }: ResumeBuilderProps) {
  const getSkillIcon = (skillName: string) => {
    switch (skillName.toLowerCase()) {
      case 'react':
        return <FaReact size={40} />; // Use React icon
      case 'next.js':
        return <TbBrandNextjs size={40} />; // Use Next.js icon
      case 'typescript':
        return <SiTypescript size={40} />; // Use Typescript icon
      case 'kubernetes':
        return <SiKubernetes size={40} />; // Use Kubernetes icon
      case 'html5':
        return <FaHtml5 size={40} />; // Use Next.js icon
      case 'devops':
        return <SiGitlab size={40} />; // Using Gitlab as a representative DevOps tool icon
      // Add cases for other skills
      default:
        return (
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xl">
            {skillName.substring(0, 2).toUpperCase()} {/* Fallback to initials */}
          </div>
        );
    }
  };
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center space-x-4">
              {/* Placeholder for Icon/Logo */}
              <div className="w-10 h-10 flex items-center justify-center"> {/* Adjust size as needed */}
                {getSkillIcon(skill.name)} {/* Call the helper function to get the icon */}
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-primary">
            <Briefcase className="mr-3 h-7 w-7" /> Work Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {workExperience.length > 0 ? (
            workExperience.map((exp) => (
              <WorkExperienceItem key={exp.id} experience={exp} />
            ))
          ) : (
            <p className="text-muted-foreground">No work experience listed.</p>
          )}
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-2xl text-primary">
            <GraduationCap className="mr-3 h-7 w-7" /> Education
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {education.length > 0 ? (
            education.map((edu) => (
              <EducationItem key={edu.id} education={edu} />
            ))
          ) : (
            <p className="text-muted-foreground">No education listed.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
