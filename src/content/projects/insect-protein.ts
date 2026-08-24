import type { Project } from "@/types/project";

/**
 * Real project title/category/cover image from Figma. Case-study body
 * content isn't designed yet — the sections below are placeholder until
 * the real write-up is ready.
 */
export const insectProtein: Project = {
  slug: "shifting-attitudes-insect-protein",
  title: "Shifting attitudes towards insect protein",
  summary: "Shifting attitudes towards insect protein.",
  category: "Product design",
  disciplines: ["Product Design"],
  year: "2026",
  featured: true,
  size: "large",
  order: 4,
  coverImage: { src: "/images/projects/insect-protein.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/insect-protein.jpg", alt: "" },
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
