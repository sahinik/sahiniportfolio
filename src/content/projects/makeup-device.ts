import type { Project } from "@/types/project";

/** "Other side quests" entry — real title from Figma, no case study yet. */
export const makeupDevice: Project = {
  slug: "accessible-makeup-application-device",
  title: "Accessible makeup application device for individuals with C5/C6 spinal cord injuries",
  summary: "Accessible makeup application device for individuals with C5/C6 spinal cord injuries.",
  category: "Side quest",
  categories: ["Quant + Qual Research", "CAD Engineering"],
  disciplines: ["Product Design"],
  year: "2026",
  featured: false,
  size: "small",
  order: 5,
  coverImage: { src: "/images/home/makeup-thumbnail.png", alt: "" },
  thumbnailImage: { src: "/images/home/makeup-thumbnail.png", alt: "" },
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
