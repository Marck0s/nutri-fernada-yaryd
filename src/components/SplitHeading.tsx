"use client";

import { useEffect, useRef, type ReactNode } from "react";
import SplitType from "split-type";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/reducedMotion";

interface SplitHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h2" | "h3";
}

export default function SplitHeading({ children, className = "", as = "h2" }: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (prefersReducedMotion()) {
      gsap.set(node, { opacity: 1 });
      return;
    }

    let split: SplitType | null = null;
    let tween: gsap.core.Tween | null = null;

    // Wait a frame so webfonts have swapped and line-wrapping is final
    // before SplitType measures line boxes.
    const raf = requestAnimationFrame(() => {
      split = new SplitType(node, {
        types: "lines,words",
        lineClass: "split-line",
        wordClass: "split-word",
      });

      if (!split.words || split.words.length === 0) return;

      gsap.set(split.words, { opacity: 0, yPercent: 100, filter: "blur(10px)" });

      tween = gsap.to(split.words, {
        opacity: 1,
        yPercent: 0,
        filter: "blur(0px)",
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.025,
        scrollTrigger: {
          trigger: node,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    // Re-measure once fonts are fully loaded (line breaks can shift)
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert();
    };
  }, []);

  const Tag = as;

  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}
