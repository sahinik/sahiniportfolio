import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import type { LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-lg h-12 px-3 font-sans text-lg font-medium leading-[1.5] transition-colors duration-[var(--duration-fast)] ease-[var(--ease-tactile)] focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  // Matches the Figma about-hero buttons (node 3267:7834): dark navy/blue
  // fills with near-white text, not the older sage-green treatment. The
  // default focus ring (--color-blue) would be invisible against these dark
  // fills, so both override it to the light mist token instead.
  primary: "bg-navy text-mist hover:bg-blue focus-visible:outline-mist",
  secondary: "bg-blue text-mist hover:bg-navy focus-visible:outline-mist",
  ghost: "bg-transparent text-ink border border-line hover:border-blue hover:text-blue",
};

type CommonProps = {
  variant?: Variant;
  icon?: LucideIcon;
  iconPosition?: "start" | "end";
  children: ReactNode;
};

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> &
  CommonProps & {
    href: string;
    external?: boolean;
  };

function IconSlot({ icon: Icon }: { icon: LucideIcon }) {
  return <Icon className="size-5 shrink-0" aria-hidden />;
}

export function LinkButton({
  href,
  variant = "primary",
  icon,
  iconPosition = "end",
  external,
  className,
  children,
  ...props
}: LinkProps) {
  const classes = clsx(base, variants[variant], className);
  const content = (
    <>
      {icon && iconPosition === "start" && <IconSlot icon={icon} />}
      {children}
      {icon && iconPosition === "end" && <IconSlot icon={icon} />}
    </>
  );
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & CommonProps;

export function Button({
  variant = "primary",
  icon,
  iconPosition = "end",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {icon && iconPosition === "start" && <IconSlot icon={icon} />}
      {children}
      {icon && iconPosition === "end" && <IconSlot icon={icon} />}
    </button>
  );
}
