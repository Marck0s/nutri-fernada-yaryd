"use client";

interface LetterRevealProps {
  text: string;
  className?: string;
  startDelay?: number;
}

export default function LetterReveal({ text, className = "", startDelay = 120 }: LetterRevealProps) {
  const words = text.split(" ");
  const wordLengths = words.map((w) => w.length);

  return (
    <span className={`letter-reveal ${className}`} aria-label={text}>
      {words.map((word, wIndex) => {
        const precedingLetters = wordLengths.slice(0, wIndex).reduce((a, b) => a + b, 0);
        return (
          <span key={wIndex} className="letter-reveal__word" aria-hidden="true">
            {word.split("").map((char, cIndex) => (
              <span
                key={cIndex}
                className="letter-reveal__char"
                style={{ animationDelay: `${startDelay + (precedingLetters + cIndex) * 28}ms` }}
              >
                {char}
              </span>
            ))}
            {wIndex < words.length - 1 ? <span className="letter-reveal__char">&nbsp;</span> : null}
          </span>
        );
      })}
    </span>
  );
}
