
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. Affirmation generator will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateAffirmation = async (): Promise<string> => {
  if (!API_KEY) {
    return "API ключ не настроен. Пожалуйста, настройте ваш API ключ.";
  }
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [{
        parts: [{
          text: "Напиши одну короткую, но мощную успокаивающую аффирмацию для человека, который испытывает сильную тревогу прямо сейчас. Ответ должен быть на русском языке, без кавычек и лишних фраз."
        }]
      }],
    });

    return response.text.trim();
  } catch (error) {
    console.error("Error generating affirmation:", error);
    return "Произошла ошибка при генерации аффирмации. Попробуйте еще раз.";
  }
};
