import { useEffect, useState } from "react";

export default function CodeAnimation() {
  const fullCode = `
const skills = ["React", "Django", "Python", "JavaScript"];
const passion = "Building Amazing Web Apps";

return (
  <Developer
    fullStack={true}
    experience="Expert Level"
    enthusiasm="Maximum"
  />
);
`;

  const words = fullCode.split(/(\s+)/);
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= words.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + words[index]);
      setIndex((prev) => prev + 1);
    }, 120);

    return () => clearTimeout(timeout);
  }, [index, words]);

  return (
    <div className="bg-slate-900 dark:bg-black rounded-2xl p-6 font-mono text-sm shadow-2xl border border-slate-700 w-full ">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="text-slate-400 ml-4 text-xs">hemanth.jsx</span>
      </div>

      <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
        {displayedText}
        <span className="animate-pulse text-green-400">|</span>
      </pre>
    </div>
  );
}
