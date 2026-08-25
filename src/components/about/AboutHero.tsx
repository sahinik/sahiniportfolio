"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { Mail, ArrowUpRight, Check } from "lucide-react";
import { site } from "@/content/site";
import { Button, LinkButton } from "@/components/ui/Button";

export function AboutHero() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  }

  return (
    <div className="grid grid-cols-1 items-center gap-12 pt-8 pb-16 sm:pt-12 lg:grid-cols-[1fr_1.1fr] lg:items-stretch lg:gap-16">
      <div
        className="relative lg:flex lg:flex-col lg:justify-center"
        style={
          {
            // Distance from the true viewport left edge to the right edge of
            // the left grid column (1fr of the lg:grid-cols-[1fr_1.1fr]
            // split), i.e. where the lg:gap-16 gutter to the text column
            // begins. Keep the 4rem/2.1 below in sync if those grid values
            // change. Used at lg: (+ the gap width, - a small buffer) to
            // land the backdrop's right edge just before the text column,
            // however wide the viewport gets.
            "--col-right":
              "calc(max(0px, (100vw - var(--container-max)) / 2) + var(--gutter) + (min(100vw, var(--container-max)) - 2 * var(--gutter) - 4rem) / 2.1)",
          } as CSSProperties
        }
      >
        {/*
          Cloud-pattern backdrop, full-bleed to the viewport's left edge on
          tablet/desktop (right edge anchored towards the horizontal middle
          of the screen, capped so it never overlaps the text column once
          the two-column grid kicks in at lg:), and to both edges on mobile.
          The aspect ratio matches the source image 1:1 on mobile (no
          cropping); on tablet it's a taller crop behind the portrait. At
          lg: (desktop, side-by-side), height instead matches the text
          column's own height exactly, via the lg:items-stretch grid row.
        */}
        <div
          className="absolute top-6 aspect-[1306/954] overflow-hidden rounded-none shadow-[0_20px_45px_-25px_rgba(36,59,94,0.5)] left-[calc(-1*(var(--gutter)_+_max(0px,_(100vw_-_var(--container-max))_/_2)))] right-[calc(-1*(var(--gutter)_+_max(0px,_(100vw_-_var(--container-max))_/_2)))] sm:right-auto sm:aspect-[513/571] sm:w-[50vw] sm:rounded-tl-none sm:rounded-bl-none sm:rounded-tr-[5px] sm:rounded-br-[5px] lg:top-0 lg:h-full lg:w-[calc(var(--col-right)_+_4rem_-_24px)] lg:aspect-auto"
        >
          <Image
            src="/images/about/cloud-pattern.jpg"
            alt=""
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
            quality={100}
          />
        </div>
        {/* Portrait cutout, shifted right and down over the backdrop, extending past it. */}
        <div className="relative mx-auto w-full max-w-md pb-8 pl-[14%] pt-6 sm:max-w-lg">
          <Image
            src="/images/about/grad-photo.png"
            alt="Sahini Komandla in graduation attire, holding a bouquet of flowers"
            width={1194}
            height={1614}
            sizes="(min-width: 1024px) 420px, 320px"
            className="h-auto w-full drop-shadow-[0_25px_35px_rgba(36,59,94,0.35)]"
            quality={100}
            priority
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-3">
          <h1 className="font-hand text-5xl text-blue sm:text-6xl">{site.about.greeting}</h1>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative hand-drawn sparkle */}
          <img src="/images/marks/smiley.svg" alt="" aria-hidden="true" className="mt-2 h-8 w-auto" />
        </div>

        <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-ink">
          {site.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button variant="secondary" icon={copied ? Check : Mail} onClick={copyEmail}>
            {copied ? "copied!" : "copy email"}
          </Button>
          <LinkButton href="/resume" icon={ArrowUpRight}>
            view resume
          </LinkButton>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative hand-drawn doodle */}
          <img
            src="/images/marks/saki-about.svg"
            alt=""
            aria-hidden="true"
            className="ml-2 hidden h-16 w-auto sm:block"
          />
        </div>
      </div>
    </div>
  );
}
