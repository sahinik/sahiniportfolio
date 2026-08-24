export const site = {
  name: "Sahini Komandla",
  handle: "sahini komandla",
  role: "Product Designer",
  tagline: "designing for creatives ☆⋆⭒˚.⋆",
  /** Homepage hero line — kept as-authored in the Figma file, WIP marker included. */
  heroLine:
    "WIP - I'm an accessibility focused designer that solves ambiguity through creative solutions",
  positioning:
    "Accessibility-focused product designer bridging the physical and digital world.",
  about: {
    greeting: "hi i'm sahini :))",
    paragraphs: [
      "I grew up in sunny San Diego, and I'm now based in Seattle. I have a BS in psychology with minor in neuroscience at San Diego State University and a MS in human centered design & engineering at University of Washington.",
      "As a product designer and researcher I'm committed to improve accessibility of experiences and bridge the gap between the physical and digital world.",
      "When I'm not cooking up designs or shaping experiences, you can find me creating art, fueling up with hojicha, watching sunsets, or collecting cat memes!",
    ],
  },
  email: "hi.sahini@gmail.com",
  social: {
    /** TODO: replace with real LinkedIn URL — not present in the Figma source. */
    linkedin: "https://linkedin.com/in/placeholder",
  },
  resumeUrl: "/resume.pdf",
} as const;

/** Nav order and the center logo position match the Figma navbar exactly. */
export const nav = [
  { label: "work", href: "/work" },
  { label: "playground", href: "/playground" },
] as const;

export const navSecondary = [
  { label: "about", href: "/about" },
  { label: "resume", href: "/resume" },
] as const;

export const footerNav = {
  navigation: [
    { label: "work", href: "/work" },
    { label: "about", href: "/about" },
    // "museum" is labeled distinctly from "playground" in the Figma footer —
    // routed here as the closest conceptual match until its intent is confirmed.
    { label: "museum", href: "/playground" },
  ],
  connect: [
    { label: "email", href: "mailto:hi.sahini@gmail.com" },
    { label: "linkedin", href: "https://linkedin.com/in/placeholder" },
  ],
} as const;
