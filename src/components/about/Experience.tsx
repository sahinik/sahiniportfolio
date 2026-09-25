import type { ReactNode } from "react";
import { education, experience } from "@/content/site";
import { TechStackBalls } from "@/components/about/TechStackBalls";

/** Italicizes a trailing parenthetical like "(Sponsored)", as in the Figma experience list. */
function withItalicParenthetical(text: string): ReactNode {
  const match = text.match(/^(.*?)(\s*\([^)]*\))$/);
  if (!match) return text;
  return (
    <>
      {match[1]}
      <em>{match[2]}</em>
    </>
  );
}

function ListRow({ title, detail }: { title: ReactNode; detail: string }) {
  return (
    <li className="flex flex-col gap-1 border-b border-divider py-5 first:pt-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <p className="font-sans text-lg font-semibold leading-normal text-blue sm:shrink-0">{title}</p>
      <p className="font-sans text-lg leading-[25px] text-ink sm:text-right">{detail}</p>
    </li>
  );
}

export function Experience() {
  return (
    <div className="py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,654px)_auto] lg:items-end lg:justify-between">
        <div className="flex flex-col gap-[70px]">
          <section aria-labelledby="experience-heading" className="flex flex-col gap-[30px]">
            <h2 id="experience-heading" className="font-hand text-4xl text-blue sm:text-5xl">
              experience
            </h2>
            <ul>
              {experience.map((role) => (
                <ListRow
                  key={`${role.org}-${role.project}`}
                  title={
                    <>
                      {role.org}, {withItalicParenthetical(role.project)}
                    </>
                  }
                  detail={role.role}
                />
              ))}
            </ul>
          </section>

          <section aria-labelledby="education-heading" className="flex flex-col gap-[30px]">
            <h2 id="education-heading" className="font-hand text-4xl text-blue sm:text-5xl">
              education
            </h2>
            <ul>
              {education.map((entry) => (
                <ListRow key={entry.school} title={entry.school} detail={entry.degree} />
              ))}
            </ul>
          </section>
        </div>

        <div className="flex flex-col items-center gap-2 lg:mb-1">
          <TechStackBalls />
          <p className="font-sans text-sm font-medium italic text-caption">a glimpse of my current design tools</p>
          <span className="sr-only">Figma, Framer, Miro, Notion, Claude, ChatGPT, Reve</span>
        </div>
      </div>
    </div>
  );
}
