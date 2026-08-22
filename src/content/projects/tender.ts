import type { Project } from "@/types/project";

/** Placeholder project — replace with a real case study. */
export const tender: Project = {
  slug: "tender",
  title: "Tender",
  summary: "A consumer app that turns plant care into a daily, tactile ritual.",
  category: "Consumer Mobile App · B2C",
  disciplines: ["Product Design", "Interaction Design", "Visual Design"],
  year: "2024",
  featured: true,
  order: 2,
  coverImage: { src: "/images/projects/placeholder-cover.svg", alt: "Placeholder cover image for the Tender project" },
  thumbnailImage: { src: "/images/projects/placeholder-thumb.svg", alt: "Placeholder thumbnail for the Tender project" },
  isPlaceholder: true,
  meta: {
    role: "Product Designer",
    timeline: "4 months · 2024",
    team: "Solo design, 2 engineers",
    tools: ["Figma", "After Effects"],
  },
  context: "Placeholder context paragraph.",
  problem: "Placeholder problem statement.",
  outcome: "Placeholder outcome with real, specific results.",
  sections: [
    {
      type: "text",
      heading: "Overview",
      body: "Placeholder body copy for the overview section.",
    },
    {
      type: "beforeAfter",
      before: { src: "/images/projects/placeholder-before.svg", alt: "Placeholder before state" },
      after: { src: "/images/projects/placeholder-after.svg", alt: "Placeholder after state" },
      caption: "Placeholder caption describing the change.",
    },
    {
      type: "text",
      heading: "Process",
      body: "Placeholder process narrative.",
    },
  ],
};
