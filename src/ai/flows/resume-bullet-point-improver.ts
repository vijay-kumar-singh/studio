'use server';

/**
 * @fileOverview A resume bullet point improver AI agent.
 *
 * - improveResumeBulletPoint - A function that handles the resume bullet point improvement process.
 * - ImproveResumeBulletPointInput - The input type for the improveResumeBulletPoint function.
 * - ImproveResumeBulletPointOutput - The return type for the improveResumeBulletPoint function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ImproveResumeBulletPointInputSchema = z.object({
  bulletPoint: z.string().describe('The resume bullet point to improve.'),
  skills: z.string().describe('The skills to highlight in the improved bullet point.'),
  jobTitle: z.string().describe('The desired job title for the resume.'),
});
export type ImproveResumeBulletPointInput = z.infer<typeof ImproveResumeBulletPointInputSchema>;

const ImproveResumeBulletPointOutputSchema = z.object({
  improvedBulletPoint: z.string().describe('The improved resume bullet point.'),
});
export type ImproveResumeBulletPointOutput = z.infer<typeof ImproveResumeBulletPointOutputSchema>;

export async function improveResumeBulletPoint(
  input: ImproveResumeBulletPointInput
): Promise<ImproveResumeBulletPointOutput> {
  return improveResumeBulletPointFlow(input);
}

const prompt = ai.definePrompt({
  name: 'improveResumeBulletPointPrompt',
  input: {schema: ImproveResumeBulletPointInputSchema},
  output: {schema: ImproveResumeBulletPointOutputSchema},
  prompt: `You are a resume expert. You will improve the given resume bullet point to be more effective.

  The improved bullet point should highlight the following skills: {{{skills}}}.

  The improved bullet point should be tailored to the following job title: {{{jobTitle}}}.

  Original bullet point: {{{bulletPoint}}}

  Improved bullet point:`,
});

const improveResumeBulletPointFlow = ai.defineFlow(
  {
    name: 'improveResumeBulletPointFlow',
    inputSchema: ImproveResumeBulletPointInputSchema,
    outputSchema: ImproveResumeBulletPointOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
