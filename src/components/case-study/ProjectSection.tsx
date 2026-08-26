import Image from "next/image";
import type { ProjectSection as ProjectSectionType } from "@/types/project";

export function ProjectSectionBlock({ section }: { section: ProjectSectionType }) {
  switch (section.type) {
    case "text":
      return (
        <div className="max-w-2xl">
          {section.heading && (
            <h2 className="font-serif italic text-2xl text-ink">{section.heading}</h2>
          )}
          <p className="mt-3 font-sans text-ink/70 leading-relaxed">{section.body}</p>
        </div>
      );

    case "image":
      return (
        <figure className={section.fullWidth ? undefined : "max-w-2xl"}>
          <div className="relative aspect-video overflow-hidden rounded-md bg-mist">
            <Image
              src={section.src}
              alt={section.alt}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          {section.caption && (
            <figcaption className="mt-3 font-sans text-sm text-ink/60">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "imageGrid":
      return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {section.images.map((image, index) => (
            <figure key={index} className="overflow-hidden rounded-md bg-mist">
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
                <figcaption className="p-3 font-sans text-sm text-ink/60">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="max-w-2xl border-l-2 border-blue py-1 pl-6">
          <p className="font-serif italic text-2xl text-ink">&ldquo;{section.text}&rdquo;</p>
          {section.attribution && (
            <cite className="mt-3 block font-sans text-sm not-italic text-ink/60">
              {section.attribution}
            </cite>
          )}
        </blockquote>
      );

    case "beforeAfter":
      return (
        <div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { label: "Before", image: section.before },
              { label: "After", image: section.after },
            ].map(({ label, image }) => (
              <figure key={label} className="overflow-hidden rounded-md bg-mist">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-3 font-sans text-xs font-medium uppercase tracking-wide text-ink/60">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
          {section.caption && (
            <p className="mt-3 font-sans text-sm text-ink/60">{section.caption}</p>
          )}
        </div>
      );

    case "stats":
      return (
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {section.items.map((item, index) => (
            <div key={index}>
              <p className="font-serif italic text-3xl text-ink">{item.value}</p>
              <p className="mt-1 font-sans text-sm text-ink/60">{item.label}</p>
            </div>
          ))}
        </div>
      );

    case "video":
      return (
        <figure>
          <video
            src={section.src}
            poster={section.poster}
            controls
            className="w-full rounded-md"
          >
            <track kind="captions" />
          </video>
          {section.caption && (
            <figcaption className="mt-3 font-sans text-sm text-ink/60">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "bullets":
      return (
        <ul className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
          {section.items.map((item, index) => (
            <li key={index} className="flex gap-2.5 font-sans text-ink/80">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      );

    case "principles":
      return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {section.items.map((item, index) => (
            <div key={index} className="rounded-lg border border-line bg-mist/60 p-5">
              <p className="font-serif italic text-lg text-ink">{item.title}</p>
              <p className="mt-1.5 font-sans text-sm text-ink/70 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      );

    case "compareList":
      return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-sage bg-sage-pale/40 p-5">
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-olive">
              {section.keptLabel}
            </p>
            <ul className="mt-3 space-y-2">
              {section.kept.map((item, index) => (
                <li key={index} className="font-sans text-sm text-ink/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-line bg-mist/50 p-5">
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-ink/50">
              {section.cutLabel}
            </p>
            <ul className="mt-3 space-y-3">
              {section.cut.map((item, index) => (
                <li key={index}>
                  <p className="font-sans text-sm font-medium text-ink/70 line-through decoration-ink/30">
                    {item.title}
                  </p>
                  <p className="mt-0.5 font-sans text-xs text-ink/50">{item.reason}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case "techStack":
      return (
        <div className="flex flex-wrap gap-2">
          {section.items.map((item, index) => (
            <span
              key={index}
              className="rounded-full border border-line bg-paper px-3 py-1.5 font-sans text-sm text-ink/80"
            >
              {item}
            </span>
          ))}
        </div>
      );

    case "timeline":
      return (
        <ol className="flex flex-col gap-0 sm:grid sm:grid-cols-[auto_1fr] sm:gap-x-4 sm:gap-y-0">
          {section.steps.map((step, index) => (
            <li key={index} className="contents">
              <div className="flex items-center gap-3 sm:contents">
                <span className="font-sans text-sm font-medium text-blue sm:pt-3">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="sm:pt-3">
                  <p className="font-sans text-sm font-medium text-ink">{step.label}</p>
                  {step.detail && (
                    <p className="mt-0.5 font-sans text-xs text-ink/60">{step.detail}</p>
                  )}
                </div>
              </div>
              {index < section.steps.length - 1 && (
                <div className="my-1.5 ml-[0.6rem] h-3 w-px bg-line sm:hidden" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      );

    case "metaGrid": {
      const columns: { label: string; items: string[] }[] = [
        { label: "Role", items: [section.role] },
        { label: "Timeline", items: [section.timeline] },
      ];
      if (section.team?.length) columns.push({ label: "Team", items: section.team });
      if (section.skills?.length) columns.push({ label: "Skills", items: section.skills });

      return (
        <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.label}>
              <dt className="font-sans text-xs font-medium uppercase tracking-wide text-ink/50">
                {col.label}
              </dt>
              <dd className="mt-1.5 flex flex-col gap-0.5">
                {col.items.map((item, i) => (
                  <span key={i} className="font-sans text-sm text-ink">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      );
    }

    case "placeholder": {
      const aspect =
        section.aspect === "square"
          ? "aspect-square"
          : section.aspect === "wide"
            ? "aspect-[21/9]"
            : "aspect-video";
      return (
        <div
          className={`flex ${aspect} w-full items-center justify-center rounded-md border border-dashed border-line bg-mist/60`}
        >
          <p className="px-6 text-center font-sans text-sm text-ink/40">{section.label}</p>
        </div>
      );
    }

    default:
      return null;
  }
}
