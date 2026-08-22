import type { Project } from "@/types/project";

/** Placeholder project — replace with a real case study. */
export const signal: Project = {
  slug: "signal",
  title: "Signal",
  summary: "Redesigning how field technicians triage hardware faults in real time.",
  category: "Field Ops Platform · B2B",
  disciplines: ["Product Design", "UX Research", "Interaction Design"],
  year: "2025",
  featured: true,
  order: 1,
  coverImage: { src: "/images/projects/placeholder-cover.svg", alt: "Placeholder cover image for the Signal project" },
  thumbnailImage: { src: "/images/projects/placeholder-thumb.svg", alt: "Placeholder thumbnail for the Signal project" },
  isPlaceholder: true,
  meta: {
    role: "Lead Product Designer",
    timeline: "6 months · 2025",
    team: "2 designers, 4 engineers, 1 PM",
    tools: ["Figma", "Arduino", "Protopie"],
  },
  context:
    "Placeholder context paragraph. Describe the company, product, and constraints you were designing within.",
  problem:
    "Placeholder problem statement. What was broken, for whom, and how did you know?",
  outcome:
    "Placeholder outcome. Replace with real, specific metrics — time saved, adoption, error reduction.",
  sections: [
    {
      type: "text",
      heading: "Context",
      body: "Placeholder body copy. This section template supports text, full-width imagery, image grids, before/after comparisons, quotes, stats, and video — mix and match per project.",
    },
    {
      type: "image",
      src: "/images/projects/placeholder-wide.svg",
      alt: "Placeholder full-width interface screenshot",
      caption: "Placeholder caption describing what's shown.",
      fullWidth: true,
    },
    {
      type: "stats",
      items: [
        { label: "Placeholder metric A", value: "42%" },
        { label: "Placeholder metric B", value: "3.2x" },
        { label: "Placeholder metric C", value: "18 days" },
      ],
    },
    {
      type: "quote",
      text: "Replace with a real quote from a user, stakeholder, or teammate.",
      attribution: "Placeholder Attribution, Role",
    },
    {
      type: "imageGrid",
      images: [
        { src: "/images/projects/placeholder-grid-1.svg", alt: "Placeholder process artifact 1" },
        { src: "/images/projects/placeholder-grid-2.svg", alt: "Placeholder process artifact 2" },
      ],
    },
    {
      type: "text",
      heading: "Reflection",
      body: "Placeholder reflection. What did you learn, and what would you do differently?",
    },
  ],
};
