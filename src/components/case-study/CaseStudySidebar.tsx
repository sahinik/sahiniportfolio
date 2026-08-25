"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { clsx } from "clsx";
import type { CaseStudySection } from "@/types/project";

export function CaseStudySidebar({
  title,
  sections,
}: {
  title: string;
  sections: CaseStudySection[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  function handleClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav aria-label="Case study sections" className="flex flex-col gap-6 lg:sticky lg:top-[104px] lg:gap-8">
      <Link
        href="/#projects"
        className="flex w-fit items-center gap-1.5 font-sans text-sm text-ink/60 transition-colors hover:text-blue"
      >
        <ArrowLeft className="size-4" aria-hidden />
        back
      </Link>

      <p className="font-serif italic text-2xl leading-tight text-ink">{title}</p>

      {/* Full section map only at lg: — on mobile it's a long list better
          experienced by scrolling than by a sticky nav crowding the screen. */}
      <ul className="hidden flex-col gap-3 lg:flex">
        {sections.map((section) => {
          const active = activeId === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(section.id);
                }}
                aria-current={active ? "true" : undefined}
                className={clsx(
                  "block font-sans text-sm uppercase tracking-wide transition-colors",
                  active ? "font-medium text-ink" : "text-ink/40 hover:text-ink/70",
                )}
              >
                {section.navLabel}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile: a horizontally scrollable pill row instead of a vertical list. */}
      <ul className="-mx-(--gutter) flex gap-2 overflow-x-auto px-(--gutter) pb-1 lg:hidden">
        {sections.map((section) => {
          const active = activeId === section.id;
          return (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(section.id);
                }}
                aria-current={active ? "true" : undefined}
                className={clsx(
                  "block rounded-full border px-3 py-1.5 font-sans text-xs uppercase tracking-wide transition-colors",
                  active
                    ? "border-blue bg-sky text-caption"
                    : "border-line text-ink/50 hover:text-ink/80",
                )}
              >
                {section.navLabel}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
