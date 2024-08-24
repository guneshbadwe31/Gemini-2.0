
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai"

if (typeof process === 'undefined') {
  var process = {
      env: {
          API_KEY: 'AIzaSyB6Bz3Fpcr1YGcEw87zmOxbT-vDf6HelEI', // Replace this with your actual API key
      }
  };
}

// Use the API key from the defined `process.env`
const apiKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  // console.log(result.response.text());
  return result.response.text();
}

export default run;














// var apiKey = "AIzaSyB6Bz3Fpcr1YGcEw87zmOxbT-vDf6HelEI";

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// Define `process.env` for the browser environment
// if (typeof process === 'undefined') {
//   var process = {
//       env: {
//           API_KEY: 'AIzaSyB6Bz3Fpcr1YGcEw87zmOxbT-vDf6HelEI', // Replace this with your actual API key
//       }
//   };
// }

// // Use the API key from the defined `process.env`
// const apiKey = process.env.API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   model: "gemini-1.5-flash",
// });






