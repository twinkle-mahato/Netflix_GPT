import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./constants";

//initialize the Gemini (geniAi)
const genai = new GoogleGenAI({
  apiKey: GEMINI_KEY,
  dangerouslyAllowBrowser: true,
});

export default genai;
