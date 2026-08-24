import { clsx } from "clsx";

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded bg-sky px-2.5 py-1 font-sans text-sm font-medium text-caption",
        className,
      )}
    >
      {children}
    </span>
  );
}
