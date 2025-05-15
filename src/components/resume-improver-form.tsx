"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { improveResumeBulletPoint, type ImproveResumeBulletPointOutput } from '@/ai/flows/resume-bullet-point-improver';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  bulletPoint: z.string().min(10, { message: "Bullet point must be at least 10 characters." }).max(500, { message: "Bullet point must be at most 500 characters." }),
  skills: z.string().min(2, { message: "Skills must be at least 2 characters." }).max(200, { message: "Skills must be at most 200 characters." }),
  jobTitle: z.string().min(2, { message: "Job title must be at least 2 characters." }).max(100, { message: "Job title must be at most 100 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ResumeImproverForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ImproveResumeBulletPointOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bulletPoint: "",
      skills: "",
      jobTitle: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setResult(null);
    try {
      const improvedResult = await improveResumeBulletPoint({
        bulletPoint: data.bulletPoint,
        skills: data.skills,
        jobTitle: data.jobTitle,
      });
      setResult(improvedResult);
      toast({
        title: "Success!",
        description: "Your bullet point has been improved.",
      });
    } catch (error) {
      console.error("Error improving bullet point:", error);
      toast({
        title: "Error",
        description: "Failed to improve bullet point. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="bulletPoint"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="bulletPoint">Original Bullet Point</FormLabel>
              <FormControl>
                <Textarea
                  id="bulletPoint"
                  placeholder="e.g., Managed a team of developers."
                  {...field}
                  rows={4}
                  className="bg-background"
                />
              </FormControl>
              <FormDescription>
                Enter the resume bullet point you want to improve.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="skills">Skills to Highlight</FormLabel>
              <FormControl>
                <Input
                  id="skills"
                  placeholder="e.g., Leadership, Project Management, Agile"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormDescription>
                Comma-separated list of skills you want to emphasize.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="jobTitle">Desired Job Title</FormLabel>
              <FormControl>
                <Input
                  id="jobTitle"
                  placeholder="e.g., Senior Software Engineer"
                  {...field}
                  className="bg-background"
                />
              </FormControl>
              <FormDescription>
                The job title you are targeting with this resume.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Improving...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" />
              Improve Bullet Point
            </>
          )}
        </Button>
      </form>

      {result && (
        <Card className="mt-8 bg-secondary shadow-inner">
          <CardHeader>
            <CardTitle className="flex items-center text-xl text-primary">
              <Sparkles className="mr-2 h-5 w-5 text-accent" />
              AI Suggestion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground whitespace-pre-wrap">
              {result.improvedBulletPoint}
            </p>
          </CardContent>
        </Card>
      )}
    </Form>
  );
}
