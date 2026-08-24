import Link from "next/link";
import { site, footerNav } from "@/content/site";
import { BunnyMark } from "@/components/ui/BunnyMark";

export function Footer() {
  return (
    <footer className="mx-auto w-full max-w-(--container-max) px-(--gutter) py-10 sm:py-16">
      <div
        className="relative overflow-hidden rounded-lg bg-footer bg-cover bg-bottom px-6 py-10 sm:px-12 sm:py-14"
        style={{ backgroundImage: "url(/images/home/footer-texture.png)" }}
      >
        <div className="relative flex flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-navy">
            <p className="font-hand text-4xl sm:text-5xl">{site.handle}</p>
            <p className="mt-1 font-sans text-lg">{site.tagline}</p>
          </div>

          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="order-first self-center sm:order-none"
          >
            <BunnyMark variant="white" rotateDeg={-8} className="h-24 w-auto sm:h-28" />
          </Link>

          <div className="flex gap-12 text-navy">
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
