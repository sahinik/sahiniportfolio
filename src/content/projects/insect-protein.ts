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
        body: "Over 10 weeks, I worked as a UX researcher and designer on a service design project exploring how to shift consumer attitudes toward insect-based protein. Through co-design sessions, interviews, and user testing, we designed a system of three connected touchpoints: an in-person tasting event, a packaged product, and a community app, all aimed at making an unfamiliar food feel normal.",
      },
      {
        type: "metaGrid",
        role: "Product Designer & Researcher",
        timeline: "September - December '24",
        team: ["4 designers"],
        skills: ["User Research", "Concept Design", "Service Design"],
      },
    ],
  },
  {
    id: "impact",
    navLabel: "Impact",
    eyebrow: "IMPACT",
    heading: "More people were left open to trying alternative protein",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "More inclined to try insect-based food", value: "38%" },
          { label: "Open to trying alternative protein", value: "50%" },
        ],
      },
    ],
  },
  {
    id: "context",
    navLabel: "Context",
    eyebrow: "CONTEXT",
    heading: "The way we produce food is reaching a breaking point",
    blocks: [
      {
        type: "row",
        items: [
          {
            width: 320,
            block: {
              type: "image",
              src: "/images/projects/insect-protein/context-cow.png",
              alt: "Livestock being fed on a dairy farm",
              aspectRatio: "320/215",
            },
          },
          {
            block: {
              type: "text",
              body: "The global population is projected to reach 9.7 billion by 2050. Traditional livestock farming can't meet that demand without serious environmental cost, so the food system needs alternatives that work for both people and the planet.",
            },
          },
        ],
      },
    ],
  },
  {
    id: "challenge",
    navLabel: "Challenge",
    eyebrow: "THE CHALLENGE",
    heading: "Insects are nutritious, but people won't eat them",
    highlighted: true,
    blocks: [
      {
        type: "text",
        body: "Insects are an efficient, high-quality source of protein and essential nutrients. Crickets require only 1.7 kg of feed to produce 1 kg of biomass, compared to 10 kg for beef. But consumer perception of insects as food stays overwhelmingly negative, shaped by personal disgust and years of media portrayal. The barrier to adoption isn't nutritional. It's psychological.",
      },
      {
        type: "stats",
        items: [
          { label: "Feed needed per kg of biomass, crickets", value: "1.7 kg" },
          { label: "Feed needed per kg of biomass, beef", value: "10 kg" },
        ],
      },
    ],
  },
  {
    id: "approach",
    navLabel: "Approach",
    eyebrow: "THE APPROACH",
    heading: "What did we do?",
    blocks: [
      {
        type: "statIcons",
        items: [
          { icon: "chartBar", value: "10", label: "Weeks" },
          { icon: "users", value: "8", label: "Participants" },
        ],
      },
      {
        type: "methodSteps",
        items: [
          {
            icon: "search",
            label: "Secondary research",
            body: "Literature reviews and competitive analysis",
          },
          {
            icon: "checklist",
            label: "Initial survey",
            body: "Assess food preferences and prior exposure to alternative foods",
          },
          {
            icon: "group",
            label: "Co-design sessions",
            body: "4 sessions giving participants real agency in shaping equitable outcomes",
          },
          {
            icon: "chat",
            label: "In-depth interviews",
            body: "4 interviews capturing detailed pain points",
          },
          {
            icon: "cycle",
            label: "User testing",
            body: "Iterative design refinement",
          },
        ],
      },
    ],
  },
  {
    id: "insights",
    navLabel: "Key Insights",
    eyebrow: "KEY INSIGHTS",
    heading: "Three recurring pain points",
    blocks: [
      {
        type: "principles",
        numbered: "plain",
        items: [
          { title: "Aversion to insect taste, texture, and visuals", body: "" },
          { title: "Concern about the sourcing and safety of insect ingredients", body: "" },
          { title: "Limited accessibility and availability of insect-based food", body: "" },
        ],
      },
      {
        type: "image",
        src: "/images/projects/insect-protein/insights-codesign.png",
        alt: "Co-design session boards covered in sticky notes capturing participant reactions",
        caption: "participant comments from our co-design exercises",
        aspectRatio: "1760/723",
        fullWidth: true,
      },
    ],
  },
  {
    id: "design-question",
    navLabel: "Design Question",
    eyebrow: "DESIGN QUESTION",
    blocks: [
      {
        type: "quote",
        text: "How might we normalize insect-based foods to overcome initial hesitation, encourage broader societal adoption, and promote their adoption as a sustainable alternative in the face of the climate crisis?",
      },
    ],
  },
  {
    id: "design-goals",
    navLabel: "Design Goals",
    eyebrow: "DESIGN GOALS",
    blocks: [
      {
        type: "principles",
        items: [
          {
            icon: "smiley",
            title: "Make insect-based products feel familiar and intriguing, not clinical or strange",
            body: "",
          },
          {
            icon: "handshake",
            title: "Establish trust through clear, transparent communication about sourcing and safety",
            body: "",
          },
          {
            icon: "plant",
            title: "Normalize adoption by framing it around sustainability and collective impact",
            body: "",
          },
        ],
      },
    ],
  },
  {
    id: "ideation",
    navLabel: "Ideation",
    eyebrow: "IDEATION",
    heading: "Over 100 ideas, narrowed to three directions",
    blocks: [
      {
        type: "text",
        body: "We generated over 100 original ideas as a team, then evaluated each one through group discussion focused on strengths, weaknesses, feasibility, and originality. Similar ideas got grouped together to surface patterns, and from those clusters we prioritized three directions and re-sketched them with more detail.",
      },
      {
        type: "image",
        src: "/images/projects/insect-protein/ideation.png",
        alt: "Ideation sketches: insect card game, subscription kit, and pop reference packaging concepts",
        aspectRatio: "1760/754",
        fullWidth: true,
      },
    ],
  },
  {
    id: "solution",
    navLabel: "Solution",
    eyebrow: "THE SOLUTION",
    heading: "Three connected pieces: an event, a product, and an app",
    blocks: [
      {
        type: "tabbedPrinciples",
        items: [
          {
            title: "Bug Cube Events",
            body: "In-person tasting events built around interactive games, letting attendees discover their own insect-based food preferences in a low-pressure, social setting. The format leans on exposure therapy principles, using repeated, gamified exposure to reduce disgust while keeping choice in the attendee's hands.",
            video: {
              src: "/images/projects/insect-protein/bug-cube-tasting-event.mp4",
            },
          },
          {
            title: "Bug Cube Products",
            body: "Packaging designed to lead with nutrition and sustainability, with a QR code linking to transparent sourcing and safety information, including FDA approval. A familiarity scale compares the taste and texture to foods people already know, like nuts or protein bars, to bridge the gap between the unfamiliar and the familiar.",
            image: {
              src: "/images/projects/insect-protein/solution-products.png",
              alt: "Bug Cube packaging: cricket carbonara pasta boxes with sourcing, taste-profile, and environmental-impact callouts.",
              width: 1536,
              height: 1248,
            },
          },
          {
            title: "Bug Cube Collective app",
            body: "A community platform for product discovery, monthly challenges, and social validation, with e-commerce and personalized recommendations built in. Badges, leaderboards, and rewards drive engagement while reducing the stigma around trying something new.",
            image: {
              src: "/images/projects/insect-protein/solution-app.png",
              alt: "Bug Cube Collective app screens: home, store, meal box details, and achievements.",
              width: 1536,
              height: 1903,
            },
          },
        ],
      },
    ],
  },
  {
    id: "role",
    navLabel: "My Role",
    eyebrow: "MY ROLE",
    heading: "...as a UX researcher and designer, 0 → 1",
    blocks: [
      {
        type: "bullets",
        items: [
          "Facilitated co-design sessions and in-depth interviews with participants",
          "Synthesized qualitative research into the three core pain points that shaped the design direction",
          "Designed the Bug Cube product packaging, event concept, and app experience",
          "Contributed to ideation, prioritizing directions based on feasibility and impact",
        ],
      },
    ],
  },
  {
    id: "reflection",
    navLabel: "Reflection",
    eyebrow: "REFLECTION",
    heading: "Key learnings",
    blocks: [
      {
        type: "row",
        items: [
          {
            width: 150,
            block: {
              type: "image",
              src: "/images/projects/insect-protein/reflection-1.png",
              alt: "",
              aspectRatio: "150/154",
            },
          },
          {
            block: {
              type: "text",
              heading: "Exposure works better than education",
              body: "Reducing psychological barriers through exposure and social validation turned out to be more effective than a purely educational approach. Participants responded best to experiences that felt low-pressure, gamified, and community-driven, not to being told why insects are good for them.",
            },
          },
        ],
      },
      {
        type: "row",
        items: [
          {
            width: 150,
            block: {
              type: "image",
              src: "/images/projects/insect-protein/reflection-2.png",
              alt: "",
              aspectRatio: "150/150",
            },
          },
          {
            block: {
              type: "text",
              heading: "Transparency builds trust",
              body: "Transparency in packaging and sourcing information made people meaningfully more willing to try and purchase insect-based products. Trust turned out to be as much a design problem as taste or texture was.",
            },
          },
        ],
      },
      {
        type: "text",
        heading: "If I did this again",
        body: "I'd push for recurring community tasting events instead of one-off touchpoints, build a forum into the app so people could share experiences and encourage each other, and add recipe and recommendation features to help people work insect protein into meals they were already cooking.",
      },
    ],
  },
];

export const insectProtein: Project = {
  slug: "shifting-attitudes-insect-protein",
  title: "Shifting attitudes towards insect protein",
  summary:
    "A 10-week research and design project tackling consumer hesitation toward insect protein through gamified tasting events, transparent packaging, and a community app built to make trying it feel normal.",
  category: "Product design",
  categories: ["Concept Design", "User Research"],
  disciplines: ["UX Research", "Product Design", "Service Design"],
  year: "2026",
  featured: true,
  size: "large",
  order: 4,
  coverImage: { src: "/images/projects/insect-protein.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/insect-protein.jpg", alt: "" },
  cardImage: { src: "/images/projects/insect-project-image.png", alt: "", width: 956, height: 644 },
  meta: {
    role: "UX Researcher & Designer",
    timeline: "10 weeks",
  },
  skills: ["User Research", "Product Design", "Service Design"],
  sections: [],
  caseStudySections,
};
