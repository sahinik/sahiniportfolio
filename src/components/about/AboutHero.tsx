"use client";

import { useState } from "react";
import { Envelope, ArrowUpRight, Check } from "@phosphor-icons/react";
import { site } from "@/content/site";
import { Button, LinkButton } from "@/components/ui/Button";
import { RichParagraph } from "@/components/ui/RichText";
import { PolaroidStack } from "@/components/about/PolaroidStack";

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
    <div className="flex flex-col items-center gap-16 pt-[72px] pb-16 sm:pt-[88px]">
      <div className="relative w-full max-w-[420px]">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative hand-drawn mascot, positioned freely against the polaroid stack */}
        <img
          src="/images/marks/saki-hello.svg"
          alt=""
          aria-hidden="true"
          className="absolute -left-16 top-4 z-10 hidden h-28 w-auto sm:block lg:-left-24"
        />
        <PolaroidStack />
      </div>

      <div className="flex w-full max-w-[542px] flex-col gap-[35px]">
        <div className="flex items-center gap-3">
          <h1 className="font-hand text-4xl text-blue sm:text-5xl">{site.about.greeting}</h1>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative hand-drawn smiley, stands in for a literal ":))" */}
          <img src="/images/marks/smiley.svg" alt="" aria-hidden="true" className="h-7 w-auto sm:h-9" />
        </div>

        <div className="flex flex-col gap-[30px] font-sans text-base leading-[1.875] text-ink">
          {site.about.paragraphs.map((paragraph, index) => (
            <RichParagraph key={index} segments={paragraph} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-[18px] pt-4">
          <Button variant="secondary" icon={copied ? Check : Envelope} onClick={copyEmail}>
            {copied ? "copied!" : "copy email"}
          </Button>
          <LinkButton href={site.resumeUrl} external icon={ArrowUpRight}>
            view resume
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
