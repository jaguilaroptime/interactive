export default function FormattedText({ text }: { text: string }) {
    const paragraphs = text.split("\n").filter((p) => p.trim() !== "");
  
    return (
      <div>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mb-4 text-gray-800">
            {paragraph}
          </p>
        ))}
      </div>
    );
}
