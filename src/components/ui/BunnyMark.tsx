/** The hand-drawn bunny mark used as the site's home link in the navbar. */
export function BunnyMark({
  className,
  rotateDeg = -13,
}: {
  className?: string;
  rotateDeg?: number;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- decorative hand-drawn SVG, not a next/image candidate
    <img
      src="/images/marks/saki-nav.svg"
      alt=""
      aria-hidden="true"
      className={className}
      style={{ transform: `rotate(${rotateDeg}deg)` }}
    />
  );
}
