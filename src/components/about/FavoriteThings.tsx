import type { CSSProperties } from "react";
import Image from "next/image";
import { SpinningCD } from "@/components/about/SpinningCD";

/**
 * Each PNG is a pre-cut, already-rotated cutout straight from Figma (tilt,
 * drop shadow and all) — sizing follows each cutout's real aspect ratio.
 * Sizes are fixed (not shrunk per breakpoint): the staggered, overlapping
 * row only has room once the viewport reaches `lg`, so below that the four
 * items stack vertically instead of shrinking to fit. On hover, the cursor
 * swaps to the matching badge from Figma's "cursor badge" component set
 * instead of the item moving.
 */
const items = [
  {
    src: "/images/favorites/music-fav.png",
    alt: "A CD in a jewel case, one of my favorite albums",
    kind: "cd" as const,
    className: "w-[230px]",
    offset: -20,
    z: "z-10",
  },
  {
    src: "/images/favorites/drawing-fav.png",
    alt: "A digital portrait I drew, shown on an iPad next to an Apple Pencil",
    kind: "image" as const,
    width: 869,
    height: 869,
    className: "w-[317px] lg:-ml-[63px]",
    offset: -41,
    z: "z-30",
    cursorBadge: "digital art",
    cursorIcon: "brush",
  },
  {
    src: "/images/favorites/pottery-fav.png",
    alt: "A ceramic dish holding jewelry and a small frog figurine",
    kind: "image" as const,
    width: 538,
    height: 484,
    className: "w-[208px] lg:-ml-[86px]",
    offset: 36,
    z: "z-40",
    cursorBadge: "painted smiski pottery + fav jewelry",
    cursorIcon: "gem",
  },
  {
    src: "/images/favorites/film-fav.png",
    alt: "A digital camera with a sunset photo on its screen, a charm keychain hanging off it",
    kind: "image" as const,
    width: 879,
    height: 691,
    className: "w-[317px] lg:-ml-20",
    offset: 7,
    z: "z-10",
    cursorBadge: "taken on film",
    cursorIcon: "camera",
  },
];

export function FavoriteThings() {
  return (
    <div className="py-16 sm:py-20">
      <h2 className="text-center font-hand text-4xl text-blue sm:text-5xl">some favorite things</h2>
      <div className="mt-16 flex flex-col items-center gap-[2px] sm:mt-20 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-0">
        {items.map((item) => (
          <div
            key={item.src}
            className={`relative ${item.className} ${item.z} lg:translate-y-[var(--offset)]`}
            style={{ "--offset": `${item.offset}px` } as CSSProperties}
            // The CD's cursor badge is stateful (play/pause), so SpinningCD
            // sets it directly on its own button instead of here.
            {...(item.kind === "image"
              ? { "data-cursor": "", "data-cursor-badge": item.cursorBadge, "data-cursor-icon": item.cursorIcon }
              : {})}
          >
            {item.kind === "cd" ? (
              <SpinningCD />
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="317px"
                className="h-auto w-full"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
