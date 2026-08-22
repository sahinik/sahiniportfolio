import type { Project } from "@/types/project";

/** Placeholder project — replace with a real case study. */
export const ledger: Project = {
  slug: "ledger",
  title: "Ledger",
  summary: "Simplifying tax compliance for small studio businesses.",
  category: "Web App · B2B",
  disciplines: ["UX Research", "Service Design", "Product Design"],
  year: "2023",
  featured: false,
  order: 3,
  coverImage: { src: "/images/projects/placeholder-cover.svg", alt: "Placeholder cover image for the Ledger project" },
  thumbnailImage: { src: "/images/projects/placeholder-thumb.svg", alt: "Placeholder thumbnail for the Ledger project" },
  isPlaceholder: true,
  meta: {
    role: "Product Designer",
    timeline: "8 months · 2023",
    team: "3 designers, 6 engineers, 2 PMs",
  },
  context: "Placeholder context paragraph.",
  problem: "Placeholder problem statement.",
  outcome: "Placeholder outcome.",
  sections: [
    {
      type: "text",
      heading: "Overview",
      body: "Placeholder body copy for the overview section.",
    },
  ],
};
