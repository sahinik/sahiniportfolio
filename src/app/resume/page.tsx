import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { LinkButton } from "@/components/ui/Button";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Resume",
  description: `Resume for ${site.name}, ${site.role}.`,
  path: "/resume",
});

export default function ResumePage() {
  return (
    <Section as="div" className="py-16 sm:py-20">
      <h1 className="font-serif italic text-4xl text-ink sm:text-5xl">resume</h1>
      <p className="mt-4 max-w-xl font-sans text-ink/80">
        The full resume, as a PDF.
      </p>
      <div className="mt-8 flex gap-4">
        <LinkButton href={site.resumeUrl} external icon={ArrowUpRight}>
          download resume
        </LinkButton>
      </div>
    </Section>
  );
}
