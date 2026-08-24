import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Squiggle } from "@/components/ui/Squiggle";
import { Hero } from "@/components/home/Hero";
import { getLargeProjects, getSmallProjects } from "@/content/projects";

export default function HomePage() {
  const largeProjects = getLargeProjects();
  const smallProjects = getSmallProjects();

  return (
    <>
      <Section as="section" ariaLabel="Introduction">
        <Hero />
      </Section>

      <Section as="section" className="py-12 sm:py-16" ariaLabel="Projects">
        <div className="relative inline-block">
          <h1 className="font-serif italic text-4xl text-ink">projects</h1>
          <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-blue" />
        </div>

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
    </>
  );
}
