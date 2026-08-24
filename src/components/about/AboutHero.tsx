"use client";

import { useState } from "react";
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
    <div className="grid grid-cols-1 items-center gap-12 pt-8 pb-16 sm:pt-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <div className="relative mx-auto w-full max-w-md pb-8 pl-[14%] pt-6 sm:max-w-lg">
        {/* Decorative backdrop, offset behind and above-left of the portrait — matches the Figma hero's off-center layering. */}
        <div className="absolute left-0 top-0 aspect-[513/571] w-[74%] overflow-hidden rounded-lg shadow-[0_20px_45px_-25px_rgba(36,59,94,0.5)]">
          <Image
            src="/images/about/cloud-pattern.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 380px, 300px"
            className="object-cover"
            quality={100}
          />
        </div>
        {/* Portrait cutout, shifted right and down over the backdrop, extending past it. */}
        <div className="relative">
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
