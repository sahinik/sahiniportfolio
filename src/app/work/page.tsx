import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getAllProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Work",
  description: "Selected product design case studies.",
  path: "/work",
});

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <Section as="div" className="py-20">
      <h1 className="font-display text-4xl text-ink sm:text-5xl">Work</h1>
      <p className="mt-4 max-w-xl text-ink-muted">
        A selection of product design projects across B2B and B2C, spanning
        research, interaction design, and physical–digital systems.
      </p>
      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index === 0} />
        ))}
      </div>
    </Section>
  );
}
