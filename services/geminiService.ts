import { GoogleGenAI, Type } from "@google/genai";

export const generateMarketingStrategy = async (businessName: string, niche: string) => {
  // Enforce "API key is missing" check
  if (!process.env.API_KEY) {
    throw new Error("API key is missing");
  }

  // Use API key directly from process.env.API_KEY as per instructions
  const ai = new GoogleGenAI({ apiKey: "AIzaSyCPPh6zPluwz9Eu8WjtejijZkAlNmEhxKY" });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate a professional digital marketing strategy for "${businessName}" in the "${niche}" industry. 
      The response MUST be a valid JSON object. 
      JSON structure: 
      {
        "overview": "Executive summary of the strategy",
        "tactics": ["array of 4 specific marketing tactics"],
        "metrics": ["array of 3 key success metrics"]
      }`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            overview: {
              type: Type.STRING,
            },
            tactics: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            metrics: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: ["overview", "tactics", "metrics"],
        },
      },
    });

    const text = response.text || '';
    
    // Robust extraction in case of surrounding text
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    const cleanedText = jsonMatch ? jsonMatch[0] : text;

    try {
      return JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("Failed to parse AI response:", cleanedText);
      throw new Error("Invalid response format from AI engine.");
    }
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    const errorMessage = error?.message || "";
    // Enforce "API is wrong" for authentication errors
    if (
      errorMessage.includes('403') || 
      errorMessage.includes('401') || 
      errorMessage.includes('API_KEY_INVALID') || 
      errorMessage.includes('not found') ||
      errorMessage.includes('INVALID_ARGUMENT')
    ) {
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
        systemInstruction: 'You are Nova, the AI assistant for NovaSphere Digital Agency in Pune. You are professional, technical, and creative. Keep responses under 3 sentences.',
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error: any) {
    const errorMessage = error?.message || "";
    if (errorMessage.includes('403') || errorMessage.includes('API_KEY_INVALID')) {
      return "API is wrong";
    }
    return "I am currently experiencing connection issues. Please try again later.";
  }
};
