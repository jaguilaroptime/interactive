import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;
const MY_APP_OPENAI_API_KEY = process.env.MY_APP_OPENAI_API_KEY;
const openai = createOpenAI({ apiKey: MY_APP_OPENAI_API_KEY });

export async function POST(req: Request) {

  const  message  = await req.text();
  const model: any = openai('gpt-4o-mini');

  const result = await streamText({
    model: model,
    prompt: message,
  });

  return result.toTextStreamResponse();
}