export type ProjectDiscipline =
  | "Product Design"
  | "UX Research"
  | "Interaction Design"
  | "Service Design"
  | "Visual Design"
  | "Prototyping";

export type ProjectSection =
  | { type: "text"; heading?: string; body: string }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      fullWidth?: boolean;
    }
  | {
      type: "imageGrid";
      images: { src: string; alt: string; caption?: string }[];
    }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "beforeAfter";
      before: { src: string; alt: string };
      after: { src: string; alt: string };
      caption?: string;
    }
  | { type: "stats"; items: { label: string; value: string }[] }
  | { type: "video"; src: string; poster?: string; caption?: string };

export interface ProjectMeta {
  role: string;
  timeline: string;
  team?: string;
  tools?: string[];
}

export interface Project {
  slug: string;
  title: string;
  /** One-line positioning shown on cards and in the hero. */
  summary: string;
  /** Short label, e.g. "App · B2B SaaS" */
  category: string;
  disciplines: ProjectDiscipline[];
  year: string;
  featured: boolean;
  /** "large" = main 2x2 project grid, "small" = "other side quests" row. */
  size: "large" | "small";
  /** Lower sorts first. */
  order: number;
  coverImage: { src: string; alt: string };
  thumbnailImage: { src: string; alt: string };
  meta: ProjectMeta;
  context?: string;
  problem?: string;
  outcome?: string;
  sections: ProjectSection[];
  /** Placeholder flag — true until real content replaces sample copy/imagery. */
  isPlaceholder?: boolean;
}
