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
        body: "I collaborated with a team of students and Google, supported by a Google UX research manager and our professor, to conduct a usability study on Vertex AI Studio's loginless web experience. The study assessed how developers navigate and engage with the platform's features.",
      },
      {
        type: "metaGrid",
        role: "UX Researcher",
        timeline: "January - March '25",
        team: ["Sahini Komandla", "Siddharth Hardikar", "Inhauck Choi", "Jacqueline Yan"],
        skills: ["Usability Testing", "Heuristic Evaluation", "Quantitative & Qualitative Research"],
      },
    ],
  },
  {
    id: "impact",
    navLabel: "Impact",
    eyebrow: "IMPACT",
    heading: "18 actionable insights for Google's Vertex AI team",
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
    id: "context",
    navLabel: "Context",
    eyebrow: "CONTEXT",
    heading: "What is Vertex AI?",
    blocks: [
      {
        type: "text",
        body: "Vertex AI is a cloud-based machine-learning development platform for building and using AI models. It is designed for enterprise developers to build and deploy AI models and applications at scale. Vertex AI's loginless experience is a free way to interact with Gemini models in Vertex AI Studio. No account is required.",
      },
    ],
  },
  {
    id: "challenge",
    navLabel: "Challenge",
    eyebrow: "THE CHALLENGE",
    heading: "Improving usability and retention for the loginless experience",
    highlighted: true,
    blocks: [
      {
        type: "text",
        body: "Google wanted to identify usability challenges and uncover opportunities to improve user retention for the Vertex AI platform. They asked us to conduct a usability study assessing the loginless web experience of Vertex AI Studio, focusing on how developers navigate and engage with its features.",
      },
    ],
  },
  {
    id: "role",
    navLabel: "My Role",
    eyebrow: "MY ROLE",
    heading: "...as a UX researcher, from soup to nuts",
    blocks: [
      {
        type: "row",
        items: [
          {
            block: {
              type: "bullets",
              items: [
                "Contributed to creating the study plan",
                "Conducted heuristic evaluation",
                "Supported participant recruitment",
                "Moderated usability tests",
                "Captured detailed qualitative notes",
                "Analyzed both qualitative and quantitative data",
              ],
              columns: 1,
            },
          },
          {
            width: 370,
            block: {
              type: "image",
              src: "/images/projects/team-pic.png",
              alt: "The research team at Google's office",
              caption: "the team at Google's office (yes i'm photoshopped in because i couldn't make it :'(( )",
              captionVariant: "accent-italic",
              aspectRatio: "370/255",
            },
          },
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
        type: "chatBubbles",
        items: [
          "Is the loginless experience usable and satisfying?",
          "What are the major frictions?",
          "Does the loginless experience provide enough capabilities to engage and entice new users to sign up for more access?",
        ],
      },
    ],
  },
  {
    id: "initial-research",
    navLabel: "Initial Research",
    eyebrow: "INITIAL RESEARCH",
    heading: "Conducting a heuristic evaluation before recruiting participants",
    blocks: [
      {
        type: "text",
        body: "Simulating a cognitive walkthrough helped us better understand how developers would navigate the platform. We also spent time familiarizing ourselves with relevant jargon and the fundamentals of how LLMs work.",
      },
      {
        type: "image",
        src: "/images/projects/vertex-initial-research.png",
        alt: "Vertex AI Studio interaction map, walking through the prompt gallery and Vertex AI Studio flow",
        aspectRatio: "1760/1078",
        fullWidth: true,
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
          { icon: "timer", value: "60 min", label: "Session length" },
          { icon: "flow", value: "6", label: "Tasks tested" },
        ],
        notes: [
          "Students and professional developers were all first-time Vertex AI users recruited through convenience sampling",
          "In-person, moderated sessions encouraged participants to think-aloud, with audio and video being recorded",
          "Each session included 6 post-task and 1 post-test questionnaires for supplemental quantitative data",
        ],
      },
    ],
  },
  {
    id: "procedure",
    navLabel: "Testing Procedure",
    eyebrow: "TESTING PROCEDURE",
    heading: "How each session was run",
    blocks: [
      {
        type: "text",
        body: "We conducted in-person usability sessions in isolated study rooms on the UW campus. Each session began with a standard scenario, followed by a set of tasks created specifically for each participant. Before starting, we obtained written consent through a signed consent form.",
      },
      {
        type: "bullets",
        items: [
          "One moderator to guide the session",
          "One note-taker for qualitative insights",
          "One timekeeper for task completion",
          "One observer tracking clicks to success and identifying click-path errors",
        ],
      },
      {
        type: "image",
        src: "/images/projects/vertex-testing.png",
        alt: "Testing procedure: introduction to scenario, task & post-task questionnaire, post-test questionnaire, debrief interview",
        aspectRatio: "1760/564",
        fullWidth: true,
      },
      {
        type: "text",
        heading: "Instruments",
        body: "After each task, participants completed a post-task questionnaire with standard NASA-TLX and CSAT scores, plus qualitative feedback on their frustrations or satisfaction. At the end of the test, a post-test questionnaire based on standard SUS and NPS questions summarized their overall experience with Vertex AI.",
      },
    ],
  },
  {
    id: "analysis",
    navLabel: "Data Analysis",
    eyebrow: "DATA ANALYSIS",
    heading: "Connecting the qualitative themes with the numbers",
    blocks: [
      {
        type: "bullets",
        items: [
          "Conducted an affinity mapping exercise on the qualitative notes to identify recurring patterns and themes",
          "Reviewed session recordings and extracted quotes that directly highlighted issues with Vertex AI",
          "Tracked time to completion and number of clicks for each task, compared against predefined benchmarks",
          "Analyzed the post-task and post-test questionnaires to create charts reflecting CSAT, SUS, and NASA-TLX",
        ],
      },
      {
        type: "image",
        src: "/images/projects/vertex-data.png",
        alt: "NASA-TLX & CSAT and System Usability Scale (SUS) chart mockups, captioned: this quantitative data is under NDA, but shows how we chose to visually represent CSAT, NASA-TLX, and SUS data",
        aspectRatio: "1760/754",
        fullWidth: true,
      },
    ],
  },
  {
    id: "findings",
    navLabel: "Findings",
    eyebrow: "FINDINGS",
    heading: "18 actionable insights, organized into three categories",
    blocks: [
      {
        type: "principles",
        numbered: true,
        items: [
          {
            title: "Task-based findings",
            body: "We organized results around each task, incorporating user quotes and rating severity on a 4-point scale from the Handbook of Usability Testing by Jeffrey Rubin.",
          },
          {
            title: "Significant non-task findings",
            body: "These issues emerged outside the defined tasks, but provided valuable insight into our research question on user retention.",
          },
          {
            title: "Quantitative metrics",
            body: "We conducted SUS, NPS, and CSAT tests to support our qualitative findings.",
          },
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
              src: "/images/projects/vertex-reflection-1.png",
              alt: "",
              aspectRatio: "150/136",
            },
          },
          {
            block: {
              type: "text",
              heading: "Testing across expertise levels",
              body: "I learned that testing with diverse expertise levels was essential. The issues faced by beginners versus advanced users were different, and understanding both perspectives helped us prioritize recommendations that would benefit the broadest user base without limiting power users.",
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
              src: "/images/projects/vertex-reflection-2.png",
              alt: "",
              aspectRatio: "150/132",
            },
          },
          {
            block: {
              type: "text",
              heading: "Triangulating methods",
              body: "Triangulation of methods allowed us to gain comprehensive insights. Heuristic evaluation identified systemic issues, while qualitative interviews and quantitative analysis revealed how these issues manifested in real workflows.",
            },
          },
        ],
      },
      {
        type: "text",
        heading: "If I did this again…",
        body: "We wanted to incorporate eye tracking to aid our quantitative data, but stopped due to technical constraints. I believe this data would help identify visual heat maps and further validate usability recommendations. I would also want to recruit larger samples to improve generalizability, explore stratified sampling by experience level, and standardize on a single moderator with multiple dry runs before testing.",
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
  categories: ["Quantitative + Qualitative Research", "AI/ML"],
  disciplines: ["UX Research"],
  year: "2026",
  featured: true,
  size: "large",
  order: 2,
  coverImage: { src: "/images/projects/vertex-ai.jpg", alt: "" },
  thumbnailImage: { src: "/images/projects/vertex-ai.jpg", alt: "" },
  cardImage: { src: "/images/projects/vertex-project-image.png", alt: "", width: 974, height: 608 },
  meta: {
    role: "UX Researcher",
    timeline: "HCDE Usability Studies course · 10 weeks",
  },
  skills: ["Usability Testing", "Quantitative & Qualitative Research"],
  sections: [],
  caseStudySections,
};
