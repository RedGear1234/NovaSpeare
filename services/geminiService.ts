import { GoogleGenAI, Type } from "@google/genai";

export const generateMarketingStrategy = async (businessName: string, niche: string) => {
  // Requirement: "if API key is missing Then Message should be API key is missing"
  if (!process.env.API_KEY) {
    throw new Error("API key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Using gemini-3-flash-preview: Higher quota for free tier, perfect for this task.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a professional digital marketing strategy for "${businessName}" in "${niche}". 
      Return only a JSON object with: 
      {
        "overview": "string",
        "tactics": ["array of 4 strings"],
        "metrics": ["array of 3 strings"]
      }`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overview: { type: Type.STRING },
            tactics: { type: Type.ARRAY, items: { type: Type.STRING } },
            metrics: { type: Type.ARRAY, items: { type: Type.STRING } },
          },
          required: ["overview", "tactics", "metrics"],
        },
      },
    });

    const text = response.text || '';
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const cleanedText = jsonMatch ? jsonMatch[0] : text;

    try {
      return JSON.parse(cleanedText);
    } catch (parseError) {
      // If the AI response is mangled, it is still an API-level error in this context
      throw new Error("API is wrong");
    }
  } catch (error: any) {
    console.error("Gemini API Error Detail:", error);
    // Requirement: "id API is error Then API is wrong"
    // This covers 401, 403, 429 (Rate Limit), and 500 errors.
    throw new Error("API is wrong");
  }
};

export const getAssistantResponse = async (history: {role: string, content: string}[], message: string) => {
  if (!process.env.API_KEY) return "API key is missing";

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: 'You are Nova, the AI assistant for NovaSphere. Keep responses concise and technical.',
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I processed your request but have no response text.";
  } catch (error: any) {
    console.error("Assistant Error Detail:", error);
    return "API is wrong";
  }
};