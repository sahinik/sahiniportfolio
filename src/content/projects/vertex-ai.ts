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
        body: "As part of the HCDE Usability Studies course, I worked with a team of students and Google — supported by a Google UX research manager and our professor — to run an 8-participant usability study on Vertex AI Studio's loginless web experience, evaluating how developers navigate and engage with it before ever signing in.",
      },
      {
        type: "metaGrid",
        role: "UX Researcher",
        timeline: "HCDE Usability Studies course · 10 weeks",
        skills: ["Usability Testing", "Quantitative & Qualitative Research"],
      },
    ],
  },
  {
    id: "context",
    navLabel: "Context",
    eyebrow: "CONTEXT",
    heading: "What is Vertex AI?",
    blocks: [
      {
        type: "text",
        body: "Vertex AI is a cloud-based machine-learning development platform for building and using AI models, designed for enterprise developers building and deploying AI models and applications at scale. Its loginless experience is a free way to interact with Gemini models in Vertex AI Studio — no account required.",
      },
    ],
  },
  {
    id: "challenge",
    navLabel: "Challenge",
    eyebrow: "THE CHALLENGE",
    heading: "Would the loginless experience hold up to real developers — and convert them?",
    highlighted: true,
    blocks: [
      {
        type: "text",
        body: "Google wanted to identify usability challenges and uncover opportunities to improve user retention for the Vertex AI platform. They asked us to assess the loginless web experience of Vertex AI Studio, focusing on how developers navigate and engage with its features.",
      },
    ],
  },
  {
    id: "approach",
    navLabel: "Approach",
    eyebrow: "THE APPROACH",
    heading: "8 developers, 6 tasks, 60 minutes each",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Weeks", value: "10" },
          { label: "Participants", value: "8" },
          { label: "Session length", value: "60 min" },
          { label: "Tasks tested", value: "6" },
        ],
      },
      {
        type: "bullets",
        items: [
          "8 participants — students & professional developers, all first-time Vertex AI users",
          "60-minute in-person moderated sessions on the UW campus",
          "Audio + video recorded, with a think-aloud protocol",
          "Post-task and post-test questionnaires for quantitative data",
          "6 tasks replicating the first-time journey — landing page to getting model code",
        ],
      },
    ],
  },
  {
    id: "impact",
    navLabel: "Impact",
    eyebrow: "IMPACT",
    heading: "Findings that made it back to Google's Vertex AI team",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Actionable insights delivered", value: "18" },
          { label: "Additional usability issues surfaced", value: "2" },
        ],
      },
    ],
  },
  {
    id: "role",
    navLabel: "My Role",
    eyebrow: "MY ROLE",
    heading: "...as a UX researcher, soup to nuts",
    blocks: [
      {
        type: "bullets",
        items: [
          "Helped create the study plan",
          "Supported participant recruitment",
          "Moderated usability test sessions",
          "Captured detailed qualitative notes",
          "Analyzed qualitative and quantitative data",
        ],
      },
    ],
  },
  {
    id: "questions",
    navLabel: "Research Questions",
    eyebrow: "RESEARCH QUESTIONS",
    blocks: [
      {
        type: "bullets",
        items: [
          "Is the loginless experience usable and satisfying?",
          "What are the major frictions?",
          "Does the loginless experience provide enough capability to entice new users to sign up for more access?",
        ],
      },
    ],
  },
  {
    id: "initial-research",
    navLabel: "Initial Research",
    eyebrow: "GETTING UP TO SPEED",
    heading: "A heuristic evaluation and a cognitive walkthrough before recruiting anyone",
    blocks: [
      {
        type: "bullets",
        items: [
          "Ran a heuristic evaluation to get familiar with the tool",
          "Ran a cognitive walkthrough to understand how developers would navigate the platform",
          "Studied relevant jargon and LLM fundamentals to speak the same language as participants",
        ],
      },
    ],
  },
  {
    id: "recruitment",
    navLabel: "Recruitment",
    eyebrow: "PARTICIPANT RECRUITMENT",
    heading: "Recruiting developers who'd never touched Vertex AI",
    blocks: [
      {
        type: "stats",
        items: [
          { label: "Participants recruited", value: "8" },
          { label: "Reached via UW directories", value: "500+" },
        ],
      },
      {
        type: "bullets",
        items: [
          "Convenience sampling — personal network + 500+ CS students via UW directories",
          "Screened out anyone with prior Vertex AI experience or only remote availability",
          "Required familiarity with programming languages and building with AI",
          "In-person attendance required for data consistency and accuracy",
        ],
      },
    ],
  },
  {
    id: "procedure",
    navLabel: "Testing Procedure",
    eyebrow: "TESTING PROCEDURE",
    heading: "A 4-person team behind every session",
    blocks: [
      {
        type: "text",
        body: "In-person sessions ran in isolated study rooms on the UW campus. Each began with a standard scenario and written consent, followed by a set of tasks tailored to that participant.",
      },
      {
        type: "bullets",
        items: [
          "Moderator — guided the session",
          "Note-taker — captured qualitative insights",
          "Timekeeper — tracked task completion",
          "Observer — tracked clicks-to-success and click-path errors",
        ],
      },
      {
        type: "text",
        heading: "Instruments",
        body: "Post-task questionnaires captured NASA-TLX and CSAT scores plus qualitative feedback; a post-test questionnaire captured SUS and NPS to summarize the overall experience.",
      },
      {
        type: "techStack",
        items: ["NASA-TLX", "CSAT", "SUS", "NPS"],
      },
    ],
  },
  {
    id: "analysis",
    navLabel: "Data Analysis",
    eyebrow: "DATA ANALYSIS",
    heading: "Affinity mapping to connect qualitative themes with the numbers",
    blocks: [
      {
        type: "bullets",
        items: [
          "Affinity-mapped qualitative notes to surface recurring patterns and themes",
          "Reviewed session recordings and pulled quotes that highlighted usability issues",
          "Tracked time-to-completion and click counts against predefined benchmarks",
          "Built CSAT, SUS, and NASA-TLX charts from the questionnaire data",
        ],
      },
      { type: "placeholder", label: "CSAT, SUS & NASA-TLX charts — data under NDA", aspect: "wide" },
    ],
  },
  {
    id: "findings",
    navLabel: "Findings",
    eyebrow: "FINDINGS",
    heading: "18 actionable insights, organized into three buckets",
    blocks: [
      {
        type: "principles",
        items: [
          {
            title: "Task-based findings",
            body: "Organized around each of the 6 tasks, with user quotes and severity rated on the 4-point scale from the Handbook of Usability Testing (Jeffrey Rubin).",
          },
          {
            title: "Significant non-task findings",
            body: "Issues that surfaced outside the defined tasks but spoke directly to our research question on user retention.",
          },
          {
            title: "Quantitative metrics",
            body: "SUS, NPS, and CSAT scores gathered to support and triangulate the qualitative findings.",
          },
        ],
      },
      { type: "placeholder", label: "Findings deck — severity-rated insights by task", aspect: "wide" },
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
        heading: "Testing across expertise levels",
        body: "Testing with diverse expertise levels was essential — the issues beginners faced were different from what advanced users hit, and understanding both helped us prioritize recommendations that benefited the broadest user base without limiting power users.",
      },
      {
        type: "text",
        heading: "Triangulating methods",
        body: "Triangulating methods gave us comprehensive insights: heuristic evaluation surfaced systemic issues, while qualitative interviews and quantitative analysis showed how those issues actually played out in real workflows.",
      },
      {
        type: "text",
        heading: "If I did this again…",
        body: "I'd add eye tracking (dropped this round for technical constraints) to build heat maps and further validate recommendations, recruit a larger and stratified sample to improve generalizability, and standardize on a single moderator with multiple dry runs before testing.",
      },
    ],
  },
];

export const vertexAi: Project = {
  slug: "vertex-ai-usability-evaluation",
  title: "Usability evaluation of Google Vertex AI platform",
  summary:
    "An 8-participant usability study with Google's Vertex AI team, evaluating the loginless developer experience and delivering 18 actionable insights.",
  category: "UX Research",
  disciplines: ["UX Research"],
  year: "2026",
  featured: true,
  size: "large",
  order: 2,
  coverImage: { src: "/images/projects/vertex-ai.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/vertex-ai.jpg", alt: "" },
  meta: {
    role: "UX Researcher",
    timeline: "HCDE Usability Studies course · 10 weeks",
  },
  skills: ["Usability Testing", "Quantitative & Qualitative Research"],
  sections: [],
  caseStudySections,
};
