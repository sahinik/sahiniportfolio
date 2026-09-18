import Image from "next/image";
import { Newspaper, UsersThree, PersonSimpleThrow, CheckCircle, Backspace } from "@phosphor-icons/react/ssr";
import type { ProjectSection as ProjectSectionType } from "@/types/project";

const statCardIcons = { newspaper: Newspaper, users: UsersThree, run: PersonSimpleThrow };

export function ProjectSectionBlock({ section }: { section: ProjectSectionType }) {
  switch (section.type) {
    case "text":
      return (
        <div className={section.fullWidth ? undefined : "max-w-2xl"}>
          {section.heading && (
            <h2 className="font-serif text-xl text-ink">{section.heading}</h2>
          )}
          <p className="mt-3 font-sans text-base leading-[1.5] text-ink/80">{section.body}</p>
        </div>
      );

    case "image":
      return (
        <figure className={section.fullWidth ? undefined : "max-w-2xl"}>
          <div
            className="relative overflow-hidden rounded-md bg-mist"
            style={{ aspectRatio: section.aspectRatio ?? "16/9" }}
          >
            <Image
              src={section.src}
              alt={section.alt}
              fill
              sizes="100vw"
              className="object-cover"
              // Next's optimizer flattens GIFs to a single static frame —
              // skip it so animated GIFs actually play.
              unoptimized={section.src.endsWith(".gif")}
            />
          </div>
          {section.caption && (
            <figcaption
              className={
                section.captionVariant === "accent-italic"
                  ? "mt-2 text-center font-sans text-[14px] font-medium italic text-caption"
                  : "mt-3 font-sans text-[13px] text-ink/80"
              }
            >
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
                <figcaption className="p-3 font-sans text-[13px] text-ink/80">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      );

    case "quote":
      return (
        <blockquote className="max-w-2xl border-l-2 border-blue py-1 pl-[15px]">
          <p className="font-serif text-[16px] italic leading-[1.3] text-ink">
            &ldquo;{section.text}&rdquo;
          </p>
          {section.attribution && (
            <cite className="mt-0.5 block font-sans text-[12px] italic text-ink/80">
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
                <figcaption className="p-3 font-sans text-xs font-medium uppercase tracking-wide text-ink/80">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
          {section.caption && (
            <p className="mt-3 font-sans text-[13px] text-ink/80">{section.caption}</p>
          )}
        </div>
      );

    case "stats":
      return (
        <div className="flex flex-wrap gap-x-[70px] gap-y-6">
          {section.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <p className="font-serif text-[40px] leading-none text-caption">{item.value}</p>
              <p className="mt-1 font-sans text-[13px] text-ink">{item.label}</p>
            </div>
          ))}
        </div>
      );

    case "statCards":
      return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {section.items.map((item, index) => {
            const Icon = statCardIcons[item.icon];
            return (
              <div
                key={index}
                className="relative flex flex-col gap-2.5 overflow-hidden rounded-[4px] bg-mist px-3 pb-3 pt-16"
              >
                <Icon
                  className="pointer-events-none absolute -top-4 right-3 size-24 rotate-[10deg] text-blue/25"
                  aria-hidden
                  weight="regular"
                />
                <div className="relative flex flex-col items-start text-ink">
                  <p className="font-serif text-[40px] leading-none">{item.value}</p>
                  <p className="font-sans text-[13px]">{item.label}</p>
                </div>
                <div className="h-px w-[47px] bg-ink/25" />
                <p className="relative font-sans text-[13px] leading-normal text-navy">
                  {item.description}
                </p>
              </div>
            );
          })}
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
            <figcaption className="mt-3 font-sans text-[13px] text-ink/80">
              {section.caption}
            </figcaption>
          )}
        </figure>
      );

    case "bullets":
      return (
        <ul
          className={
            section.columns === 1
              ? "grid grid-cols-1 gap-x-8 gap-y-2"
              : "grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2"
          }
        >
          {section.items.map((item, index) => (
            <li key={index} className="flex gap-2.5 font-sans text-[15px] leading-[1.4] text-ink/80">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      );

    case "principles":
      return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
          {section.items.map((item, index) => (
            <div key={index} className="rounded-[10px] border border-blue p-[18px]">
              <p className="font-serif text-[17px] text-ink">{item.title}</p>
              <p className="mt-2 font-sans text-[13px] leading-[1.4] text-ink/80">{item.body}</p>
            </div>
          ))}
        </div>
      );

    case "compareList":
      return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-3.5 rounded-[10px] border border-sage bg-[#dff2de] p-5">
            <p className="font-sans text-xs tracking-wide text-olive">{section.keptLabel}</p>
            <ul className="flex flex-col gap-3.5">
              {section.kept.map((item, index) => (
                <li key={index} className="flex gap-1">
                  <CheckCircle className="mt-0.5 size-[19px] shrink-0 text-olive" weight="regular" aria-hidden />
                  <div>
                    <p className="font-sans text-sm text-ink">{item.title}</p>
                    <p className="mt-0.5 font-sans text-xs leading-[1.4] text-ink/80">{item.reason}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3.5 rounded-[10px] border border-[rgba(192,68,68,0.4)] bg-[#fff2ef] p-5">
            <p className="font-sans text-xs tracking-wide text-ink">{section.cutLabel}</p>
            <ul className="flex flex-col gap-3.5">
              {section.cut.map((item, index) => (
                <li key={index} className="flex gap-1">
                  <Backspace className="mt-0.5 size-[19px] shrink-0 text-ink/60" weight="regular" aria-hidden />
                  <div>
                    <p className="font-sans text-sm text-ink">{item.title}</p>
                    <p className="mt-0.5 font-sans text-xs leading-[1.4] text-ink/80">{item.reason}</p>
                  </div>
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
                    <p className="mt-0.5 font-sans text-xs text-ink/80">{step.detail}</p>
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
        <dl className="grid grid-cols-2 gap-x-10 gap-y-4 rounded-[4px] bg-navy px-5 py-4 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.label}>
              <dt className="font-sans text-xs font-medium uppercase tracking-wide text-mist">
                {col.label}
              </dt>
              <dd className="mt-1.5 flex flex-col gap-0.5">
                {col.items.map((item, i) => (
                  <span key={i} className="font-sans text-sm text-[#acd0ff]">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      );
    }

    case "row":
      return (
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
          {section.items.map((item, index) => (
            <div
              key={index}
              className="min-w-0"
              style={item.width ? { width: item.width, flexShrink: 0 } : { flex: 1 }}
            >
              <ProjectSectionBlock section={item.block} />
            </div>
          ))}
        </div>
      );

    case "stack":
      return (
        <div className="flex flex-col gap-[25px]">
          {section.items.map((block, index) => (
            <ProjectSectionBlock key={index} section={block} />
          ))}
        </div>
      );

    case "placeholder": {
      const aspect =
        section.aspect === "square"
          ? "aspect-square"
          : section.aspect === "wide"
            ? "aspect-[21/9]"
            : section.aspect === "banner"
              ? "h-11"
              : "aspect-video";
      return (
        <div
          className={`flex ${aspect} w-full items-center justify-center rounded-md border border-dashed border-line bg-mist/60`}
        >
          <p className="px-6 text-center font-sans text-sm text-ink/75">{section.label}</p>
        </div>
      );
    }

    default:
      return null;
  }
}
