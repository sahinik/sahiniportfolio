import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-(--container-max) px-(--gutter) py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl text-ink">Let&apos;s talk.</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block text-sm text-ink-muted underline decoration-line underline-offset-4 hover:text-ink hover:decoration-accent"
            >
              {site.email}
            </a>
          </div>
          <ul className="flex gap-6 text-sm text-ink-muted">
            {site.social.linkedin && (
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  LinkedIn
                </a>
              </li>
            )}
            {site.social.github && (
              <li>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  GitHub
                </a>
              </li>
            )}
          </ul>
        </div>
        <p className="mt-10 text-xs text-ink-muted">
          &copy; {year} {site.name}. Built by hand.
        </p>
      </div>
    </footer>
  );
}
