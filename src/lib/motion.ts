import type { Transition, Variants } from "framer-motion";

/** Shared easing/duration language — see design tokens in globals.css. */
export const easeTactile: Transition["ease"] = [0.22, 1, 0.36, 1];

export const durations = {
  fast: 0.2,
  standard: 0.4,
  page: 0.65,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.standard, ease: easeTactile },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.page, ease: easeTactile },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: durations.standard, ease: easeTactile },
  },
};
