"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { nav, site } from "@/content/site";

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
      <div className="border-b border-line bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-(--container-max) items-center justify-between px-(--gutter)">
          <Link
            href="/"
            className="font-display text-lg font-medium tracking-tight text-ink"
          >
            {site.name}
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={clsx(
                    "text-sm font-medium transition-colors duration-[var(--duration-fast)]",
                    active ? "text-ink" : "text-ink-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors duration-[var(--duration-fast)] hover:bg-accent hover:text-accent-ink"
            >
              Contact
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center md:hidden"
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
          "fixed inset-x-0 top-16 bottom-0 z-30 flex flex-col gap-1 overflow-y-auto bg-paper px-(--gutter) py-8 md:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className="border-b border-line py-4 font-display text-2xl text-ink"
          >
            {item.label}
          </Link>
        ))}
        <a
          href={`mailto:${site.email}`}
          className="mt-6 inline-flex w-fit items-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
