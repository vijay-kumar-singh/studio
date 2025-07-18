import { ResumeImproverForm } from '@/components/resume-improver-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import { Suspense } from 'react';

export default function ResumeImproverPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <Lightbulb className="mx-auto h-12 w-12 text-accent mb-4" />
          <CardTitle className="text-3xl text-primary">AI Resume Improver</CardTitle>
          <CardDescription className="text-lg">
            This feature requires server-side functionality and is not available in the static version.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8 text-muted-foreground">
            <p>The AI Resume Improver feature is currently unavailable in this static deployment.</p>
            <p className="mt-2">Please visit the development version for full functionality.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
