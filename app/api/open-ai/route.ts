import { OpenAI } from "openai";

const MY_APP_OPENAI_API_KEY = process.env.MY_APP_OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: MY_APP_OPENAI_API_KEY });

export async function POST(req: Request, res: Response) {

  try {
    const { prompt } = await req.json();


    if (!prompt) {
      return new Response(JSON.stringify({ error: "Prompt is required" }), { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      store: true,
    });

    const generatedText = response.choices[0].message.content;
    return new Response(JSON.stringify({ result: generatedText }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Error to generate text by OpenAI" }), { status: 500 });
  }
}