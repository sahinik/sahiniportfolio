import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { LinkButton } from "@/components/ui/Button";
import { HeroArtifact } from "@/components/home/HeroArtifact";
import { getFeaturedProjects } from "@/content/projects";
import { site } from "@/content/site";

const capabilities = [
  {
    title: "Product Design",
    body: "End-to-end design across web and native, from problem framing to shipped interface.",
  },
  {
    title: "UX Research",
    body: "Qualitative and quantitative methods that turn ambiguity into design direction.",
  },
  {
    title: "Interaction Design",
    body: "Motion, feedback, and state design that make interfaces feel considered.",
  },
  {
    title: "Physical–Digital Systems",
    body: "Designing across hardware, packaging, and screens as one coherent experience.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <Section as="section" className="grid grid-cols-1 items-center gap-12 pt-16 pb-24 md:grid-cols-2 md:pt-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-ink-muted">
            {site.role}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl">
            {site.positioning}
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/work" data-cursor-label="View work">
              See selected work
            </LinkButton>
            <LinkButton href="/about" variant="ghost">
              About me
            </LinkButton>
          </div>
        </div>
        <HeroArtifact />
      </Section>

      {/* Selected work */}
      <Section as="section" className="py-24" ariaLabel="Selected work">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl text-ink">Selected work</h2>
          <Link
            href="/work"
            className="hidden text-sm font-medium text-ink-muted underline decoration-line underline-offset-4 hover:text-ink hover:decoration-accent sm:inline-block"
          >
            All projects
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>
      </Section>

      {/* Physical + digital philosophy */}
      <Section as="section" className="py-24 border-t border-line" ariaLabel="Design philosophy">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="font-display text-3xl text-ink">
            Physical meets digital.
          </h2>
          <div className="max-w-2xl space-y-4 text-ink-muted">
            <p>
              Placeholder philosophy copy — replace with your real point of view
              on designing across physical objects and digital interfaces:
              tactility, material honesty, and how screens and surfaces
              reinforce each other.
            </p>
            <p>
              Every project starts by asking what&apos;s physical about a
              digital problem, and what&apos;s digital about a physical one.
            </p>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      <Section as="section" className="py-24 border-t border-line" ariaLabel="Capabilities">
        <h2 className="font-display text-3xl text-ink">What I do</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item.title} className="border-t border-line pt-4">
              <h3 className="font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Playground teaser */}
      <Section as="section" className="py-24 border-t border-line">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl text-ink">I like making things.</h2>
            <p className="mt-2 max-w-md text-ink-muted">
              Small experiments, motion studies, and half-finished ideas that
              didn&apos;t fit anywhere else.
            </p>
          </div>
          <LinkButton href="/playground" variant="ghost" data-cursor-label="Explore">
            Visit the playground
          </LinkButton>
        </div>
      </Section>

      {/* About teaser */}
      <Section as="section" className="py-24 border-t border-line">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr] md:items-end">
          <div>
            <h2 className="font-display text-3xl text-ink">About me</h2>
            <p className="mt-4 max-w-2xl text-ink-muted">{site.shortBio}</p>
          </div>
          <LinkButton href="/about" variant="ghost" className="w-fit">
            Read more
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
