"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";
import { pageTransition } from "@/lib/motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { consumePendingScroll } from "@/lib/scroll-to-hash";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduced = useReducedMotion();

  // Reduced-motion path renders children directly with no transition delay,
  // so the hash target exists as soon as the route changes.
  useEffect(() => {
    if (reduced) consumePendingScroll();
  }, [pathname, reduced]);

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={consumePendingScroll}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
