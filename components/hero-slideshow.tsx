"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Full-bleed background slideshow for the hero. Cross-fades through a set of
 * cinema images. Holds on the first frame under reduced-motion.
 */
export function HeroSlideshow({
  images,
  interval = 5500,
}: {
  images: string[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      interval,
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`animate-slow-zoom object-cover transition-opacity duration-[1600ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
