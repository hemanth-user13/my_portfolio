import { useState, useEffect } from "react";

const CODE_LINES = [
  '  const skills = ["React", "Django", "Python", "JavaScript"];',
  '  const passion = "Building Amazing Web Apps";',
  "  return (",
  "    <Developer",
  "      fullStack={true}",
  '      experience="Expert Level"',
  '      enthusiasm="Maximum"',
  "    />",
  "  );",
  "}",
];

export default function CodeAnimation() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    if (currentLine >= CODE_LINES.length) return;

    const line = CODE_LINES[currentLine];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex <= line.length) {
        setDisplayedCode(
          (prev) => prev + (charIndex === line.length ? "\n" : line[charIndex])
        );
        charIndex++;
      } else {
        clearInterval(interval);
        setCurrentLine((prev) => prev + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [currentLine]);

  return (
    <div className="bg-slate-900 dark:bg-black rounded-2xl p-6 font-mono text-sm overflow-hidden shadow-2xl border border-slate-700">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-slate-400 ml-4 text-xs">hemanth.jsx</span>
      </div>
      <pre className="text-green-400 whitespace-pre-wrap">
        {displayedCode}
        <span className="animate-pulse">|</span>
      </pre>
    </div>
  );
}
