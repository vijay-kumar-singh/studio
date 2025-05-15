import { ResumeBuilder } from '@/components/resume-builder';
import { workExperienceData, educationData } from '@/lib/data';

export default function ResumePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">My Resume</h1>
      <ResumeBuilder 
        workExperience={workExperienceData} 
        education={educationData} 
      />
    </div>
  );
}
