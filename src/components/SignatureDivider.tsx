import Reveal from "./Reveal";

interface SignatureDividerProps {
  flip?: boolean;
  className?: string;
}

export default function SignatureDivider({ flip = false, className = "" }: SignatureDividerProps) {
  return (
    <div className={`flex justify-center py-2 ${className}`} aria-hidden="true">
      <Reveal direction="scale">
        <svg
          width="120"
          height="40"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={flip ? "rotate-180" : ""}
        >
          <path
            className="signature-line"
            d="M4 20 C 20 4, 40 4, 60 20 C 80 36, 100 36, 116 20"
            stroke="var(--color-clay)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <circle cx="60" cy="8" r="2" fill="var(--color-clay)" />
        </svg>
      </Reveal>
    </div>
  );
}
