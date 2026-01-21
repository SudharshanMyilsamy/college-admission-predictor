import { GoogleGenAI } from "@google/genai";
import { StudentProfile } from "../types";

const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const getAdmissionAdvice = async (profile: StudentProfile, chance: number): Promise<string> => {
  if (!apiKey) {
    return "API Key not configured. Please check environment variables.";
  }

  const entranceInfo = Object.entries(profile.entranceExams)
    .filter(([_, val]) => val !== undefined)
    .map(([key, val]) => `${key.toUpperCase()}: ${val}`)
    .join(', ') || 'None';

  const prompt = `
    Act as a senior college admission counselor.
    Analyze the following student profile:
    - 10th Grade: ${profile.tenthPercentage}%
    - 12th Grade: ${profile.twelfthPercentage}%
    - Stream: ${profile.stream}
    - Subject Group: ${profile.subjectGroup}
    - Entrance Exams: ${entranceInfo}
    - Interests: ${profile.interests.join(', ')}

    The calculated admission chance is ${chance}%.

    Please provide:
    1. A brief analysis of their strengths and weaknesses.
    2. 3 specific, actionable steps they can take to improve their profile or what they should focus on in their application essay.
    
    Keep the tone encouraging but realistic. Format with clear Markdown headings and bullet points. Keep it under 200 words.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });
    return response.text || "Could not generate advice at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while fetching AI advice. Please try again later.";
  }
};