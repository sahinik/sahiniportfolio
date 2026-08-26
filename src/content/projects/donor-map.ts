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
        body: "Games for Love is a nonprofit gaming charity whose mission is to create sustainable futures for children through technology. As lead UX/UI designer, I partnered with Digital Aid Seattle to design an interactive map that shows donors exactly where their money goes, replacing a general fund donors couldn't see into with something they could actually track.",
      },
      {
        type: "metaGrid",
        role: "Lead UX/UI Designer",
        timeline: "12 months",
        team: ["Digital Aid Seattle developers", "QA", "Researcher"],
        skills: ["Visual Design", "Design Systems", "Responsive Design"],
      },
    ],
  },
  {
    id: "context",
    navLabel: "Context",
    eyebrow: "CONTEXT",
    heading: "Who is Games for Love?",
    blocks: [
      {
        type: "text",
        body: "Games for Love is a nonprofit gaming charity whose mission is to create sustainable futures for children through technology.",
      },
    ],
  },
  {
    id: "challenge",
    navLabel: "Challenge",
    eyebrow: "THE CHALLENGE",
    heading: "Donors had no idea where their money went",
    highlighted: true,
    blocks: [
      {
        type: "text",
        body: "All donations to Games for Love went into a general fund, so donors had no way of knowing when or where their money actually got deployed. Funding requests from specific hospitals stayed invisible to donors too. Staff tracked impact through an internal dashboard, but external partners and brands had no access to that information, which held back the organization's marketing efforts as well.",
      },
    ],
  },
  {
    id: "solution",
    navLabel: "Solution",
    eyebrow: "THE SOLUTION",
    heading: "A live map built with Digital Aid Seattle",
    blocks: [
      {
        type: "text",
        body: "To increase donations and make giving more transparent, Games for Love partnered with Digital Aid Seattle to build a visualization map showing the total donations collected and exactly how those funds get allocated. Working alongside a team of developers, QA, and a researcher, the primary goal was driving transparency in funding progress, with increasing donations as a secondary goal. We built the web application on top of Games for Love's Airtable as the data source, so it could be deployed within their own infrastructure and embedded directly into the donor section of their website.",
      },
    ],
  },
  {
    id: "impact",
    navLabel: "Impact",
    eyebrow: "IMPACT",
    heading: "A map covering 200+ hospitals",
    blocks: [
      {
        type: "stats",
        items: [{ label: "Hospitals visualized", value: "200+" }],
      },
      {
        type: "bullets",
        items: [
          "Made donation impact visible, so donors could see exactly what their contributions were doing",
          "Gave donors a clearer reason to give again, backed by real, trackable progress",
        ],
      },
    ],
  },
  {
    id: "role",
    navLabel: "My Role",
    eyebrow: "MY ROLE",
    heading: "...as the lead UX/UI designer, 0 → 1",
    blocks: [
      {
        type: "bullets",
        items: [
          "Collaborated with stakeholders and developers to define the visual design direction",
          "Built the design system and component library in Figma",
          "Designed an optimized, responsive experience for mobile",
        ],
      },
    ],
  },
  {
    id: "research",
    navLabel: "Research",
    eyebrow: "INITIAL RESEARCH & ASSUMPTIONS",
    heading: "Starting from what donors were already telling us",
    blocks: [
      {
        type: "text",
        body: "Earlier research surfaced a handful of recurring pain points in the donor experience:",
      },
      {
        type: "bullets",
        items: [
          "A fragmented donor experience: Games for Love offers multiple ways to give, but without a clear path tailored to different donor types, contributions stay scattered and hard to optimize",
          "Charity streams drive most donations, leaving the organization dependent on a single channel",
          "Weak feedback loops between the organization and its donors, spread thin across Discord, social media, email, and in-person events with nothing tying them together",
          "No real mechanism for re-engaging returning donors or showing them the progress their past donations made",
        ],
      },
      {
        type: "text",
        body: "From there, we worked from three assumptions:",
      },
      {
        type: "bullets",
        items: [
          "Transparency drives donor trust and repeat donations. If donors can see exactly where their money goes and track its impact over time, they're more likely to give again",
          "Donors feel most motivated to give when they have a personal connection to a cause. Making it easy to donate to a specific hospital could turn impulse giving into something more intentional and recurring",
          "A unified, engaging experience could reduce dependency on any single channel by bringing funding progress, impact stories, and donation actions into one place",
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
        text: "How might we design an interactive donation map that makes Games for Love's funding visible and trustworthy, while creating an experience engaging enough to motivate donors to give again?",
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
          "Close the gap between giving and impact",
          "Create a fast, frictionless donation entry point so donors can act on impulse without losing the moment",
          "Improve donor retention by showing funding progress over time",
        ],
      },
    ],
  },
  {
    id: "ideation",
    navLabel: "Ideation",
    eyebrow: "IDEATION",
    heading: "From lo-fi wireframes to a hospital landing page",
    blocks: [
      {
        type: "text",
        body: "Starting from the research and design goals, I sketched a lo-fi wireframe that supported the immediate priorities. Partway through, the client asked for a hospital landing page alongside the map, giving donors a place to read the request narrative behind a location, see its impact, and check its donation status.",
      },
      { type: "placeholder", label: "Lo-fi wireframes and hospital landing page concept", aspect: "wide" },
    ],
  },
  {
    id: "design-decisions",
    navLabel: "Design Decisions",
    eyebrow: "DESIGN DECISIONS",
    heading: "Four decisions that shaped the map",
    blocks: [
      {
        type: "text",
        body: "After a lot of iteration and client feedback (I used Lovable early on to explore layout and visual direction), the client was clear that the final screens needed to feel playful and engaging, not like a spreadsheet. That shaped four core decisions.",
      },
      {
        type: "principles",
        items: [
          {
            title: "Multiple donation entry points",
            body: "Every location on the map ties to its own donation action, so donors can give to a specific place instead of a general fund, supporting more intentional giving.",
          },
          {
            title: "Visible fund allocation",
            body: "The map shows in real time where donations are going: specific hospitals, funding progress, and how close each is to its goal, directly closing the transparency gap.",
          },
          {
            title: "Progress tracking over time",
            body: "The prototype surfaces funding milestones and growth, giving returning donors something new to see and the feedback loop the organization was missing.",
          },
          {
            title: "A shareable marketing asset",
            body: "The map needed to feel credible and compelling enough for external partners and brands to use, not just serve as an internal reporting tool.",
          },
        ],
      },
      { type: "placeholder", label: "Final map and hospital landing page screens", aspect: "wide" },
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
        heading: "On working cross-functionally",
        body: "Collaborating with developers and stakeholders early was essential. Getting aligned on scope and feasibility from the start prevented bigger misalignments later on. As the sole UX designer on the team, I learned quickly that good design work is only half the job: advocating for user-centered decisions and accessibility standards in a cross-functional environment meant learning how to communicate design's value to people with very different priorities.",
      },
      {
        type: "text",
        heading: "If I did this again",
        body: "I'd bring AI tools into the ideation process earlier to move faster through initial concepts and spend more time refining what actually matters. I'd also prioritize formal usability testing to catch friction points that are easy to miss without direct user feedback.",
      },
    ],
  },
];

export const donorMap: Project = {
  slug: "donor-transparency-impact-map",
  title: "Interactive impact map for donor transparency",
  summary:
    "An interactive donation map built with Digital Aid Seattle for Games for Love, turning an opaque general fund into a transparent, trackable view of where every donation goes.",
  category: "UX/UI design",
  disciplines: ["Visual Design", "Product Design"],
  year: "2026",
  featured: true,
  size: "large",
  order: 3,
  coverImage: { src: "/images/projects/donor-map.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/donor-map.jpg", alt: "" },
  meta: {
    role: "Lead UX/UI Designer",
    timeline: "12 months",
    team: "Digital Aid Seattle: developers, QA, and a researcher",
  },
  skills: ["Visual Design", "Design Systems", "Responsive Design"],
  sections: [],
  caseStudySections,
};
