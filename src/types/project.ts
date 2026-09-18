export type ProjectDiscipline =
  | "Product Design"
  | "UX Research"
  | "Interaction Design"
  | "Service Design"
  | "Visual Design"
  | "Prototyping";

export type ProjectSection =
  | { type: "text"; heading?: string; body: string; fullWidth?: boolean }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
      fullWidth?: boolean;
      /** e.g. "274/289" — defaults to 16/9 (video) when omitted. */
      aspectRatio?: string;
      /** "accent-italic" matches the small italic blue caption style used
       *  next to the "My Role" portrait; omit for the default caption. */
      captionVariant?: "default" | "accent-italic";
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
  | {
      /** Richer stat card with a decorative icon, divider, and a line of
       *  context — used for the Research section's methodology stats. */
      type: "statCards";
      items: {
        value: string;
        label: string;
        description: string;
        icon: "newspaper" | "users" | "run";
      }[];
    }
  | { type: "video"; src: string; poster?: string; caption?: string }
  /** A row of short bullet points — for scannable lists like "my contributions".
   *  Wraps to 2 columns at sm: by default; pass `columns: 1` to keep it a
   *  single column at every width. */
  | { type: "bullets"; items: string[]; columns?: 1 | 2 }
  /** A grid of small principle/pillar cards: short title + one-line description.
   *  Uses an auto-fit grid so it also reads correctly at narrower widths when
   *  nested inside a `row` item, not just at full section width. */
  | { type: "principles"; items: { title: string; body: string }[] }
  /** Two-column "kept" vs "cut" (or similar) comparison list. */
  | {
      type: "compareList";
      keptLabel: string;
      cutLabel: string;
      kept: { title: string; reason: string }[];
      cut: { title: string; reason: string }[];
    }
  /** A row of small tech/tool badges. */
  | { type: "techStack"; items: string[] }
  /** Ordered horizontal/vertical process steps. */
  | { type: "timeline"; steps: { label: string; detail?: string }[] }
  /** A labeled stand-in for real imagery that doesn't exist yet — rendered
   *  as a styled placeholder block, never as a fabricated screenshot.
   *  "banner" is a short full-width strip (the Design System section's). */
  | { type: "placeholder"; label: string; aspect?: "video" | "square" | "wide" | "banner" }
  /** Role/timeline/team/skills meta strip, matching the case-study reference layout. */
  | {
      type: "metaGrid";
      role: string;
      timeline: string;
      team?: string[];
      skills?: string[];
    }
  /**
   * Lays out 2+ blocks side by side (stacking on mobile) — e.g. a principles
   * list next to a placeholder, or bullets next to a portrait. Each item's
   * `width` (px) makes it a fixed-width column; omitting it makes that
   * column flex to fill the remaining space.
   */
  | { type: "row"; items: { width?: number; block: ProjectSection }[] }
  /**
   * Stacks 2+ blocks vertically with a tight, fixed gap — e.g. an image with
   * its own caption/text directly beneath it, sized to match. Meant to nest
   * inside a `row` column so the child blocks inherit that column's width.
   */
  | { type: "stack"; items: ProjectSection[] };

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
  /**
   * Free-form tag pills shown on the V2 project card (e.g. "0 → 1",
   * "AI/ML") — looser than `disciplines`, which stays a controlled
   * vocabulary for the case-study meta strip. Falls back to `category`
   * alone when absent.
   */
  categories?: string[];
  disciplines: ProjectDiscipline[];
  year: string;
  featured: boolean;
  /** "large" = main 2x2 project grid, "small" = "other side quests" row. */
  size: "large" | "small";
  /** Lower sorts first. */
  order: number;
  coverImage: { src: string; alt: string };
  thumbnailImage: { src: string; alt: string };
  /** Real mockup shown on the large homepage card (Figma's "project image" component) and reused as the case-study TLDR hero. Falls back to a glass-panel placeholder box on the card when absent. width/height are the source file's real pixel dimensions, so the hero can render at its native aspect ratio with no cropping. */
  cardImage?: { src: string; alt: string; width: number; height: number };
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
