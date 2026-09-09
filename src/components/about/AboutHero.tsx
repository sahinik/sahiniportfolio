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
    <div className="flex flex-col items-center gap-16 pt-8 pb-16 sm:pt-12">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element -- decorative hand-drawn mascot, positioned freely against the polaroid */}
        <img
          src="/images/marks/saki-hello.svg"
          alt=""
          aria-hidden="true"
          className="absolute -left-16 top-4 hidden h-28 w-auto sm:block lg:-left-24"
        />
        <Image
          src="/images/about/grad-polaroid.png"
          alt={`Polaroid photo of Sahini Komandla in graduation attire, holding a bouquet of flowers, captioned "${site.about.polaroidCaption}"`}
          width={1626}
          height={1952}
          sizes="(min-width: 640px) 480px, 90vw"
          className="h-auto w-full max-w-[480px] drop-shadow-[0_25px_35px_rgba(36,59,94,0.25)]"
          quality={100}
          priority
        />
      </div>

      <div className="grid w-full grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="font-hand text-4xl text-blue sm:text-5xl">{site.about.greeting}</h1>
          <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-ink">
            {site.about.introParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-6 font-sans text-base leading-relaxed text-ink">
            {site.about.moreParagraphs.map((paragraph, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
}
