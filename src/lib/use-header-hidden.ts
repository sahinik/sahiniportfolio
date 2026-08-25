"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

export const HEADER_HEIGHT = 82;

/**
 * Tracks the same "hide on scroll down, reveal on scroll up" state the
 * header itself uses, so anything else that needs to react to the header
 * disappearing (e.g. a sticky bar sliding up to take its place) stays in
 * sync with it. Returns false permanently under prefers-reduced-motion.
 */
export function useHeaderHidden(): boolean {
  const reducedMotion = useReducedMotion();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (reducedMotion) return;
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const updateVisibility = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const pastHeader = currentY > HEADER_HEIGHT;
      setHidden(scrollingDown && pastHeader);
      lastScrollY.current = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion]);

  return reducedMotion ? false : hidden;
}
