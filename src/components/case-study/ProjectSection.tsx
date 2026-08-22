import Image from "next/image";
import type { ProjectSection as ProjectSectionType } from "@/types/project";

export function ProjectSectionBlock({ section }: { section: ProjectSectionType }) {
  switch (section.type) {
    case "text":
      return (
        <div className="mx-auto max-w-2xl py-8">
          {section.heading && (
            <h2 className="font-display text-2xl text-ink">{section.heading}</h2>
          )}
          <p className="mt-3 text-ink-muted leading-relaxed">{section.body}</p>
        </div>
      );

    case "image":
      return (
        <figure className={section.fullWidth ? "py-8" : "mx-auto max-w-2xl py-8"}>
          <div className="relative aspect-video overflow-hidden rounded-sm border border-line bg-paper-raised">
            <Image
              src={section.src}
              alt={section.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {section.caption && (
            <figcaption className="mt-3 text-sm text-ink-muted">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "imageGrid":
      return (
        <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2">
          {section.images.map((image, index) => (
            <figure key={index} className="overflow-hidden rounded-sm border border-line bg-paper-raised">
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              {image.caption && (
                <figcaption className="p-3 text-sm text-ink-muted">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="mx-auto max-w-2xl border-l-2 border-accent py-8 pl-6">
          <p className="font-display text-2xl text-ink">&ldquo;{section.text}&rdquo;</p>
          {section.attribution && (
            <cite className="mt-3 block text-sm not-italic text-ink-muted">
              {section.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "beforeAfter":
      return (
        <div className="py-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { label: "Before", image: section.before },
              { label: "After", image: section.after },
            ].map(({ label, image }) => (
              <figure key={label} className="overflow-hidden rounded-sm border border-line bg-paper-raised">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3 text-xs font-medium uppercase tracking-wide text-ink-muted">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
          {section.caption && (
            <p className="mt-3 text-sm text-ink-muted">{section.caption}</p>
          )}
        </div>
      );

    case "stats":
      return (
        <div className="grid grid-cols-2 gap-8 py-8 sm:grid-cols-3">
          {section.items.map((item, index) => (
            <div key={index}>
              <p className="font-display text-3xl text-ink">{item.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{item.label}</p>
            </div>
          ))}
        </div>
      );

    case "video":
      return (
        <figure className="py-8">
          <video
            src={section.src}
            poster={section.poster}
            controls
            className="w-full rounded-sm border border-line"
          >
            <track kind="captions" />
          </video>
          {section.caption && (
            <figcaption className="mt-3 text-sm text-ink-muted">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}
