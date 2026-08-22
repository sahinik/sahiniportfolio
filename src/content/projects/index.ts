import type { Project } from "@/types/project";
import { signal } from "./signal";
import { tender } from "./tender";
import { ledger } from "./ledger";

export const projects: Project[] = [signal, tender, ledger].sort(
  (a, b) => a.order - b.order,
);

export function getAllProjects() {
  return projects;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return projects[0];
  return projects[(index + 1) % projects.length];
}
