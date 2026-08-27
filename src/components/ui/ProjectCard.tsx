"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { easeTactile, durations } from "@/lib/motion";

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  if (project.size === "small") {
    return (
      <Link href={`/work/${project.slug}`} className="group block w-full max-w-[271px] focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm">
        <div className="relative aspect-[271/197] overflow-hidden rounded-md bg-navy transition-transform duration-[var(--duration-standard)] ease-[var(--ease-tactile)] group-hover:scale-[1.02]" />
        <h3 className="mt-3 font-sans text-lg font-normal text-ink">{project.title}</h3>
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
          <Image
            src={project.coverImage.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
            priority={priority}
          />
        </motion.div>
        {/* "glass" media placeholder panel, matching the Figma project-card spec */}
        <div className="absolute inset-0 flex items-center justify-center p-[6%]">
          <div className="h-full w-full rounded-[5px] bg-glass p-[2%] backdrop-blur-[2px]">
            <div className="h-full w-full rounded-[5px] bg-navy" />
          </div>
        </div>
      </motion.div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <h2 className="font-serif italic text-2xl text-ink">{project.title}</h2>
        <span className="shrink-0 rounded bg-sky px-2.5 py-1 font-sans text-sm font-medium text-caption">
          {project.category}
        </span>
      </div>
    </Link>
  );
}
