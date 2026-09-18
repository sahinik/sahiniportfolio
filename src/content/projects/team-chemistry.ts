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
        body: "My capstone team and I partnered with Team Chemistry Design to help collegiate sports teams turn intangible team chemistry into something coaches and players could actually see, measure, and build together. Over the capstone duration we researched, designed, and shipped Huddl: a live app for teams to reflect, check in, and recognize each other, with a real-time pulse for coaches.",
        fullWidth: true,
      },
      {
        type: "metaGrid",
        role: "Product Designer & Researcher",
        timeline: "January - June '26",
        team: ["Sahini Komandla (me!)", "Siddharth Hardikar", "Signe Slater", "Ralph Chang"],
        skills: ["User Research", "Product Design", "Prototyping"],
      },
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
          { label: "User interviews", value: "15" },
          { label: "Co-design sessions", value: "6" },
        ],
      },
    ],
  },
  {
    id: "challenge",
    navLabel: "Challenge",
    eyebrow: "THE CHALLENGE",
    heading: "There's currently no commercial way to measure and build chemistry within teams.",
    highlighted: true,
    blocks: [
      {
        type: "text",
        body: "Team Chemistry Design works with college teams to build chemistry through workshops and consulting. However, chemistry is an abstract concept that is hard to track and easy to deprioritize once the season gets busy. Therefore our sponsor questioned if we could help coaches and players turn it into something tangible, measurable, and scaleable.",
        fullWidth: true,
      },
    ],
  },
  {
    id: "role",
    navLabel: "My Role",
    eyebrow: "MY ROLE",
    heading: "...as a product designer and researcher",
    blocks: [
      {
        type: "row",
        items: [
          {
            block: {
              type: "bullets",
              columns: 1,
              items: [
                "Conducted interviews with coaches, players, and sports analysts",
                "Ran co-design sessions with athletes across 4 sports",
                "Designed core flows for Vibe Check, Huddl, and Comment Box",
                "Helped build the token-based design system in Figma",
                "Ran intermediate accessibility checks based on WCAG 2.2 guidelines",
              ],
            },
          },
          {
            width: 274,
            block: {
              type: "image",
              src: "/images/projects/team-chemistry/my-role-cat.png",
              alt: "A very expressive cat in front of a laptop",
              caption: "accurate representation of me",
              aspectRatio: "274/289",
              captionVariant: "accent-italic",
            },
          },
        ],
      },
    ],
  },
  {
    id: "research",
    navLabel: "Research",
    eyebrow: "RESEARCH",
    heading: "What actually makes or breaks team chemistry?",
    blocks: [
      {
        type: "statCards",
        items: [
          {
            value: "17+",
            label: "Papers reviewed",
            description: "To understand the basics of team chemistry across multiple contexts",
            icon: "newspaper",
          },
          {
            value: "15",
            label: "Interviews",
            description: "To understand specifically what team chemistry means to coaches and players",
            icon: "users",
          },
          {
            value: "3",
            label: "Field studies",
            description: "To observe how good team chemistry actually looks like in practice",
            icon: "run",
          },
        ],
      },
      {
        type: "text",
        body: "We started broad, with the Intangibles book, organizational psychology academic papers, and coaching forums. Then we went deeper with 15 interviews across coaches, players, statisticians, and an athletic trainer, plus 3 field studies where we observed UW Softball, Soccer, and Football practices. Affinity mapping across all of it surfaced the following 6 design principles that shaped Huddl.",
        fullWidth: true,
      },
      {
        type: "principles",
        items: [
          { title: "Trust above all else", body: "Players need to feel psychologically safe enough to share what they actually think and feel. Our design must protect and reinforce that trust" },
          { title: "Completed over comprehensive", body: "The app should promote quick interactions and simple navigation. Participation matters more than thoroughness." },
          { title: "A door, not a destination", body: "The app is meant to spark meaningful conversations, not replace them." },
          { title: "Signals, not noise", body: "We are not conducting a thorough analysis on team chemistry. Instead, we will capture overall trends and pivotal shifts." },
          { title: "Actionable for coaches", body: "The data which we collect should be streamlined and purposeful." },
          { title: "Assumed, not argued", body: "No pitch copy explaining why chemistry matters. We assume that coaches and players already believe it." },
        ],
      },
    ],
  },
  {
    id: "lofi",
    navLabel: "Early Designs",
    eyebrow: "EARLY DESIGNS",
    heading: "Exploring multiple ideas before committing to a direction",
    blocks: [
      {
        type: "text",
        body: "We stayed in sketching longer than most teams because it kept us from getting attached to any one idea too early. From there we mapped 14 user flow iterations and 2 information architectures (coach and player) before building our first clickable prototype.",
        fullWidth: true,
      },
      {
        type: "row",
        items: [
          {
            block: {
              type: "image",
              src: "/images/projects/team-chemistry/sketches-earlydesign.png",
              alt: "A page of hand-drawn sketches exploring early Huddl concepts",
              aspectRatio: "750/760",
            },
          },
          {
            block: {
              type: "image",
              src: "/images/projects/team-chemistry/coach-flow-earlydesign.png",
              alt: "The coach-side user flow diagram",
              aspectRatio: "970/760",
            },
          },
        ],
      },
      {
        type: "image",
        src: "/images/projects/team-chemistry/ia-earlydesign.png",
        alt: "Information architecture diagrams for both the coach and player experiences",
        aspectRatio: "1760/1092",
        fullWidth: true,
      },
      {
        type: "text",
        body: "We wanted to move fast, so we treated prototyping as an experiment in itself. Our ideas were drawn by hand or run through AI tools like Gizmo and Google Stitch. We feed them our product requirements and design principles to see what kind of UI and interaction patterns they'd suggest. The goal was to be as efficient as possible creating the lo-fi prototype, so that we would have something concrete to show our co-design participants and gather feedback.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/projects/team-chemistry/lo-fi-earlydesign.png",
        alt: "Lo-fi screens of the coach flow: check-in cadence, setup confirmation, dashboard, and huddl customization",
        aspectRatio: "1760/1635",
        fullWidth: true,
      },
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
        body: "We ran 6 co-design sessions with athletes from basketball, rowing, soccer, and softball. In each session, we opened by sharing our research-based definition of team chemistry, then asked the players: what does team chemistry actually mean to you, and where does it break down on your own team? From there, we walked through our proposed screens for each feature, asking participants to think aloud as they explored them and vote on their favorites. We ended the sessions by giving them the opportunity to suggest features we hadn't considered.",
        fullWidth: true,
      },
      {
        type: "image",
        src: "/images/projects/team-chemistry/codesign-workshop.png",
        alt: "A FigJam board from a codesign workshop session, showing sketches, feedback, and voting stickers",
        aspectRatio: "2436/1234",
        fullWidth: true,
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
        kept: [
          {
            title: "Plays (fun feed + game footage feed)",
            reason: "Players wanted a way to share game footage and team moments that wasn't a chaotic group text",
          },
          {
            title: "Team goals (shared, not individual)",
            reason: "Players felt like a north star goal would keep them more engaged",
          },
        ],
        cut: [
          { title: "Buddy system", reason: "Mixed feedback; players didn't find it especially useful in practice" },
          { title: "Individual goals", reason: "Downstream of the buddy system; team goals were more unifying" },
          { title: "Archetype quiz", reason: "Not actionable enough; players didn't know what to do with the result" },
        ],
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
        fullWidth: true,
      },
      {
        type: "row",
        items: [
          {
            width: 349,
            block: {
              type: "principles",
              items: [
                { title: "Vibe Check", body: "lightweight pulse surveys, with quantitative trend reports for coaches" },
                { title: "Huddl", body: "a guided retro for players to reflect on team dynamics" },
                { title: "Plays", body: "a player-only social feed to share game footage and team moments" },
                { title: "Comment Box", body: "a private channel to raise concerns or offer suggestions, with optional anonymity" },
              ],
            },
          },
          {
            block: { type: "placeholder", label: "Hi-fi screens — Vibe Check, Huddl, Plays, Comment Box", aspect: "wide" },
          },
        ],
      },
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
        body: "We built a token-based system which included primitives, semantic and component tokens. I conducted accessibility checks and tested across light and dark mode before building out the rest of the components. The system was documented in markdown so that it could be directly usable in AI engineering workflows. Huddl was later developed as a progressive web app (PWA), which allowed us to ship it fast and provide instant updates.",
        fullWidth: true,
      },
      { type: "placeholder", label: "Design tokens & component library", aspect: "banner" },
    ],
  },
  {
    id: "reflection",
    navLabel: "Reflection",
    eyebrow: "REFLECTION",
    heading: "What I've learned",
    blocks: [
      {
        type: "row",
        items: [
          {
            width: 320,
            block: {
              type: "image",
              src: "/images/projects/team-chemistry/reflection-kittens.png",
              alt: "Two kittens play-fighting outside at night",
              aspectRatio: "165/161",
            },
          },
          {
            block: {
              type: "image",
              src: "/images/projects/team-chemistry/reflection-team.jpg",
              alt: "The capstone team and sponsor smiling together at an event",
              aspectRatio: "3693/2770",
            },
          },
        ],
      },
      {
        type: "row",
        items: [
          {
            width: 410,
            block: {
              type: "text",
              heading: "Have a solid UI that meets user needs before introducing AI prototyping",
              body: "We went from “what if we added X” to a clickable prototype within a day. However, we noticed that AI was starting to bake in assumptions and generalize our decisions, so we resorted to traditional prototyping to ensure our designs accurately reflected the research we had done. Next time, I'd want the team to align upfront on exactly what role AI should play, instead of figuring it out mid-process.",
              fullWidth: true,
            },
          },
          {
            block: {
              type: "text",
              heading: "Team chemistry = more productivity!",
              body: "I truly enjoyed this process because my team and sponsor were very fun to work with. I believe we were able to achieve all of this in such a short time span because we had great team chemistry :))",
              fullWidth: true,
            },
          },
        ],
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
  categories: ["0 → 1", "Design System", "Product Design"],
  disciplines: ["Product Design", "UX Research"],
  year: "2026",
  featured: true,
  size: "large",
  order: 1,
  coverImage: { src: "/images/projects/team-chemistry.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/team-chemistry.jpg", alt: "" },
  cardImage: { src: "/images/projects/team-chem--project-image.png", alt: "", width: 1014, height: 672 },
  meta: {
    role: "Product Designer & Researcher",
    timeline: "January - June '26",
    team: "4-person student team",
  },
  skills: ["User Research", "Product Design", "Prototyping"],
  sections: [],
  caseStudySections,
};
