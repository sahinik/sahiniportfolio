import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: `About ${site.name}, ${site.role}.`,
  path: "/about",
});

const values = [
  {
    title: "Psychology first",
    body: "Placeholder — how behavioral psychology shapes the way you approach interfaces and decisions.",
  },
  {
    title: "Accessibility as craft",
    body: "Placeholder — your stance on inclusive design as a baseline, not an afterthought.",
  },
  {
    title: "Physical + digital",
    body: "Placeholder — why you're drawn to the seam between objects and interfaces.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section as="div" className="pt-16 pb-12">
        <p className="text-sm font-medium uppercase tracking-wide text-ink-muted">About</p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
          {site.positioning}
        </h1>
      </Section>

      <Section as="div" className="grid grid-cols-1 gap-10 border-t border-line py-16 md:grid-cols-[1fr_1fr]">
        <div className="aspect-[4/5] rounded-sm border border-line bg-paper-raised" aria-hidden />
        <div className="space-y-4 text-ink-muted">
          <p>{site.shortBio}</p>
          <p>
            Placeholder paragraph — background, how you got into design, and
            what continues to pull you toward this intersection of people,
            systems, and objects.
          </p>
          <p>
            Placeholder paragraph — personality outside of work: what you make,
            read, or do when you&apos;re not designing.
          </p>
        </div>
      </Section>

      <Section as="div" className="border-t border-line py-16">
        <h2 className="font-display text-3xl text-ink">How I think</h2>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="border-t border-line pt-4">
              <h3 className="font-display text-xl text-ink">{value.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{value.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section as="div" className="border-t border-line py-16">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display text-2xl text-ink">Want the full story?</h2>
          <LinkButton href="/resume">View resume</LinkButton>
        </div>
      </Section>
    </>
  );
}
