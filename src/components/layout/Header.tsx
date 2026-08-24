"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { nav, navSecondary, site } from "@/content/site";
import { BunnyMark } from "@/components/ui/BunnyMark";

const allLinks = [...nav, ...navSecondary];

function NavLink({
  href,
  label,
  active,
  className,
}: {
  href: string;
  label: string;
  active: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "font-sans text-base text-blue transition-colors duration-[var(--duration-fast)] hover:text-navy",
        active && "font-medium underline underline-offset-4",
        className,
      )}
    >
      {label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-paper/90 backdrop-blur-sm">
        <div className="relative mx-auto flex h-[82px] w-full max-w-(--container-max) items-center justify-center px-(--gutter)">
          {/* Mobile: bunny mark at left as home link */}
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="absolute left-(--gutter) flex items-center md:hidden"
          >
            <BunnyMark className="h-10 w-auto" />
          </Link>

          {/* Desktop: single centered cluster, matching the Figma navbar */}
          <nav aria-label="Primary" className="hidden items-center gap-10 lg:gap-16 md:flex">
            {nav.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
            ))}
            <Link href="/" aria-label={`${site.name} — home`} className="flex items-center justify-center">
              <BunnyMark className="h-14 w-auto" />
            </Link>
            {navSecondary.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} active={pathname === item.href} />
            ))}
          </nav>

          <button
            type="button"
            className="absolute right-(--gutter) flex h-10 w-10 items-center justify-center md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative block h-4 w-6" aria-hidden>
              <span
                className={clsx(
                  "absolute left-0 top-0 h-0.5 w-6 bg-ink transition-transform duration-[var(--duration-fast)]",
                  menuOpen && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 bottom-0 h-0.5 w-6 bg-ink transition-transform duration-[var(--duration-fast)]",
                  menuOpen && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={clsx(
          "fixed inset-x-0 top-[82px] bottom-0 z-30 flex flex-col gap-1 overflow-y-auto bg-paper px-(--gutter) py-8 md:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        {allLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className="border-b border-line py-4 font-serif italic text-2xl text-ink"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-flex w-fit items-center rounded-lg bg-sage-pale px-5 py-3 text-sm font-medium text-olive"
        >
          say hi
        </a>
      </div>
    </header>
  );
}
