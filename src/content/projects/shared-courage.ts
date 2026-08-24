import type { Project } from "@/types/project";

/** "Other side quests" entry — real title from Figma, no case study yet. */
export const sharedCourage: Project = {
  slug: "turning-wishes-into-shared-courage",
  title: "Turning wishes into shared courage",
  summary: "Turning wishes into shared courage.",
  category: "Side quest",
  disciplines: ["Product Design"],
  year: "2026",
  featured: false,
  size: "small",
  order: 6,
  coverImage: { src: "/images/projects/placeholder-cover.svg", alt: "" },
  thumbnailImage: { src: "/images/projects/placeholder-cover.svg", alt: "" },
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
