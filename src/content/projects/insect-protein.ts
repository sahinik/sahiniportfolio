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
        role: "UX Researcher & Designer",
        timeline: "10 weeks",
        skills: ["User Research", "Product Design", "Service Design"],
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
        type: "text",
        body: "The global population is projected to reach 9.7 billion by 2050. Traditional livestock farming can't meet that demand without serious environmental cost, so the food system needs alternatives that work for both people and the planet.",
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
        type: "stats",
        items: [
          { label: "Weeks", value: "10" },
          { label: "Participants", value: "8" },
        ],
      },
      {
        type: "bullets",
        items: [
          "Secondary research and competitive analysis",
          "An initial survey on food preferences and prior exposure to alternative foods",
          "Four co-design sessions, structured to give participants real agency in shaping equitable outcomes",
          "Four in-depth interviews to capture detailed pain points",
          "User testing with iterative design refinement",
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
        type: "bullets",
        items: [
          "Aversion to insect taste, texture, and visuals",
          "Concern about the sourcing and safety of insect ingredients",
          "Limited accessibility and availability of insect-based food",
        ],
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
        type: "bullets",
        items: [
          "Make insect-based products feel familiar and intriguing, not clinical or strange",
          "Establish trust through clear, transparent communication about sourcing and safety",
          "Normalize adoption by framing it around sustainability and collective impact",
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
      { type: "placeholder", label: "Ideation clusters and early concept sketches", aspect: "wide" },
    ],
  },
  {
    id: "solution",
    navLabel: "Solution",
    eyebrow: "THE SOLUTION",
    heading: "Three connected pieces: an event, a product, and an app",
    blocks: [
      {
        type: "principles",
        items: [
          {
            title: "Bug Cube Events",
            body: "In-person tasting events built around interactive games, letting attendees discover their own insect-based food preferences in a low-pressure, social setting. The format leans on exposure therapy principles, using repeated, gamified exposure to reduce disgust while keeping choice in the attendee's hands.",
          },
          {
            title: "Bug Cube Products",
            body: "Packaging designed to lead with nutrition and sustainability, with a QR code linking to transparent sourcing and safety information, including FDA approval. A familiarity scale compares the taste and texture to foods people already know, like nuts or protein bars, to bridge the gap between the unfamiliar and the familiar.",
          },
          {
            title: "Bug Cube Collective app",
            body: "A community platform for product discovery, monthly challenges, and social validation, with e-commerce and personalized recommendations built in. Badges, leaderboards, and rewards drive engagement while reducing the stigma around trying something new.",
          },
        ],
      },
      { type: "placeholder", label: "Bug Cube event, packaging, and app screens", aspect: "wide" },
    ],
  },
  {
    id: "impact",
    navLabel: "Impact",
    eyebrow: "IMPACT",
    heading: "More participants left open to trying it",
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
        type: "text",
        heading: "Exposure works better than education",
        body: "Reducing psychological barriers through exposure and social validation turned out to be more effective than a purely educational approach. Participants responded best to experiences that felt low-pressure, gamified, and community-driven, not to being told why insects are good for them.",
      },
      {
        type: "text",
        heading: "Transparency builds trust",
        body: "Transparency in packaging and sourcing information made people meaningfully more willing to try and purchase insect-based products. Trust turned out to be as much a design problem as taste or texture was.",
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
  disciplines: ["UX Research", "Product Design", "Service Design"],
  year: "2026",
  featured: true,
  size: "large",
  order: 4,
  coverImage: { src: "/images/projects/insect-protein.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/insect-protein.jpg", alt: "" },
  meta: {
    role: "UX Researcher & Designer",
    timeline: "10 weeks",
  },
  skills: ["User Research", "Product Design", "Service Design"],
  sections: [],
  caseStudySections,
};
