"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { getFeaturedProjects } from "@/content/projects";

/**
 * Placeholder hero interaction: a small stack of project "cards" that tilt
 * toward the cursor, evoking physical objects on a digital surface.
 * Structural placeholder — replace visuals once the Figma direction lands.
 */
export function HeroArtifact() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const projects = getFeaturedProjects().slice(0, 3);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 150, damping: 20 });
  const springY = useSpring(my, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);

  function handleMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width);
    my.set((event.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className="relative mx-auto aspect-square w-full max-w-md [perspective:1200px]"
    >
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          className="absolute inset-0 overflow-hidden rounded-sm border border-line bg-paper-raised shadow-[0_20px_40px_-20px_rgba(23,21,15,0.35)]"
          style={{
            zIndex: projects.length - index,
            translateX: `${index * 14}px`,
            translateY: `${index * 14}px`,
            ...(reduced ? {} : { rotateX, rotateY, transformStyle: "preserve-3d" as const }),
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: reduced ? 0 : (index - 1) * 4,
            scale: 1 - index * 0.05,
          }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative h-full w-full">
            <Image
              src={project.thumbnailImage.src}
              alt=""
              fill
              sizes="400px"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
