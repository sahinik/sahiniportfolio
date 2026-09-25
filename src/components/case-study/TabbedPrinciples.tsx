"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CaretDown, CaretUp } from "@phosphor-icons/react/ssr";
import { clsx } from "clsx";
import type { ProjectSection } from "@/types/project";

type Section = Extract<ProjectSection, { type: "tabbedPrinciples" }>;
type Item = Section["items"][number];

function hasMedia(item: Item) {
  return Boolean(item.image || item.video);
}

/** `contain`: fills its parent box, letterboxed (used for the desktop
 *  `sideBySide` panel). `natural`: sizes to its own intrinsic aspect ratio
 *  (used everywhere else, including the mobile accordion). */
function MediaContent({ item, mode }: { item: Item; mode: "contain" | "natural" }) {
  if (item.video) {
    return (
      <video
        src={item.video.src}
        poster={item.video.poster}
        controls
        className={mode === "contain" ? "h-full w-full object-contain" : "w-full rounded-md"}
      >
        <track kind="captions" />
      </video>
    );
  }
  if (item.image) {
    return mode === "contain" ? (
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-contain"
      />
    ) : (
      <Image
        src={item.image.src}
        alt={item.image.alt}
        width={item.image.width}
        height={item.image.height}
        sizes="100vw"
        className="h-auto w-full rounded-md"
      />
    );
  }
  return null;
}

function TabCard({
  item,
  isActive,
  onSelect,
  panelId,
}: {
  item: Item;
  isActive: boolean;
  onSelect: () => void;
  panelId: string;
}) {
  const cardClassName = clsx(
    "rounded-[10px] border p-[18px] text-left transition-colors",
    isActive ? "border-blue bg-sky" : "border-line",
  );

  if (!hasMedia(item)) {
    return (
      <div className={cardClassName}>
        <p className="font-serif text-[17px] text-ink">{item.title}</p>
        <p className="mt-2 font-sans text-[13px] leading-[1.4] text-ink/80">{item.body}</p>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      aria-controls={panelId}
      className={clsx(cardClassName, "cursor-pointer hover:border-blue")}
    >
      <p className="font-serif text-[17px] text-ink">{item.title}</p>
      <p className="mt-2 font-sans text-[13px] leading-[1.4] text-ink/80">{item.body}</p>
    </button>
  );
}

/** Mobile-only: each tab is its own collapsible card, with a chevron
 *  toggling its media open beneath it. Only one card is open at a time. */
function AccordionCard({
  item,
  isOpen,
  onToggle,
}: {
  item: Item;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const media = hasMedia(item);
  const cardClassName = clsx(
    "overflow-hidden rounded-[10px] border transition-colors",
    isOpen ? "border-blue bg-sky" : "border-line",
  );

  if (!media) {
    return (
      <div className={clsx(cardClassName, "p-[18px]")}>
        <p className="font-serif text-[17px] text-ink">{item.title}</p>
        <p className="mt-2 font-sans text-[13px] leading-[1.4] text-ink/80">{item.body}</p>
      </div>
    );
  }

  const Caret = isOpen ? CaretUp : CaretDown;

  return (
    <div className={cardClassName}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-start justify-between gap-3 p-[18px] text-left"
      >
        <span>
          <p className="font-serif text-[17px] text-ink">{item.title}</p>
          <p className="mt-2 font-sans text-[13px] leading-[1.4] text-ink/80">{item.body}</p>
        </span>
        <Caret className="mt-1 size-4 shrink-0 text-ink" aria-hidden />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-[18px] pb-[18px]">
              <MediaContent item={item} mode="natural" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MediaViewer({ item, activeIndex, fill = false }: { item: Item; activeIndex: number; fill?: boolean }) {
  if (!item.image && !item.video) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={fill ? "absolute inset-0" : undefined}
      >
        <MediaContent item={item} mode={fill ? "contain" : "natural"} />
      </motion.div>
    </AnimatePresence>
  );
}

export function TabbedPrinciples({ items, layout = "stacked" }: { items: Item[]; layout?: Section["layout"] }) {
  const initialIndex = Math.max(0, items.findIndex(hasMedia));
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const active = items[activeIndex];
  // Links each tab button to the panel it controls (aria-controls) — the
  // panel is also aria-live so a screen reader announces that its content
  // changed when a different tab is selected, since nothing else does.
  const panelId = useId();

  const accordion = (
    <div className="flex flex-col gap-4 sm:hidden">
      {items.map((item, index) => (
        <AccordionCard
          key={index}
          item={item}
          isOpen={index === activeIndex}
          onToggle={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );

  if (layout === "sideBySide") {
    return (
      <div>
        {accordion}
        <div className="hidden gap-6 sm:flex">
          <div className="flex w-full shrink-0 flex-col gap-4 sm:w-[280px]">
            {items.map((item, index) => (
              <TabCard
                key={index}
                item={item}
                isActive={index === activeIndex}
                onSelect={() => setActiveIndex(index)}
                panelId={panelId}
              />
            ))}
          </div>
          <div
            id={panelId}
            aria-live="polite"
            className="relative min-h-[300px] min-w-0 flex-1 overflow-hidden rounded-md bg-mist"
          >
            <MediaViewer item={active} activeIndex={activeIndex} fill />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {accordion}
      <div className="hidden flex-col gap-6 sm:flex">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {items.map((item, index) => (
            <TabCard
              key={index}
              item={item}
              isActive={index === activeIndex}
              onSelect={() => setActiveIndex(index)}
              panelId={panelId}
            />
          ))}
        </div>
        <div id={panelId} aria-live="polite">
          <MediaViewer item={active} activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
}
