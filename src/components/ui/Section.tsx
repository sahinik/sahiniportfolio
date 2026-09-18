import type { ElementType, ReactNode } from "react";
import { clsx } from "clsx";

export function Section({
  children,
  className,
  as: Component = "section",
  id,
  ariaLabel,
  gutter = "px-(--gutter)",
  maxWidth = "max-w-(--container-max)",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
  ariaLabel?: string;
  /** Override the default responsive `--gutter` side padding, e.g. a fixed `"px-[45px]"`. */
  gutter?: string;
  /** Override the default `max-w-(--container-max)` cap. Pass `""` for a full-bleed
   *  container whose side margins stay pinned to `gutter` at every viewport width. */
  maxWidth?: string;
}) {
  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={clsx("mx-auto w-full", maxWidth, gutter, className)}
    >
      {children}
    </Component>
  );
}
