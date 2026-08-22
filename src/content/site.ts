export const site = {
  name: "Sahini Komandla",
  role: "Product Designer",
  /** TODO: replace with your real positioning statement once content is ready. */
  positioning:
    "I design at the seam where physical objects and digital interfaces meet — products people can hold, understand, and trust.",
  shortBio:
    "Placeholder bio — replace with your real background, philosophy, and what shapes your design perspective.",
  email: "hi.sahini@gmail.com",
  location: "Placeholder, Earth",
  social: {
    linkedin: "https://linkedin.com/in/placeholder",
    github: "https://github.com/placeholder",
    dribbble: undefined as string | undefined,
  },
  resumeUrl: "/resume.pdf",
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Playground", href: "/playground" },
  { label: "Resume", href: "/resume" },
] as const;
