import type { Project, CaseStudySection } from "@/types/project";

const caseStudySections: CaseStudySection[] = [
  {
    id: "tldr",
    navLabel: "TLDR;",
    eyebrow: "TLDR;",
    heading: "Overview",
    blocks: [
      {
        type: "text",
        body: "My capstone team and I partnered with Team Chemistry Design to help collegiate sports teams turn intangible team chemistry into something coaches and players could actually see, measure, and build together. Over capstone we researched, designed, and shipped Huddl: a live app for teams to reflect, check in, and recognize each other, with a real-time pulse for coaches.",
      },
      {
        type: "metaGrid",
        role: "Product Designer",
        timeline: "Jan - June '26",
        skills: ["User Research", "Interaction Design", "Co-design", "Prototyping", "Product Strategy"],
      },
    ],
  },
  {
    id: "challenge",
    navLabel: "Challenge",
    eyebrow: "THE CHALLENGE",
    heading: "Team chemistry gets treated like magic — something you can feel but not materialize.",
    highlighted: true,
    blocks: [
      {
        type: "text",
        body: "Our sponsor works with college teams to build chemistry through workshops and consulting. However, chemistry is an abstract concept that is hard to track and easy to deprioritize once the season gets busy. Naturally, we questioned if we could help coaches and players turn it into something tangible, measurable, and scaleable",
      },
    ],
  },
  {
    id: "solution",
    navLabel: "Solution",
    eyebrow: "THE SOLUTION",
    heading: "Huddl provides a shared language for team chemistry",
    blocks: [
      {
        type: "text",
        body: "Huddl gives players a structured way to reflect on team dynamics and recognize teammates, and gives coaches a real time pulse on team health. Coaches receive quantitative trends plus direct player feedback. It's sports agnostic and flexible enough for a rowing team and a football team to use it in their own way.",
      },
      {
        type: "bullets",
        items: [
          "Vibe Check: lightweight pulse surveys, with quantitative trend reports for coaches",
          "Huddl: a guided retro for players to reflect on team dynamics",
          "Plays: a player-only social feed to share game footage and team moments",
          "Comment Box: a private channel to raise concerns or offer suggestions, with optional anonymity",
        ],
      },
      { type: "placeholder", label: "Huddl app — core flows", aspect: "wide" },
    ],
  },
  {
    id: "impact",
    navLabel: "Impact",
    eyebrow: "IMPACT",
    heading: "Huddl is a live product, tested by real sports teams",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Lines of code", value: "50,000+" },
          { label: "Lines of SQL", value: "11,000+" },
          { label: "User interviews", value: "15" },
          { label: "Co-design sessions", value: "6" },
        ],
      },
    ],
  },
  {
    id: "role",
    navLabel: "My Role",
    eyebrow: "MY ROLE",
    heading: "...as a product designer and accessibility lead",
    blocks: [
      {
        type: "bullets",
        items: [
          "Conducted interviews with coaches, players, and sports analysts",
          "Ran co-design sessions with athletes across 4 sports",
          "Designed core flows — Vibe Check, Huddl, Comment Box",
          "Helped build the token-based design system",
          "Wrote product requirements and prioritized MVP scope",
        ],
      },
    ],
  },
  {
    id: "research",
    navLabel: "Research",
    eyebrow: "RESEARCH",
    heading: "What actually makes or breaks team chemistry",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Interviews", value: "15" },
          { label: "Field studies", value: "3" },
          { label: "Papers reviewed", value: "17+" }
        ],
      },
      {
        type: "text",
        body: "We started broad, with the Intangibles book, organizational psychology academic papers, and coaching forums. Then we went deeper with 15 interviews across coaches, players, statisticians, and an athletic trainer, plus 3 field studies where we observed UW Softball, Soccer, and Football practices. Affinity mapping across all of it surfaced the themes that shaped Huddl.",
      },
      { type: "placeholder", label: "Affinity mapping & field study photos", aspect: "wide" },
    ],
  },
  {
    id: "design-system",
    navLabel: "Design System",
    eyebrow: "DESIGN SYSTEM",
    heading: "Built to move fast without breaking consistency",
    blocks: [
      {
        type: "text",
        body: "We built a token-based system which included primitives, semantic and component tokens. I conducted accessibility checks and tested across light and dark mode before building out the rest of the components. The system was documented in markdown so that it could be directly usable in AI engineering workflows later on.",
      },
      { type: "placeholder", label: "Design tokens & component library", aspect: "wide" },
    ],
  },
  {
    id: "lofi",
    navLabel: "Lo-fi & Mid-fi",
    eyebrow: "EARLY DESIGNS",
    heading: "Staying nimble before committing to a direction",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Sketches", value: "126" },
          { label: "User flow iterations", value: "14" },
          { label: "Wireframes", value: "300+" },
        ],
      },
      {
        type: "text",
        body: "We stayed in sketching longer than most teams because it kept us from getting attached to any one idea too early. From there we mapped 14 user flow iterations and 2 information architectures (coach and player) before building our first clickable prototype.",
      },
      { type: "placeholder", label: "Sketches, user flows & information architecture", aspect: "wide" },
    ],
  },
  {
    id: "codesign",
    navLabel: "Codesign",
    eyebrow: "CODESIGN",
    heading: "Letting real players decide what made the cut",
    blocks: [
      {
        type: "text",
        body: "We ran 6 co-design sessions with athletes across basketball, rowing, soccer, and softball. The Plays feature was a direct result of these sessions. Players wanted a way to share game footage and team moments that wasn't a chaotic group text, so we split it into a Fun feed and a Game Footage feed based on their feedback.",
      },
      {
        type: "quote",
        text: "Okay, I'm an Enforcer, but what do I do about that?",
        attribution: "Co-design participant, on the archetype quiz",
      },
      {
        type: "compareList",
        keptLabel: "Made the cut",
        cutLabel: "Cut from MVP",
        kept: ["Plays (fun feed + game footage feed)", "Team goals (shared, not individual)"],
        cut: [
          { title: "Buddy system", reason: "Mixed feedback; players didn't find it especially useful in practice" },
          { title: "Individual goals", reason: "Downstream of the buddy system; team goals were more unifying" },
          { title: "Archetype quiz", reason: "Not actionable enough; players didn't know what to do with the result" },
        ],
      },
    ],
  },
  {
    id: "hifi",
    navLabel: "Hi-fi & Rationale",
    eyebrow: "HI-FI DESIGNS & RATIONALE",
    heading: "Six design principles, six sets of tradeoffs",
    blocks: [
      {
        type: "principles",
        items: [
          { title: "Trust above all else", body: "Players can choose to be anonymous so they can be more honest in their responses — Vibe Check and the Comment Box." },
          { title: "Completed over comprehensive", body: "Vibe Check is built to finish on the walk back to the locker room, which means quick interactions and simple navigation." },
          { title: "A door, not a destination", body: "The app is meant to spark conversations, not replace them." },
          { title: "Signals, not noise", body: "A short, deliberate question set so busy coaches can spot a real shift, not scroll a dashboard." },
          { title: "Actionable for coaches", body: "Bookmarking and starring surface exactly what's worth raising at the next practice." },
          { title: "Assumed, not argued", body: "No pitch copy explaining why chemistry matters. We assume that coaches and players already believe it." },
        ],
      },
      { type: "placeholder", label: "Hi-fi screens — Vibe Check, Huddl, Plays, Comment Box", aspect: "wide" },
    ],
  },
  {
    id: "development",
    navLabel: "Development",
    eyebrow: "DEVELOPMENT",
    heading: "From Figma to a real, installable app",
    blocks: [
      {
        type: "text",
        body: "We built Huddl as a Progressive Web App rather than native — our sponsor needed it in front of real teams fast, and a PWA meant one codebase, no app-store review cycle, and instant updates. Designs were handed off through Figma's MCP server to pull tokens, structure, and copy directly into code; every ambiguity — missing states, edge cases, data model questions — got flagged back to the team instead of quietly assumed.",
      },
      {
        type: "techStack",
        items: ["Next.js (PWA)", "Vercel", "Supabase", "Cloudflare Stream", "Serwist"],
      },
    ],
  },
  {
    id: "reflection",
    navLabel: "Reflection",
    eyebrow: "REFLECTION",
    heading: "What I'd carry forward",
    blocks: [
      {
        type: "text",
        heading: "On AI prototyping",
        body: "It was genuinely fast — we went from “what if we added X” to a clickable prototype in an afternoon. But partway through, we noticed it was starting to bake in assumptions and quietly genericize our decisions, so we pulled back to more traditional prototyping for anything that mattered. Next time, I'd want the team to align upfront on exactly what role AI should play, instead of figuring it out mid-process.",
      },
      {
        type: "text",
        heading: "On content moderation",
        body: "If I did this again, I'd push harder on content moderation earlier. Plays is user-generated, and we only scoped moderation enough for a pilot — player reports reviewed by a coach-assigned moderator. Scaling it responsibly is unfinished work I'd want to tackle before a wider rollout.",
      },
    ],
  },
];

export const teamChemistry: Project = {
  slug: "team-chemistry",
  title: "Building a tool to monitor and evaluate team chemistry",
  summary:
    "Huddl: a live app that helps collegiate coaches and players turn team chemistry into something they can see, measure, and build together.",
  category: "0 → 1",
  disciplines: ["Product Design", "UX Research"],
  year: "2026",
  featured: true,
  size: "large",
  order: 1,
  coverImage: { src: "/images/projects/team-chemistry.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/team-chemistry.jpg", alt: "" },
  meta: {
    role: "Product Designer",
    timeline: "UW HCDE Capstone · 2025–2026",
    team: "4-person student team",
  },
  skills: ["User Research", "Interaction Design", "Co-design", "Prototyping"],
  sections: [],
  caseStudySections,
};
