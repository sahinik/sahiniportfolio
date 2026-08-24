import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects, getProjectBySlug, getAdjacentProject } from "@/content/projects";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { ProjectSectionBlock } from "@/components/case-study/ProjectSection";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return buildMetadata({ title: "Project not found", description: "" });

  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
    image: project.coverImage.src,
  });
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getAdjacentProject(slug);

  return (
    <article>
      <Section as="header" className="pt-12 pb-10 sm:pt-16">
        {project.isPlaceholder && (
          <p className="mb-6 inline-block rounded bg-sky px-3 py-1 font-sans text-sm font-medium text-caption">
            Case study write-up coming soon
          </p>
        )}
        <span className="inline-block rounded bg-sky px-2.5 py-1 font-sans text-sm font-medium text-caption">
          {project.category}
        </span>
        <h1 className="mt-4 font-serif italic text-4xl text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl font-sans text-lg text-ink/70">{project.summary}</p>

        <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-4">
          <div>
            <dt className="font-sans text-xs font-medium uppercase tracking-wide text-ink/50">Role</dt>
            <dd className="mt-1 font-sans text-sm text-ink">{project.meta.role}</dd>
          </div>
          <div>
            <dt className="font-sans text-xs font-medium uppercase tracking-wide text-ink/50">Timeline</dt>
            <dd className="mt-1 font-sans text-sm text-ink">{project.meta.timeline}</dd>
          </div>
          {project.meta.team && (
            <div>
              <dt className="font-sans text-xs font-medium uppercase tracking-wide text-ink/50">Team</dt>
              <dd className="mt-1 font-sans text-sm text-ink">{project.meta.team}</dd>
            </div>
          )}
          <div>
            <dt className="font-sans text-xs font-medium uppercase tracking-wide text-ink/50">Disciplines</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {project.disciplines.map((d) => (
                <Tag key={d}>{d}</Tag>
              ))}
            </dd>
          </div>
        </dl>
      </Section>

      <Section as="div" className="pb-8">
        <div className="relative aspect-video overflow-hidden rounded-md bg-mist">
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </div>
      </Section>

      <Section as="div" className="pb-16">
        {project.sections.map((section, index) => (
          <ProjectSectionBlock key={index} section={section} />
        ))}

        {project.outcome && (
          <div className="mx-auto max-w-2xl border-t border-line py-8">
            <h2 className="font-serif italic text-2xl text-ink">Outcome</h2>
            <p className="mt-3 font-sans text-ink/70 leading-relaxed">{project.outcome}</p>
          </div>
        )}
      </Section>

      <Section as="div" className="border-t border-line py-16">
        <p className="font-sans text-sm font-medium uppercase tracking-wide text-ink/50">
          Next project
        </p>
        <Link
          href={`/work/${next.slug}`}
          className="mt-2 inline-block font-serif italic text-3xl text-ink hover:text-blue"
        >
          {next.title} →
        </Link>
      </Section>
    </article>
  );
}
