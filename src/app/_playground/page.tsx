/**
 * Archived — not routed. Renaming this folder to "_playground" (Next.js's
 * private-folder convention) takes it out of the App Router without
 * deleting the work. Rename back to "playground" to bring the route back;
 * until then, the nav item shows a "coming soon" cursor tooltip instead.
 */
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Playground",
  description: "Experiments, motion studies, and things made for fun.",
  path: "/playground",
});

const experiments = [
  { title: "Motion study 01", type: "Interaction" },
  { title: "Type experiment", type: "Visual" },
  { title: "Cursor toy", type: "Prototype" },
  { title: "Generative pattern", type: "Creative coding" },
];

export default function PlaygroundPage() {
  return (
    <Section as="div" className="py-16 sm:py-20">
      <h1 className="font-serif italic text-4xl text-ink sm:text-5xl">playground</h1>
      <p className="mt-4 max-w-xl font-sans text-ink/70">
        A laboratory, not a portfolio grid — small experiments, interaction
        studies, and ideas that didn&apos;t need a full case study.
        Placeholder content until real experiments are added.
      </p>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((item) => (
          <div
            key={item.title}
            className="flex aspect-square flex-col justify-between rounded-md bg-mist p-6"
          >
            <span className="font-sans text-xs font-medium uppercase tracking-wide text-ink/50">
              {item.type}
            </span>
            <span className="font-serif italic text-xl text-ink">{item.title}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
