"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const photos: Photo[] = [
  {
    src: "/images/about/sunset-polaroid.png",
    alt: 'Polaroid captioned "one of my fav sunsets at NYC taken on film"',
    width: 1024,
    height: 1254,
  },
  {
    src: "/images/about/sipping-polaroid.png",
    alt: 'Polaroid captioned "sipping performative green juice"',
    width: 1024,
    height: 1254,
  },
  {
    src: "/images/about/grad-polaroid.png",
    alt: 'Polaroid photo of Sahini Komandla in graduation attire, holding a bouquet of flowers, captioned "graduated from UW MS HCDE!"',
    width: 1626,
    height: 1952,
  },
];

/** Indexed by role (0 = back-left, 1 = back-right, 2 = front) — how close together the fan sits at rest and how it opens up further on hover. */
const REST = [
  { x: -30, rotate: -8, y: 0 },
  { x: 48, rotate: 8, y: 0 },
  { x: 0, rotate: 0, y: 0 },
] as const;

const HOVER = [
  { x: -40, rotate: -14, y: 0 },
  { x: 60, rotate: 14, y: 0 },
  { x: 0, rotate: 0, y: -12 },
] as const;

const FRONT_ROLE = photos.length - 1;

/**
 * Replicates the polaroid-stack interaction at bevyip.com/about: a fanned
 * stack that spreads open further on hover. Clicking the front photo cycles
 * it to the back of the stack, bringing the next one to the front — the
 * photos keep circulating with each click.
 */
export function PolaroidStack() {
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);
  const [frontOffset, setFrontOffset] = useState(0);

  function cycle() {
    setFrontOffset((offset) => (offset + 1) % photos.length);
  }

  return (
    <div
      className="relative mx-auto aspect-[1626/1952] w-full max-w-[420px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {photos.map((photo, index) => {
        const role = (index - frontOffset + photos.length) % photos.length;
        const isFront = role === FRONT_ROLE;
        const position = hovered ? HOVER[role] : REST[role];

        return (
          <motion.div
            key={photo.src}
            className={isFront ? "absolute inset-0 cursor-pointer" : "absolute inset-0"}
            style={{ transformOrigin: "50% 50%" }}
            initial={
              reduced ? false : { opacity: 0, y: 48, rotate: REST[role].rotate, x: REST[role].x }
            }
            animate={{
              opacity: 1,
              x: position.x,
              y: position.y ?? 0,
              rotate: position.rotate,
              zIndex: role,
            }}
            transition={
              reduced
                ? { duration: 0.01 }
                : { type: "spring", stiffness: 260, damping: 22, delay: index * 0.08 }
            }
            onClick={isFront ? cycle : undefined}
            whileTap={isFront && !reduced ? { scale: 0.97 } : undefined}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 640px) 420px, 90vw"
              className="h-full w-full object-contain drop-shadow-[0_18px_26px_rgba(36,59,94,0.10)]"
              quality={100}
              priority={isFront}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
