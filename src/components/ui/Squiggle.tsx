/** Hand-drawn-style wavy underline accent, used under the "projects" heading. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 16"
      fill="none"
      aria-hidden="true"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        d="M2 8c14-9 28 9 42 0s28-9 42 0 28 9 42 0 28-9 42 0 28 9 42 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
