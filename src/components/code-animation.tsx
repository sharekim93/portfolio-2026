"use client";

import { useEffect, useState } from "react";

const codeSnippets = [
  {
    lang: "TypeScript",
    code: `const developer = {
  name: "김나눔",
  role: "웹 개발자",
  skills: ["React", "Next.js", "TypeScript"]
};`,
  },
  {
    lang: "JavaScript",
    code: `function buildGreatProduct() {
  return userExperience + cleanCode;
}`,
  },
  {
    lang: "React",
    code: `<Component>
  {innovation && creativity}
</Component>`,
  },
];

export function CodeAnimation() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSnippet = codeSnippets[currentSnippetIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (charIndex < currentSnippet.code.length) {
            setDisplayedCode(currentSnippet.code.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (charIndex > 0) {
            setDisplayedCode(currentSnippet.code.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            // Move to next snippet
            setIsDeleting(false);
            setCurrentSnippetIndex(
              (currentSnippetIndex + 1) % codeSnippets.length
            );
          }
        }
      },
      isDeleting ? 30 : 50
    );

    return () => clearTimeout(timeout);
  }, [charIndex, currentSnippetIndex, isDeleting]);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700">
      {/* Window Controls */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-xs text-gray-400 font-mono">
          {codeSnippets[currentSnippetIndex].lang}
        </span>
      </div>

      {/* Code Display */}
      <div className="font-mono text-sm leading-relaxed min-h-[180px]">
        <pre className="text-gray-100">
          <code>
            {displayedCode}
            <span className="inline-block w-2 h-5 bg-accent ml-1 animate-pulse" />
          </code>
        </pre>
      </div>

      {/* Bottom Stats */}
      <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-4">
          <span>UTF-8</span>
          <span>LF</span>
          <span className="text-accent">
            {codeSnippets[currentSnippetIndex].lang}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Live Coding</span>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-2xl blur opacity-30 -z-10" />
    </div>
  );
}
