import type { Project } from "@/types/project";

/**
 * Real project title/category/cover image from Figma. Case-study body
 * content isn't designed yet — the sections below are placeholder until
 * the real write-up is ready.
 */
export const vertexAi: Project = {
  slug: "vertex-ai-usability-evaluation",
  title: "Usability evaluation of Google Vertex AI platform",
  summary: "Usability evaluation of Google Vertex AI platform.",
  category: "UX Research",
  disciplines: ["UX Research"],
  year: "2026",
  featured: true,
  size: "large",
  order: 2,
  coverImage: { src: "/images/projects/vertex-ai.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/vertex-ai.jpg", alt: "" },
  isPlaceholder: true,
  meta: {
    role: "UX Researcher",
    timeline: "TBD",
  },
  sections: [
    {
      type: "text",
      body: "Case study write-up coming soon.",
    },
  ],
};
