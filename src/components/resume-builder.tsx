import type { WorkExperience, Education } from '@/lib/types';
import { WorkExperienceItem } from './work-experience-item';
import { EducationItem } from './education-item';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

interface ResumeBuilderProps {
  workExperience: WorkExperience[];
  education: Education[];
}

export function ResumeBuilder({ workExperience, education }: ResumeBuilderProps) {
  return (
    <div className="space-y-12 max-w-4xl mx-auto">
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
