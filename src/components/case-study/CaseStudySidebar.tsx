"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { clsx } from "clsx";
import type { CaseStudySection } from "@/types/project";

const HEADER_HEIGHT = 82;

export function CaseStudySidebar({
  title,
  sections,
}: {
  title: string;
  sections: CaseStudySection[];
}) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const mobileListRef = useRef<HTMLUListElement>(null);
  const mobileBlockRef = useRef<HTMLDivElement>(null);
  const [mobileBlockHeight, setMobileBlockHeight] = useState(0);

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

  // Keep the active chip in view as the section changes — scrolls the pill
  // row horizontally only, never the page.
  useEffect(() => {
    const container = mobileListRef.current;
    if (!container) return;
    const activeChip = container.querySelector<HTMLElement>('a[aria-current="true"]');
    if (!activeChip) return;

    const target =
      activeChip.offsetLeft - container.clientWidth / 2 + activeChip.clientWidth / 2;
    container.scrollTo({
      left: Math.max(0, target),
      behavior: "smooth",
    });
  }, [activeId]);

  // The fixed mobile block's height varies with the title's line count
  // across viewport widths — measure it so the spacer below can reserve
  // exactly that much space instead of guessing a fixed number.
  useEffect(() => {
    const el = mobileBlockRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setMobileBlockHeight(entry.contentRect.height);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function handleClick(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const backLink = (
    <Link
      href="/#projects"
      className="flex w-fit items-center gap-1.5 font-sans text-sm text-ink/60 transition-colors hover:text-blue"
    >
      <ArrowLeft className="size-4" aria-hidden />
      back
    </Link>
  );

  const heading = <p className="font-serif italic text-2xl leading-tight text-ink">{title}</p>;

  const chipRow = (
    <ul ref={mobileListRef} className="flex gap-2 overflow-x-auto scroll-smooth">
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
  );

  return (
    <>
      {/* Desktop: sticky vertical sidebar. */}
      <nav
        aria-label="Case study sections"
        className="hidden lg:sticky lg:top-[104px] lg:flex lg:flex-col lg:gap-8 lg:self-start"
      >
        {backLink}
        {heading}
        <ul className="flex flex-col gap-3">
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
      </nav>

      {/* Mobile/tablet: the whole block (back, title, chip row) fixed
          together below the header — position:sticky doesn't work here,
          its "stuck" range is bounded by its own direct parent, which
          would only ever be as tall as this block itself. */}
      <div
        ref={mobileBlockRef}
        aria-label="Case study sections"
        className="fixed inset-x-0 z-30 flex flex-col gap-4 bg-paper/90 px-(--gutter) pb-4 pt-4 backdrop-blur-sm lg:hidden"
        style={{ top: HEADER_HEIGHT }}
      >
        {backLink}
        {heading}
        {chipRow}
      </div>
      {/* Reserves the space the fixed block above occupies. */}
      <div style={{ height: mobileBlockHeight }} className="lg:hidden" aria-hidden />
    </>
  );
}
