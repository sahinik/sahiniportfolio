import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/content/site";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

/**
 * Substitute for the real "Sahini's Writing" custom font referenced in the
 * Figma file — that's a personal font file this project doesn't have access
 * to. Caveat is a placeholder standing in for it; swap in the real font
 * (via next/font/local) once the file is available.
 */
const handwritten = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = buildMetadata({
  title: `${site.name} — ${site.role}`,
  description: site.positioning,
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${instrumentSerif.variable} ${handwritten.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only-focusable fixed left-4 top-4 z-50 rounded bg-ink px-4 py-2 text-sm font-medium text-paper">
          Skip to content
        </a>
        <CustomCursor />
        <Header />
        <main id="main-content" className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
