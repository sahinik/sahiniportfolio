import { site } from "@/content/site";

export function Hero() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-12 pt-12 pb-16 sm:pt-16">
      <div className="relative aspect-[1059/248] w-full overflow-hidden rounded-md">
        {/* eslint-disable-next-line @next/next/no-img-element -- simple decorative vector, not a next/image candidate */}
        <img
          src="/images/marks/hero-shadowbox.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- hand-drawn doodle mascot */}
          <img
            src="/images/marks/cat-doodle.svg"
            alt="A small hand-drawn cat with a cane, peeking out"
            className="h-[45%] w-auto -translate-y-[6%]"
          />
        </div>
      </div>
      <p className="text-center font-sans text-xl text-ink">{site.heroLine}</p>
    </div>
  );
}
