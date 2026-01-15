import { GoogleGenAI, Type } from "@google/genai";

export const generateMarketingStrategy = async (businessName: string, niche: string) => {
  // Check if API Key is available
  if (!process.env.API_KEY) {
    console.error("API_KEY is not defined in environment variables.");
    throw new Error("API configuration missing. Please ensure the API_KEY environment variable is set.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    // Using gemini-flash-latest for maximum reliability in production environments
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: `Generate a professional, high-level digital marketing strategy for a business named "${businessName}" in the "${niche}" industry. 
      The response MUST be a valid JSON object. 
      JSON structure: 
      {
        "overview": "string describing the strategy",
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
              description: 'Executive summary of the strategy.',
            },
            tactics: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Key marketing tactics.',
            },
            metrics: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: 'Key performance indicators.',
            },
          },
          required: ["overview", "tactics", "metrics"],
        },
      },
    });

    let text = response.text || '';
    
    // Robust extraction: find the first { and the last } if markdown is present
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      text = jsonMatch[0];
    }

    try {
      const parsed = JSON.parse(text);
      if (!parsed.overview || !Array.isArray(parsed.tactics) || !Array.isArray(parsed.metrics)) {
        throw new Error("Incomplete strategy data received");
      }
      return parsed;
    } catch (parseError) {
      console.error("Failed to parse AI response:", text);
      throw new Error("The AI provided a response in an invalid format. Please try again.");
    }
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    if (error.message?.includes('403') || error.message?.includes('API_KEY_INVALID')) {
      throw new Error("Invalid API Key. Please verify your Gemini API credentials.");
    }
    if (error.message?.includes('fetch')) {
      throw new Error("Network error. Please check your internet connection.");
    }
    throw error;
  }
};

export const getAssistantResponse = async (history: {role: string, content: string}[], message: string) => {
  if (!process.env.API_KEY) return "System Configuration Error: API Key missing.";

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const chat = ai.chats.create({
      model: 'gemini-flash-latest',
      config: {
        systemInstruction: 'You are Nova, the AI assistant for NovaSphere Digital Agency in Pune. You are professional, technical, and creative. You specialize in SEO, PPC, and Cloud services. Keep responses under 3 sentences unless asked for detail.',
      },
    });

    const response = await chat.sendMessage({ message });
    return response.text || "I processed your request but have no response text.";
  } catch (error) {
    console.error("Assistant Error:", error);
    return "The AI assistant is temporarily offline. Please try again in a moment.";
  }
};