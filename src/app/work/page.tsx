import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { getLargeProjects, getSmallProjects } from "@/content/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Work",
  description: "Selected product design case studies.",
  path: "/work",
});

export default function WorkPage() {
  const largeProjects = getLargeProjects();
  const smallProjects = getSmallProjects();

  return (
    <Section as="div" className="py-16 sm:py-20">
      <h1 className="font-serif italic text-4xl text-ink sm:text-5xl">work</h1>
      <p className="mt-4 max-w-xl font-sans text-ink/80">
        Product design projects spanning research, interaction design, and
        physical–digital systems.
      </p>
      <div className="mt-14 grid grid-cols-1 gap-x-11 gap-y-16 lg:grid-cols-2">
        {largeProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index === 0} />
        ))}
      </div>

      {smallProjects.length > 0 && (
        <div className="mt-20">
          <h2 className="font-serif italic text-2xl text-ink">other side quests</h2>
          <div className="mt-6 flex flex-wrap gap-9">
            {smallProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
