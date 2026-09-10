import Link from "next/link";
import { site, footerNav } from "@/content/site";

export function Footer() {
  return (
    <footer className="w-full pt-10 sm:pt-16">
      <div className="relative overflow-hidden bg-blue p-10 sm:p-14">
        <div className="relative flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-mist">
            <p className="font-hand text-4xl sm:text-5xl">{site.handle}</p>
            <p className="mt-1 font-sans text-lg">{site.tagline}</p>
          </div>

          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="order-first self-center sm:order-none"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- hand-painted cat illustration, not a next/image candidate for a small decorative mark */}
            <img
              src="/images/marks/static-cat-footer.png"
              alt=""
              aria-hidden="true"
              className="h-24 w-auto sm:h-28"
            />
          </Link>

          <div className="flex gap-12 text-mist">
            <div>
              <p className="font-hand text-2xl">navigation</p>
              <ul className="mt-1 space-y-0.5 font-sans text-lg">
                {footerNav.navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-hand text-2xl">let&apos;s chat!</p>
              <ul className="mt-1 space-y-0.5 font-sans text-lg">
                {footerNav.connect.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="hover:underline"
                      {...(item.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
