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
    <Section as="div" className="py-20">
      <h1 className="font-display text-4xl text-ink sm:text-5xl">Resume</h1>
      <p className="mt-4 max-w-xl text-ink-muted">
        Placeholder — add your resume PDF at{" "}
        <code className="rounded bg-paper-raised px-1.5 py-0.5 text-sm">
          public/resume.pdf
        </code>{" "}
        to enable the download below.
      </p>
      <div className="mt-8 flex gap-4">
        <LinkButton href={site.resumeUrl} external>
          Download resume
        </LinkButton>
      </div>
    </Section>
  );
}
