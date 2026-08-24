const KEY = "pending-scroll-hash";

/**
 * Records a hash to scroll to once the destination page has actually
 * mounted. Needed because the custom page-transition (AnimatePresence,
 * mode="wait") delays mounting the new page until the old one's exit
 * animation finishes — Next's own hash-scroll-on-navigation logic runs
 * before that, can't find the target, and drops the hash entirely.
 */
export function requestScrollTo(hash: string) {
  sessionStorage.setItem(KEY, hash);
}

/** Scrolls to a previously-requested hash, if any, and clears the request. */
export function consumePendingScroll() {
  const hash = sessionStorage.getItem(KEY);
  if (!hash) return;
  sessionStorage.removeItem(KEY);
  document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
