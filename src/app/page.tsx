import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
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

      <Section as="section" id="projects" className="scroll-mt-[82px] py-12 sm:py-16" ariaLabel="Projects">
        <div className="grid grid-cols-1 gap-x-11 gap-y-16 lg:grid-cols-2">
          {largeProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>

        {smallProjects.length > 0 && (
          <>
            <hr className="mt-16 border-t border-divider sm:mt-20" />
            <div className="mt-16 flex flex-col gap-10 sm:mt-20 lg:flex-row lg:items-start lg:gap-5">
              <div className="flex flex-col items-center gap-8 lg:w-[42%] lg:items-start lg:gap-14">
                <h2 className="font-hand text-4xl text-blue sm:text-5xl">other side quests</h2>
                {/* eslint-disable-next-line @next/next/no-img-element -- decorative hand-drawn mascot */}
                <img
                  src="/images/marks/saki-sitting.svg"
                  alt=""
                  aria-hidden="true"
                  className="hidden h-[220px] w-auto sm:block"
                />
              </div>
              <div className="flex flex-wrap items-start justify-center gap-9 lg:flex-1 lg:flex-nowrap lg:justify-start">
                {smallProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </>
        )}
      </Section>
    </>
  );
}
