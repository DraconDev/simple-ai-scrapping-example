import { GoogleGenerativeAI } from "@google/generative-ai";
import { log } from "console";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY environment variable is required");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function promtAI(prompt: string) {
  log("info", "Starting article generation");

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
    });

    const result = await model.generateContent(prompt);

    if (!result || !result.response) {
      log("error", "Empty response from Gemini");
      throw new Error("Empty response from Gemini API");
    }

    if (
      !result.response.candidates ||
      !result.response.candidates[0] ||
      !result.response.candidates[0].content ||
      !result.response.candidates[0].content.parts ||
      !result.response.candidates[0].content.parts[0]
    ) {
      log("error", "No candidates in response from Gemini");
      throw new Error("No candidates in response from Gemini API");
    }

    const response = result?.response?.candidates[0].content.parts[0].text;

    return response ?? "";
  } catch (error) {
    log("error", "Error generating response", {
      error: error instanceof Error ? error.message : "Unknown error",
    });
    throw error;
  }
}
