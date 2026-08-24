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

export interface NavEntry {
  label: string;
  href: string;
  /** Pathname to compare against for the active/current-page state, when it differs from href (e.g. an anchor link). */
  matchPath?: string;
  disabled?: boolean;
  /** Tooltip shown via the custom cursor when disabled. */
  tooltip?: string;
  external?: boolean;
}

/** Nav order and the center logo position match the Figma navbar exactly. */
export const nav: NavEntry[] = [
  // Jumps to the projects section on the homepage rather than a separate page.
  { label: "work", href: "/#projects", matchPath: "/" },
  // Playground isn't built yet — archived at src/app/_playground. Rendered
  // as a disabled item with a "coming soon" cursor tooltip instead of a link.
  { label: "playground", href: "/playground", disabled: true, tooltip: "coming soon!" },
];

export const navSecondary: NavEntry[] = [
  { label: "about", href: "/about" },
  { label: "resume", href: "/resume.pdf", external: true },
];

export const footerNav = {
  navigation: [
    { label: "work", href: "/#projects", matchPath: "/" },
    { label: "about", href: "/about" },
    // "museum" is labeled distinctly from "playground" in the Figma footer.
    // Playground itself is archived (not built yet), so this points home
    // until "museum" has its own destination.
    { label: "museum", href: "/" },
  ],
  connect: [
    { label: "email", href: "mailto:hi.sahini@gmail.com" },
    { label: "linkedin", href: "https://linkedin.com/in/placeholder" },
  ],
} as const;
