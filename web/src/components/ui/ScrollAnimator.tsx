"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ScrollAnimatorProps {
  children: ReactNode;
  animation?: "fade-in-up" | "fade-in" | "slide-in-left" | "slide-in-right";
  delay?: number;
  className?: string;
}

export default function ScrollAnimator({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
}: ScrollAnimatorProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${animation} ${className}`}>
      {children}
    </div>
  );
}
