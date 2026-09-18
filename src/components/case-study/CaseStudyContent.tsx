import type { CaseStudySection } from "@/types/project";
import { ProjectSectionBlock } from "@/components/case-study/ProjectSection";

export function CaseStudyContent({ sections }: { sections: CaseStudySection[] }) {
  return (
    <div className="flex min-w-0 flex-col gap-16 sm:gap-20 lg:flex-1">
      {sections.map((section) => {
        const header = (
          <div>
            {section.eyebrow && (
              <p className="font-sans text-[13px] font-medium tracking-wide text-blue">
                {section.eyebrow}
              </p>
            )}
            {section.heading && (
              <h2
                className={
                  section.highlighted
                    ? "mt-2.5 font-serif text-[28px] leading-[1.18] text-ink"
                    : "mt-2.5 font-serif text-[32px] leading-[1.18] text-ink"
                }
              >
                {section.heading}
              </h2>
            )}
          </div>
        );

        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-[210px] lg:scroll-mt-[104px]"
          >
            {section.highlighted ? (
              <div className="flex flex-col gap-4 rounded-xl bg-mist p-6 sm:p-8">
                {header}
                {section.blocks.map((block, index) => (
                  <ProjectSectionBlock key={index} section={block} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {header}
                {section.blocks.map((block, index) => (
                  <ProjectSectionBlock key={index} section={block} />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
