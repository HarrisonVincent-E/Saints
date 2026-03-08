import { cn } from "../lib/utils";
import { useState, useEffect } from "react";

export const MorphingText = ({ 
  words, 
  className,
  interval = 3000,
  startDelay = 1000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState(words[0] ?? "");
  const [morphProgress, setMorphProgress] = useState(0);

  const currentWord = words[currentIndex];
  const nextWord = words[(currentIndex + 1) % words.length];

  useEffect(() => {
    let startTimeout;

    // Morph animation
    const runMorph = () => {
      const morphDuration = 800;
      const steps = 20;
      let step = 0;

      const morphInterval = setInterval(() => {
        step++;
        const progress = step / steps;
        setMorphProgress(progress);

        if (progress < 0.5) {
          // Morphing out
          const charCount = Math.floor(currentWord.length * (1 - progress * 2));
          setDisplayText(currentWord.slice(0, charCount));
        } else {
          // Morphing in
          const charCount = Math.floor(nextWord.length * ((progress - 0.5) * 2));
          setDisplayText(nextWord.slice(0, charCount));
        }

        if (step >= steps) {
          clearInterval(morphInterval);
          setDisplayText(nextWord);
        }
      }, morphDuration / steps);

      const wordTimeout = setTimeout(() => {
        setCurrentIndex((currentIndex + 1) % words.length);
      }, interval);

      return () => {
        clearInterval(morphInterval);
        clearTimeout(wordTimeout);
      };
    };

    const cleanupFns = [];
    if (currentIndex === 0 && startDelay > 0) {
      startTimeout = setTimeout(() => {
        cleanupFns.push(runMorph());
      }, startDelay);
    } else {
      cleanupFns.push(runMorph());
    }

    return () => {
      if (startTimeout) clearTimeout(startTimeout);
      cleanupFns.forEach((cleanup) => cleanup && cleanup());
    };
  }, [currentIndex, currentWord, nextWord, interval, words.length, startDelay]);

  return (
    <div className={cn("relative inline-block", className)}>
      <span
        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
        style={{ fontSize: "150%" }}
      >
        {displayText}
        <span
          className="inline-block w-[0.08em] bg-gradient-to-b from-blue-600 to-purple-600 animate-pulse ml-[0.12em] align-[-0.08em]"
          style={{ height: "1em" }}
        />
      </span>
    </div>
  );
};
