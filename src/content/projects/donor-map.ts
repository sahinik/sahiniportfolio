import type { Project } from "@/types/project";

/**
 * Real project title/category/cover image from Figma. Case-study body
 * content isn't designed yet — the sections below are placeholder until
 * the real write-up is ready.
 */
export const donorMap: Project = {
  slug: "donor-transparency-impact-map",
  title: "Interactive impact map for donor transparency",
  summary: "Interactive impact map for donor transparency.",
  category: "UX/UI design",
  disciplines: ["Product Design", "Interaction Design"],
  year: "2026",
  featured: true,
  size: "large",
  order: 3,
  coverImage: { src: "/images/projects/donor-map.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/donor-map.jpg", alt: "" },
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
