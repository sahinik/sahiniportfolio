import { experience } from "@/content/site";

/**
 * The tech-stack graphic in Figma is a plain box of icon dots with no
 * extractable labels — kept as a labeled placeholder here rather than
 * guessing at specific tools.
 */
export function Experience() {
  return (
    <div className="py-16 sm:py-20">
      <h2 className="font-hand text-4xl text-blue sm:text-5xl">experience</h2>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]">
        <ul className="divide-y divide-divider border-t border-divider">
          {experience.map((role, index) => (
            <li key={index} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-3">
              <p className="font-sans text-base text-blue">
                <span className="font-bold">{role.org}, </span>
                <span className="font-bold italic">{role.project}</span>
              </p>
              <p className="font-sans text-base text-ink/80">{role.role}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-[220px] w-[220px] items-center justify-center rounded-lg border border-dashed border-divider bg-mist/60 sm:w-[280px]">
            <p className="px-6 text-center font-sans text-sm text-ink/60">tech stack icons</p>
          </div>
          <p className="font-sans text-xs italic text-blue">a glimpse of my current tech stack</p>
        </div>
      </div>
    </div>
  );
}
