"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts a numeric stat up from zero when it first scrolls into view.
 * Preserves the original formatting — thousands separators, decimals and any
 * prefix/suffix (e.g. "7,300+", "8.7M"). Renders the final value immediately
 * under reduced-motion or without IntersectionObserver.
 */
function parseValue(value: string) {
  const match = value.replace(/,/g, "").match(/^(\D*)([\d.]+)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const decimals = num.includes(".") ? num.split(".")[1].length : 0;
  return {
    prefix,
    target: parseFloat(num),
    decimals,
    suffix,
    grouped: value.includes(","),
  };
}

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() =>
    parseValue(value) ? "0" : value,
  );

  useEffect(() => {
    const parsed = parseValue(value);
    if (!parsed) return;
    const node = ref.current;
    if (!node) return;

    const format = (n: number) =>
      parsed.prefix +
      n.toLocaleString("en-US", {
        minimumFractionDigits: parsed.decimals,
        maximumFractionDigits: parsed.decimals,
        useGrouping: parsed.grouped,
      }) +
      parsed.suffix;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setDisplay(format(parsed.target)));
      return () => cancelAnimationFrame(id);
    }

    let raf = 0;
    let started = false;
    const run = () => {
      const duration = 1600;
      let startTime = 0;
      const tick = (t: number) => {
        if (!startTime) startTime = t;
        const p = Math.min((t - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        setDisplay(format(parsed.target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
