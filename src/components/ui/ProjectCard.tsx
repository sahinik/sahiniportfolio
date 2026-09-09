"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { easeTactile, durations } from "@/lib/motion";

function categoriesFor(project: Project): string[] {
  return project.categories ?? [project.category];
}

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const categories = categoriesFor(project);

  if (project.size === "small") {
    return (
      <Link href={`/work/${project.slug}`} className="group block w-full max-w-[330px] focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm">
        <div className="relative aspect-[330/197] overflow-hidden rounded-md bg-navy transition-transform duration-[var(--duration-standard)] ease-[var(--ease-tactile)] group-hover:scale-[1.02]">
          <Image
            src={project.thumbnailImage.src}
            alt=""
            fill
            sizes="330px"
            className="object-cover"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span key={cat} className="rounded bg-sky px-2.5 py-1 font-sans text-sm font-medium text-caption">
              {cat}
            </span>
          ))}
        </div>
        <h3 className="mt-2 font-serif text-lg font-normal text-ink">{project.title}</h3>
      </Link>
    );
  }

  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm"
    >
      <motion.div
        className="relative aspect-[625/420] overflow-hidden rounded-md"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.div
          variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
          transition={{ duration: durations.standard, ease: easeTactile }}
          className="absolute inset-0"
        >
          {/* Shared V2 card backdrop — every large card uses the same painted-sky
              texture, matching the Figma "v2 - project card" component. */}
          <Image
            src="/images/projects/project-card-background.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            priority={priority}
          />
        </motion.div>
        {/* "glass" panel matches Figma's "project image" component: a
            translucent frosted frame around the real mockup, or the navy
            "not ready" placeholder when a project has none yet. */}
        <div className="absolute inset-0 flex items-center justify-center p-[6%]">
          <div className="relative h-full w-full rounded-[5px] bg-glass p-[2%] backdrop-blur-[2px]">
            {project.cardImage ? (
              <Image
                src={project.cardImage.src}
                alt={project.cardImage.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="rounded-[5px] object-cover"
              />
            ) : (
              <div className="h-full w-full rounded-[5px] bg-navy" />
            )}
          </div>
        </div>
      </motion.div>
      <div className="mt-5 flex flex-col gap-2">
        <h2 className="font-serif text-2xl font-normal text-ink">{project.title}</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span key={cat} className="rounded bg-sky px-2.5 py-1 font-sans text-sm font-medium text-caption">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
