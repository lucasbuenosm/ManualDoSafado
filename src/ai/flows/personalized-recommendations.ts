'use server';

/**
 * @fileOverview AI-powered recommendation engine that uses past selections of cocktails to customize cocktail/ritual recommendations for the user.
 *
 * - personalizedRecommendations - A function that handles the recommendation process.
 * - PersonalizedRecommendationsInput - The input type for the personalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the personalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  userHistory: z
    .string()
    .describe("A string containing the user's past cocktail and ritual selections."),
});
export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('A list of personalized cocktail and ritual recommendations.'),
});
export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function personalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const recommendationsPrompt = ai.definePrompt({
  name: 'recommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert cocktail and ritual recommender for Manual do Safado.

  Based on the user's past selections, provide personalized recommendations for cocktails and rituals.

  User History: {{{userHistory}}}

  Recommendations:`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await recommendationsPrompt(input);
    return output!;
  }
);
