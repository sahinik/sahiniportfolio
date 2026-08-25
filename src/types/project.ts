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
  | { type: "video"; src: string; poster?: string; caption?: string }
  /** A row of short bullet points — for scannable lists like "my contributions". */
  | { type: "bullets"; items: string[] }
  /** A grid of small principle/pillar cards: short title + one-line description. */
  | { type: "principles"; items: { title: string; body: string }[] }
  /** Two-column "kept" vs "cut" (or similar) comparison list. */
  | {
      type: "compareList";
      keptLabel: string;
      cutLabel: string;
      kept: string[];
      cut: { title: string; reason: string }[];
    }
  /** A row of small tech/tool badges. */
  | { type: "techStack"; items: string[] }
  /** Ordered horizontal/vertical process steps. */
  | { type: "timeline"; steps: { label: string; detail?: string }[] }
  /** A labeled stand-in for real imagery that doesn't exist yet — rendered
   *  as a styled placeholder block, never as a fabricated screenshot. */
  | { type: "placeholder"; label: string; aspect?: "video" | "square" | "wide" }
  /** Role/timeline/team/skills meta strip, matching the case-study reference layout. */
  | {
      type: "metaGrid";
      role: string;
      timeline: string;
      team?: string[];
      skills?: string[];
    };

export interface ProjectMeta {
  role: string;
  timeline: string;
  team?: string;
  tools?: string[];
}

/** One entry in a rich, sidebar-navigable case study (see CaseStudyLayout). */
export interface CaseStudySection {
  /** Anchor id — must be unique within the case study. */
  id: string;
  /** Short label shown in the sticky sidebar nav. */
  navLabel: string;
  /** Small label above the heading, e.g. "TLDR;", "THE PROBLEM". */
  eyebrow?: string;
  heading?: string;
  /** Renders this section's heading/eyebrow inside a highlighted card. */
  highlighted?: boolean;
  blocks: ProjectSection[];
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
  /** Short bullet list of skills/methods, shown in the case-study meta strip. */
  skills?: string[];
  context?: string;
  problem?: string;
  outcome?: string;
  sections: ProjectSection[];
  /**
   * A rich, sidebar-navigable case study (title page pattern: sticky left
   * nav + scannable sections). When present, the case-study route renders
   * this instead of the generic `sections` layout above.
   */
  caseStudySections?: CaseStudySection[];
  /** Placeholder flag — true until real content replaces sample copy/imagery. */
  isPlaceholder?: boolean;
}
