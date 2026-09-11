import Link from "next/link";
import { site, footerNav } from "@/content/site";

export function Footer() {
  return (
    <footer className="w-full pt-10 sm:pt-16">
      <div className="relative flex h-[50vh] flex-col items-center justify-end overflow-hidden bg-blue p-10 sm:p-14">
        <div className="flex w-full flex-col items-center gap-2.5">
          <Link href="/" aria-label={`${site.name} — home`}>
            {/* eslint-disable-next-line @next/next/no-img-element -- hand-painted cat illustration, sized by intrinsic width/height so its aspect ratio holds as the viewport resizes */}
            <img
              src="/images/marks/cat-footer-crop.png"
              alt=""
              aria-hidden="true"
              width={1279}
              height={790}
              className="h-[18vh] w-auto sm:h-[22vh]"
            />
          </Link>

          <div className="flex w-full flex-col items-start gap-10 text-mist sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-hand text-4xl sm:text-5xl">{site.handle}</p>
              <p className="mt-1 font-sans text-lg">{site.tagline}</p>
            </div>

            <div className="flex gap-12">
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
      </div>
    </footer>
  );
}
