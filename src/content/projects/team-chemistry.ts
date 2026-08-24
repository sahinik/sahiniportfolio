import type { Project } from "@/types/project";

/**
 * Real project title/category/cover image from Figma. Case-study body
 * content isn't designed yet — the sections below are placeholder until
 * the real write-up is ready.
 */
export const teamChemistry: Project = {
  slug: "team-chemistry",
  title: "Building a tool to monitor and evaluate team chemistry",
  summary: "Building a tool to monitor and evaluate team chemistry.",
  category: "0 → 1",
  disciplines: ["Product Design", "UX Research"],
  year: "2026",
  featured: true,
  size: "large",
  order: 1,
  coverImage: { src: "/images/projects/team-chemistry.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/team-chemistry.jpg", alt: "" },
  isPlaceholder: true,
  meta: {
    role: "Product Designer",
    timeline: "TBD",
  },
  sections: [
    {
      type: "text",
      body: "Case study write-up coming soon.",
    },
  ],
};
