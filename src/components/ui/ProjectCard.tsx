"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { easeTactile, durations } from "@/lib/motion";

export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm"
    >
      <motion.div
        className="relative overflow-hidden rounded-sm border border-line bg-paper-raised"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.04 },
            }}
            transition={{ duration: durations.standard, ease: easeTactile }}
            className="relative h-full w-full"
          >
            <Image
              src={project.thumbnailImage.src}
              alt={project.thumbnailImage.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
              priority={priority}
            />
          </motion.div>
          <motion.span
            aria-hidden
            variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
            transition={{ duration: durations.standard, ease: easeTactile }}
            style={{ originX: 0 }}
            className="absolute bottom-0 left-0 h-1 w-full bg-accent"
          />
        </div>
      </motion.div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-ink">{project.title}</h3>
          <p className="mt-1 text-sm text-ink-muted">{project.category}</p>
        </div>
        <span className="shrink-0 text-sm text-ink-muted">{project.year}</span>
      </div>
      <p className="mt-2 max-w-prose text-sm text-ink-muted">{project.summary}</p>
    </Link>
  );
}
