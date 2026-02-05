"use client";

import { useEffect, useRef, useState } from "react";

const images = [
  "https://plus.unsplash.com/premium_photo-1661947876256-b44c1bfc04d2?w=600&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?w=600&auto=format&fit=crop&q=60",
  "https://images.pexels.com/photos/16474957/pexels-photo-16474957.jpeg",
];

export default function Slider() {
  const slides = [images[images.length - 1], ...images, images[0]];

  const [index, setIndex] = useState(1); 
  const [transition, setTransition] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (index === slides.length - 1) {
        setTransition(false);
        setIndex(1);
      }
      if (index === 0) {
        setTransition(false);
        setIndex(slides.length - 2);
      }
    };

    const node = sliderRef.current;
    node.addEventListener("transitionend", handleTransitionEnd);
    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, [index, slides.length]);

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => setTransition(true));
    }
  }, [transition]);

  return (
    <div className="w-[85%] sm:w-[65%] h-[260px] sm:h-[340px] mx-auto mt-10 overflow-hidden rounded-3xl shadow-2xl relative">
      <div
        ref={sliderRef}
        className="flex h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 700ms ease-in-out" : "none",
        }}
      >
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="library"
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === (index - 1 + images.length) % images.length
                ? "bg-white"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
