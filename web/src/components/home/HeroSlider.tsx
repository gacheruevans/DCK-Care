"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const HERO_IMAGES = [
  { src: "https://gacheruevans.github.io/DCK-Care/hero_image_one.jpg", alt: "DCK Care — Professional home care services" },
  { src: "https://gacheruevans.github.io/DCK-Care/hero_image_two.jpg", alt: "DCK Care — Compassionate caregivers" },
  { src: "https://gacheruevans.github.io/DCK-Care/hero_image_three.jpg", alt: "DCK Care — Supporting independence" },
  { src: "https://gacheruevans.github.io/DCK-Care/hero_image_four.jpg", alt: "DCK Care — Quality care in Nottingham" },
  { src: "https://gacheruevans.github.io/DCK-Care/hero_image_five.jpg", alt: "DCK Care — Quality care in Nottingham" },
  { src: "https://gacheruevans.github.io/DCK-Care/hero_image_six.jpg", alt: "DCK Care — Quality care in Nottingham" },
  { src: "https://gacheruevans.github.io/DCK-Care/hero_image_seven.jpg", alt: "DCK Care — Quality care in Nottingham" },
  { src: "https://gacheruevans.github.io/DCK-Care/hero_image_eight.jpg", alt: "DCK Care — Quality care in Nottingham" },
];

const SLIDE_INTERVAL = 5000; // 5 seconds per slide

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Image Slides */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.src}
          className="absolute inset-0 transition-opacity"
          style={{
            opacity: index === current ? 1 : 0,
            transitionDuration: "1200ms",
            transitionTimingFunction: "ease-in-out",
          }}
          aria-hidden={index !== current}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            style={{
              transform: index === current ? "scale(1.05)" : "scale(1)",
              transition: "transform 6s ease-out",
            }}
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="group relative flex items-center justify-center"
            style={{ padding: "4px" }}
          >
            <span
              className="block rounded-full transition-all"
              style={{
                width: index === current ? "28px" : "8px",
                height: "8px",
                background: index === current ? "#fff" : "rgba(255,255,255,0.5)",
                transition: "all 400ms ease",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
