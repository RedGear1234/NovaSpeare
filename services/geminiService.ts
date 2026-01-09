import { GoogleGenAI, Type } from "@google/genai";

export const generateMarketingStrategy = async (businessName: string, niche: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    // Using gemini-3-pro-preview for complex reasoning task as per guidelines
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `Generate a high-level digital marketing strategy for a business named "${businessName}" in the "${niche}" industry. 
      Format the response as a JSON object with these keys: 
      "overview" (a string), "tactics" (an array of strings), "metrics" (an array of strings).`,
      config: {
        responseMimeType: "application/json",
        // Implementing responseSchema for consistent JSON output as per guidelines
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overview: {
              type: Type.STRING,
              description: 'A brief executive overview of the strategy.',
            },
            tactics: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Key marketing tactics to implement.',
            },
            metrics: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Key performance indicators to measure success.',
            },
          },
          required: ["overview", "tactics", "metrics"],
        },
      },
    });

    // Accessing .text property directly as per guidelines
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
    // Accessing .text property directly as per guidelines
    return response.text;
  } catch (error) {
    console.error("Assistant Error:", error);
    return "I'm having a bit of trouble connecting right now. Could you try again?";
  }
};