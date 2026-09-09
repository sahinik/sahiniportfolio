export const site = {
  name: "Sahini Komandla",
  handle: "sahini komandla",
  role: "Product Designer",
  /** V2 footer tagline. */
  tagline: "made with endless lattes and naps ☆⋆⭒˚.⋆",
  /** Homepage hero greeting + positioning line (V2 — replaces the old WIP marker). */
  homeGreeting: "hi i'm sahini",
  heroLine: "product designer and researcher making accessible design feel like craft, not compliance.",
  positioning:
    "Accessibility-focused product designer bridging the physical and digital world.",
  about: {
    greeting: "nice to meet you :))",
    /** Left column, under the greeting. */
    introParagraphs: [
      "Hi, I'm Sahini (pronounced saw-he-nee)! I'm a product designer and researcher raised under the San Diego sun, now adjusting to Seattle's gray skies (it's a work in progress).",
      "My journey began quite unconventionally as a behavioral neuroscience lab. As a undergrad research assistant, I kept watching my lab mates run around like caffeinated squirrels, shuffling through piles of papers mid-experiment just to log a number. So I made us a little system: a tin of color-coded flash cards. It was nothing fancy, but suddenly I noticed that no one was frantically flipping through clipboards anymore, and the relief on their faces was priceless. From then on, I became the lab's unofficial IT support, except for people instead of computers. When I found out there was an entire field built around exactly that, I was hooked.",
    ],
    /** Right column, alongside the intro — ends with the action buttons. */
    moreParagraphs: [
      "My curiosity eventually led me to the University of Washington's MS in Human Centered Design & Engineering, where I learned to design for diverse audiences, championed accessibility along the way, and tackled real world problems through a human centered lens.",
      "These days, I care about building thoughtful products that empower people and make their lives a little easier. I'm a big advocate for research and accessibility, because I believe that good products start with actually listening to what people need.",
      "That's the TLDR, but if you want to learn more about me, feel free to reach out! When I'm not cooking up designs or molding experiences, you can find me creating art (@sahidraws), fueling up with hojicha, watching sunsets, or collecting cat memes :))",
    ],
    polaroidCaption: "graduated from UW MS HCDE!",
  },
  email: "hi.sahini@gmail.com",
  social: {
    /** TODO: replace with real LinkedIn URL — not present in the Figma source. */
    linkedin: "https://linkedin.com/in/placeholder",
  },
  resumeUrl: "/resume.pdf",
} as const;

/** V2 experience roles — real data from Figma, replacing the old placeholder rows. */
export const experience = [
  { org: "Team Chemistry Design", project: "Huddl", role: "Product Designer & Researcher" },
  { org: "University of Washington", project: "IT", role: "Accessibility Assistant" },
  { org: "Google", project: "Vertex AI (Sponsored)", role: "UX Researcher" },
  { org: "Digital Aid Seattle", project: "Games for Love", role: "UX/UI Designer Lead" },
] as const;

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
    // Matches the v2 footer component's label exactly. No dedicated
    // /museum route exists yet — routed to /playground as the closest
    // conceptual match until a real destination exists.
    { label: "museum", href: "/playground" },
  ],
  connect: [
    { label: "email", href: "mailto:hi.sahini@gmail.com" },
    { label: "linkedin", href: "https://linkedin.com/in/placeholder" },
  ],
} as const;
