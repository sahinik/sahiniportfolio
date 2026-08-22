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
    <Section as="div" className="py-20">
      <h1 className="font-display text-4xl text-ink sm:text-5xl">Playground</h1>
      <p className="mt-4 max-w-xl text-ink-muted">
        A laboratory, not a portfolio grid — small experiments, interaction
        studies, and ideas that didn&apos;t need a full case study.
        Placeholder content until real experiments are added.
      </p>
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((item) => (
          <div
            key={item.title}
            className="flex aspect-square flex-col justify-between rounded-sm border border-line bg-paper-raised p-6"
          >
            <span className="text-xs font-medium uppercase tracking-wide text-ink-muted">
              {item.type}
            </span>
            <span className="font-display text-xl text-ink">{item.title}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
