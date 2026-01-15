import { GoogleGenAI, Type } from "@google/genai";

export const generateMarketingStrategy = async (businessName: string, niche: string) => {
  // Check if API Key is available
  if (!process.env.API_KEY) {
    throw new Error("API key is missing");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
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

    let text = response.text || '';
    
    // Extract JSON from potential markdown/text wrapper
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const cleanedText = jsonMatch ? jsonMatch[0] : text;

    try {
      return JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("Failed to parse AI response:", cleanedText);
      throw new Error("Invalid response format from AI");
    }
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Check for authentication/invalid key errors
    const errorMsg = error?.message || "";
    if (errorMsg.includes('403') || errorMsg.includes('401') || errorMsg.includes('API_KEY_INVALID') || errorMsg.includes('not found')) {
      throw new Error("API is wrong");
    }
    
    throw error;
  }
};

export const getAssistantResponse = async (history: {role: string, content: string}[], message: string) => {
  if (!process.env.API_KEY) return "API key is missing";

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: 'You are Nova, the AI assistant for NovaSphere Digital Agency. You are professional and creative. Keep responses concise.',
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I processed your request but have no response text.";
  } catch (error: any) {
    const errorMsg = error?.message || "";
    if (errorMsg.includes('403') || errorMsg.includes('API_KEY_INVALID')) {
      return "API is wrong";
    }
    return "Assistant offline. Please try again later.";
  }
};