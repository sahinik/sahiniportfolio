"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";
import { nav, navSecondary, site, type NavEntry } from "@/content/site";
import { BunnyMark } from "@/components/ui/BunnyMark";
import { requestScrollTo } from "@/lib/scroll-to-hash";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const HEADER_HEIGHT = 82;

const allLinks: NavEntry[] = [...nav, ...navSecondary];

const linkClasses =
  "font-sans text-base text-blue transition-colors duration-[var(--duration-fast)] hover:text-navy";

/**
 * Handles clicks on an anchor-link nav item (href containing "#"):
 * already on that page → scroll immediately, since Next won't re-navigate.
 * Navigating cross-page → record the target so it can be scrolled to once
 * the destination has actually mounted (see scroll-to-hash.ts for why).
 */
function handleAnchorClick(item: NavEntry, active: boolean) {
  return (event: MouseEvent) => {
    const hashIndex = item.href.indexOf("#");
    if (hashIndex === -1) return;
    const hash = item.href.slice(hashIndex);
    if (active) {
      const target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      requestScrollTo(hash);
    }
  };
}

function NavLink({ item, active, className }: { item: NavEntry; active: boolean; className?: string }) {
  if (item.disabled) {
    return (
      <button
        type="button"
        aria-disabled="true"
        title={item.tooltip}
        data-cursor-badge={item.tooltip}
        className={clsx(linkClasses, "cursor-default hover:text-blue", className)}
      >
        {item.label}
      </button>
    );
  }

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(linkClasses, className)}
      >
        {item.label}
      </a>
    );
  }

  const isHashLink = item.href.includes("#");

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onClick={handleAnchorClick(item, active)}
      // For hash links, scroll is handled manually (see scroll-to-hash.ts) —
      // Next's own scroll-to-top-on-navigate would otherwise fight it.
      scroll={!isHashLink}
      className={clsx(linkClasses, active && "font-medium underline underline-offset-4", className)}
    >
      {item.label}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const reducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

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

  useEffect(() => {
    if (reducedMotion) return;
    lastScrollY.current = window.scrollY;
    let ticking = false;

    const updateVisibility = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      const pastHeader = currentY > HEADER_HEIGHT;
      setHidden(scrollingDown && pastHeader);
      lastScrollY.current = currentY;
      ticking = false;
    };

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [reducedMotion]);

  // Never hide behind an open mobile menu, and skip the animation for
  // reduced-motion users — the nav just stays put.
  const navHidden = hidden && !menuOpen && !reducedMotion;

  return (
    <header className="sticky top-0 z-40">
      <motion.div
        className="bg-paper/90 backdrop-blur-sm"
        animate={{ y: navHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
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
              <NavLink
                key={item.label}
                item={item}
                active={pathname === (item.matchPath ?? item.href)}
              />
            ))}
            <Link href="/" aria-label={`${site.name} — home`} className="flex items-center justify-center">
              <BunnyMark className="h-14 w-auto" />
            </Link>
            {navSecondary.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                active={pathname === (item.matchPath ?? item.href)}
              />
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
      </motion.div>

      <div
        id="mobile-nav"
        className={clsx(
          "fixed inset-x-0 top-[82px] bottom-0 z-30 flex flex-col gap-1 overflow-y-auto bg-paper px-(--gutter) py-8 md:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        {allLinks.map((item) => {
          if (item.disabled) {
            return (
              <div
                key={item.label}
                aria-disabled="true"
                className="flex items-center justify-between border-b border-line py-4 font-serif italic text-2xl text-ink/50"
              >
                {item.label}
                <span className="font-sans text-xs font-medium not-italic text-ink/40">
                  {item.tooltip}
                </span>
              </div>
            );
          }
          const itemActive = pathname === (item.matchPath ?? item.href);
          const linkProps = item.external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : { "aria-current": itemActive ? ("page" as const) : undefined };
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={(event) => {
                setMenuOpen(false);
                handleAnchorClick(item, itemActive)(event);
              }}
              scroll={!item.href.includes("#")}
              className="border-b border-line py-4 font-serif italic text-2xl text-ink"
              {...linkProps}
            >
              {item.label}
            </Link>
          );
        })}
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
