import { Fragment } from "react";

export type RichSegment = { text: string; bold?: boolean; italic?: boolean };
export type RichParagraphData = readonly RichSegment[];

/** Renders a paragraph built from bold/italic segments, matching Figma's inline text formatting. */
export function RichParagraph({
  segments,
  className,
}: {
  segments: RichParagraphData;
  className?: string;
}) {
  return (
    <p className={className}>
      {segments.map((segment, index) => {
        if (segment.bold && segment.italic) {
          return (
            <strong key={index} className="italic">
              {segment.text}
            </strong>
          );
        }
        if (segment.bold) {
          return <strong key={index}>{segment.text}</strong>;
        }
        if (segment.italic) {
          return <em key={index}>{segment.text}</em>;
        }
        return <Fragment key={index}>{segment.text}</Fragment>;
      })}
    </p>
  );
}
