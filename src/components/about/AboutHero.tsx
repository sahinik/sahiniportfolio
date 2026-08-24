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
      <div className="relative mx-auto aspect-[513/571] w-full max-w-md">
        <div className="absolute -inset-4 -z-10 overflow-hidden rounded-lg opacity-80 sm:-inset-6">
          <Image
            src="/images/about/portrait-bg.png"
            alt=""
            fill
            sizes="500px"
            className="object-cover"
          />
        </div>
        <div className="relative h-full w-full overflow-hidden rounded-lg shadow-[0_30px_60px_-30px_rgba(36,59,94,0.4)]">
          <Image
            src="/images/about/portrait.png"
            alt="Portrait of Sahini Komandla"
            fill
            sizes="500px"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-3">
          <h1 className="font-hand text-5xl text-blue sm:text-6xl">{site.about.greeting}</h1>
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative hand-drawn sparkle */}
          <img src="/images/marks/sparkle.svg" alt="" aria-hidden="true" className="mt-2 h-8 w-auto" />
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
            src="/images/marks/about-doodle.svg"
            alt=""
            aria-hidden="true"
            className="ml-2 hidden h-16 w-auto sm:block"
          />
        </div>
      </div>
    </div>
  );
}
