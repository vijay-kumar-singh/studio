import { ResumeImproverForm } from '@/components/resume-improver-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function ResumeImproverPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <Lightbulb className="mx-auto h-12 w-12 text-accent mb-4" />
          <CardTitle className="text-3xl text-primary">AI Resume Improver</CardTitle>
          <CardDescription className="text-lg">
            Enhance your resume bullet points with AI. Provide context, skills, and your target job title for tailored suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResumeImproverForm />
        </CardContent>
      </Card>
    </div>
  );
}
