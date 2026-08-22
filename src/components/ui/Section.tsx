import type { ElementType, ReactNode } from "react";
import { clsx } from "clsx";

export function Section({
  children,
  className,
  as: Component = "section",
  id,
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
  ariaLabel?: string;
}) {
  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={clsx("mx-auto w-full max-w-(--container-max) px-(--gutter)", className)}
    >
      {children}
    </Component>
  );
}
