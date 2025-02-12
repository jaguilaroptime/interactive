'use client';

import { useState } from "react";

import {Button} from "@nextui-org/react";

import FormattedText from "@/components/FormattedText";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: input }),
      cache: "no-store",
    });

    const data = await response.json();
    setOutput(data.result);
  };

  return (
    <div>
      <h1>Integración de OpenAI en Next.js</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required={true}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe algo..."
        />
        <Button>Generar Text AI</Button>
        
      </form>
      {output && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-green-700 mb-4">Respuesta:</h2>
          <div>
            <FormattedText text={output} />
          </div>
        </div>
      )}
    </div>
  );
}