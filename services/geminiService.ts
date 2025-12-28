
import { GoogleGenAI } from "@google/genai";

export const generateMarketingStrategy = async (businessName: string, niche: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a high-level digital marketing strategy for a business named "${businessName}" in the "${niche}" industry. 
      Format the response as a JSON object with these keys: 
      "overview" (a string), "tactics" (an array of strings), "metrics" (an array of strings).`,
      config: {
        responseMimeType: "application/json",
      },
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const getAssistantResponse = async (history: {role: string, content: string}[], message: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: 'You are Nova, the AI assistant for NovaSphere Digital Agency. You are professional, creative, and expert in web development, AI integration, and digital branding. Keep responses concise and helpful.',
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text;
  } catch (error) {
    console.error("Assistant Error:", error);
    return "I'm having a bit of trouble connecting right now. Could you try again?";
  }
};
