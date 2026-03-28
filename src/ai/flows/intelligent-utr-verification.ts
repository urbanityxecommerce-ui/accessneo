'use server';
/**
 * @fileOverview This file defines a Genkit flow for intelligent UTR (Unique Transaction Reference) verification.
 * It uses AI to perform a preliminary format and structure check on a 12-digit UTR.
 *
 * - intelligentUtrVerification - A function that handles the UTR verification process.
 * - IntelligentUtrVerificationInput - The input type for the intelligentUtrVerification function.
 * - IntelligentUtrVerificationOutput - The return type for the intelligentUtrVerification function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const IntelligentUtrVerificationInputSchema = z.object({
  utr: z.string().describe('The 12-digit UTR (Unique Transaction Reference) to be validated.'),
});
export type IntelligentUtrVerificationInput = z.infer<typeof IntelligentUtrVerificationInputSchema>;

const IntelligentUtrVerificationOutputSchema = z.object({
  isValid: z.boolean().describe('True if the UTR matches the expected 12-digit numeric format, false otherwise.'),
  feedback: z.string().describe('A helpful message indicating if the UTR is valid or explaining any detected issues.'),
});
export type IntelligentUtrVerificationOutput = z.infer<typeof IntelligentUtrVerificationOutputSchema>;

export async function intelligentUtrVerification(input: IntelligentUtrVerificationInput): Promise<IntelligentUtrVerificationOutput> {
  return intelligentUtrVerificationFlow(input);
}

const intelligentUtrVerificationPrompt = ai.definePrompt({
  name: 'intelligentUtrVerificationPrompt',
  input: { schema: IntelligentUtrVerificationInputSchema },
  output: { schema: IntelligentUtrVerificationOutputSchema },
  prompt: `You are an intelligent financial system validator. Your task is to perform a preliminary check on a given UTR (Unique Transaction Reference) to ensure it adheres to the standard format.
A valid UTR is always a 12-digit numeric string. It should contain only digits and be exactly 12 characters long.

Based on the provided UTR: "{{{utr}}}", determine if it is valid.

If the UTR is exactly 12 digits long and contains only numeric characters, set "isValid" to true and "feedback" to "The UTR format looks correct.".
If the UTR is not exactly 12 digits long, set "isValid" to false and "feedback" to "The UTR must be exactly 12 digits long. Please check the length.".
If the UTR contains any non-numeric characters, set "isValid" to false and "feedback" to "The UTR should only contain digits. Please remove any letters or special characters.".
If both length and character type are incorrect, prioritize the length feedback first.

Return your response in the specified JSON format.`,
});

const intelligentUtrVerificationFlow = ai.defineFlow(
  {
    name: 'intelligentUtrVerificationFlow',
    inputSchema: IntelligentUtrVerificationInputSchema,
    outputSchema: IntelligentUtrVerificationOutputSchema,
  },
  async (input) => {
    const { output } = await intelligentUtrVerificationPrompt(input);
    return output!;
  }
);
