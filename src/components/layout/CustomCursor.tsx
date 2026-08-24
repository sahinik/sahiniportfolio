"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Hourglass } from "lucide-react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select, [data-cursor]";
const POINTER_QUERY = "(pointer: fine) and (hover: hover)";

function subscribePointer(callback: () => void) {
  const query = window.matchMedia(POINTER_QUERY);
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  return window.matchMedia(POINTER_QUERY).matches;
}

function getServerPointerSnapshot() {
  return false;
}

/**
 * Desktop-only cursor enhancement. Enabled via a class on <html> only after
 * confirming JS ran, a fine pointer is present, and motion isn't reduced —
 * so the native cursor never silently disappears in a degraded state.
 */
export function CustomCursor() {
  const reduced = useReducedMotion();
  const hasFinePointer = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerPointerSnapshot,
  );
  const enabled = hasFinePointer && !reduced;
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [badge, setBadge] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const badgeX = useTransform(springX, (v) => v + 18);
  const badgeY = useTransform(springY, (v) => v + 18);

  useEffect(() => {
    document.documentElement.classList.toggle("has-custom-cursor", enabled);
    return () => document.documentElement.classList.remove("has-custom-cursor");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const handleOver = (event: MouseEvent) => {
      const target = (event.target as Element)?.closest(INTERACTIVE_SELECTOR);
      if (!target) return;
      const badgeText = target.getAttribute("data-cursor-badge");
      if (badgeText) {
        setBadge(badgeText);
        return;
      }
      setHovering(true);
      setLabel(target.getAttribute("data-cursor-label"));
    };

    const handleOut = (event: MouseEvent) => {
      const target = (event.target as Element)?.closest(INTERACTIVE_SELECTOR);
      if (target) {
        setHovering(false);
        setLabel(null);
        setBadge(null);
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  if (badge) {
    return (
      <motion.div
        key="badge"
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center gap-1 whitespace-nowrap rounded-[18px] bg-navy px-[10px] py-[5px] font-sans text-sm font-medium text-mist"
        style={{ x: badgeX, y: badgeY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <Hourglass className="size-4 shrink-0" strokeWidth={2} aria-hidden />
        {badge}
      </motion.div>
    );
  }

  return (
    <motion.div
      key="circle"
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full border border-ink mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: hovering ? 64 : 20,
        height: hovering ? 64 : 20,
        backgroundColor: hovering ? "#5583c7" : "rgba(85, 131, 199, 0)",
      }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {label && (
        <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-wide text-paper">
          {label}
        </span>
      )}
    </motion.div>
  );
}
