import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  return (
    // Extra 20% horizontal padding beyond the shared Section gutter, so the
    // hero content sits further from the edges and reads more centered.
    <div
      className="flex flex-col items-center gap-10 pt-12 pb-16 sm:pt-16 md:flex-row md:items-center md:justify-between md:gap-12"
      style={{ paddingInline: "calc(var(--gutter) * 0.2)" }}
    >
      <div className="max-w-xl text-center md:text-left">
        <h1 className="font-hand text-4xl text-blue sm:text-5xl">{site.homeGreeting}</h1>
        <p className="mt-3 font-sans text-lg sm:text-xl">
          <span className="text-ink">product designer and researcher</span>{" "}
          <span className="text-ink/75">making accessible design feel like craft, not compliance.</span>
        </p>
      </div>
      <div className="relative aspect-[4096/1714] w-full max-w-lg shrink-0 md:w-[42%]">
        <Image
          src="/images/marks/static-cat-hero.png"
          alt="A hand-painted illustration of a black cat peering into a lily pond"
          fill
          sizes="(min-width: 768px) 40vw, 90vw"
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
