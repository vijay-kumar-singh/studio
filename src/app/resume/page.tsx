import { ResumeBuilder } from '@/components/resume-builder';
import { Award, Globe } from 'lucide-react'; // Import icons
import { workExperienceData, educationData, skillsData } from '@/lib/data';

export default function ResumePage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-primary">My Resume</h1>

      {/* Summary or Objective Statement */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary">Summary</h2>
        <p className="text-muted-foreground">
          {/* Add your summary or objective statement here */}
          As a leader in digital transformation initiatives, I am spearheading the frontend development of a cutting-edge web application. Leveraging React, Next.js, TypeScript, and Web Components, I am playing a pivotal role in driving business improvements. I am actively collaborating with cross-functional teams to deeply understand business goals, translating these into impactful user experiences to ensure the application delivers significant value to application users.
        </p>
      </section>
      {/* Skills Section */}
      <ResumeBuilder
        workExperience={workExperienceData}
        education={educationData}
        skills={skillsData}
      />
      {/* Certifications and Licenses */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
          <Award className="mr-3 h-7 w-7" /> Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card for Awareness Scaling Agile */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">Awareness Scaling Agile</h3>
            <p className="text-muted-foreground mb-1">Abram's School</p>
            <p className="text-muted-foreground mb-1">Issued Dec 2018</p>
            <p className="text-muted-foreground">
              Credential link: <a href="https://www.credential.net/2ay623oi#acc.TV2kLWzr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">https://www.credential.net/2ay623oi#acc.TV2kLWzr</a>
            </p>
          </div>

          {/* Card for DevSecOps with Gitlab */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-primary">DevSecOps with Gitlab</h3>
            <p className="text-muted-foreground mb-1">Abram's School</p>
            <p className="text-muted-foreground mb-1">Issued July 2024</p>
            {/* Credential ID is not provided for this certification, so we omit it or add a placeholder if needed */}
            {/* <p className="text-muted-foreground mb-2">Credential ID: N/A</p> */}
            <p className="text-muted-foreground">
              Credential link: <a href="https://media.licdn.com/dms/image/v2/D5622AQHKYE4XvZJs7g/feedshare-shrink_800/feedshare-shrink_800/0/1722353095324?e=1750291200&v=beta&t=BhtEsVKzkBDayxmVinYLZ-3o_zZ_lLSlChW3qEK5J1Y" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">Link to Credential</a>
            </p>
          </div>
          {/* Add more cards for other certifications as needed */}
        </div>
      </section>

      {/* Languages */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
          <Globe className="mr-3 h-7 w-7" /> Languages
        </h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>English (Fluent)</li>
          <li>Danish (Conversational)</li>
        </ul>
      </section>
    </div>
  );
}
