import { Section } from "@/components/ui/Section";
import { AboutHero } from "@/components/about/AboutHero";
import { Experience } from "@/components/about/Experience";
import { FavoriteThings } from "@/components/about/FavoriteThings";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About",
  description: `About ${site.name}, ${site.role}.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <Section as="div">
      <AboutHero />
      <Experience />
      <FavoriteThings />
    </Section>
  );
}
