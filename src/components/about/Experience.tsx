import { experience } from "@/content/site";
import { TechStackBalls } from "@/components/about/TechStackBalls";

export function Experience() {
  return (
    <div className="py-16 sm:py-20">
      <h2 className="font-hand text-4xl text-blue sm:text-5xl">experience</h2>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto]">
        <ul className="divide-y divide-divider border-t border-divider">
          {experience.map((role, index) => (
            <li key={index} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-3">
              <p className="font-sans text-lg font-medium text-blue">
                {role.org}, {role.project}
              </p>
              <p className="font-sans text-lg text-ink/80">{role.role}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center gap-2">
          <TechStackBalls />
          <p className="font-sans text-xs font-bold italic text-blue">a glimpse of my current tech stack</p>
          <span className="sr-only">Figma, Framer, Miro, Notion, Claude, ChatGPT, Reve</span>
        </div>
      </div>
    </div>
  );
}
