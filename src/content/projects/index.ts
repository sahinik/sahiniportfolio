import type { Project } from "@/types/project";
import { teamChemistry } from "./team-chemistry";
import { vertexAi } from "./vertex-ai";
import { donorMap } from "./donor-map";
import { insectProtein } from "./insect-protein";
import { makeupDevice } from "./makeup-device";
import { sharedCourage } from "./shared-courage";

export const projects: Project[] = [
  teamChemistry,
  vertexAi,
  donorMap,
  insectProtein,
  makeupDevice,
  sharedCourage,
].sort((a, b) => a.order - b.order);

export function getAllProjects() {
  return projects;
}

export function getLargeProjects() {
  return projects.filter((p) => p.size === "large");
}

export function getSmallProjects() {
  return projects.filter((p) => p.size === "small");
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
