/** The hand-drawn bunny mark used as the site's home link, from the Figma navbar/footer. */
export function BunnyMark({
  className,
  rotateDeg = -13,
  variant = "blue",
}: {
  className?: string;
  rotateDeg?: number;
  /** "blue" for cream backgrounds (navbar), "white" for the dark green footer. */
  variant?: "blue" | "white";
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- decorative hand-drawn SVG, not a next/image candidate
    <img
      src={variant === "white" ? "/images/marks/bunny-mark-white.svg" : "/images/marks/bunny-mark.svg"}
      alt=""
      aria-hidden="true"
      className={className}
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    />
  );
}
