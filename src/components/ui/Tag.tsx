import { clsx } from "clsx";

export function Tag({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-wide text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
