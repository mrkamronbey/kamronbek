import { notFound } from "next/navigation";

/**
 * Catches any unmatched path under a locale (e.g. /uz/some/unknown) and
 * triggers the localized not-found boundary at [locale]/not-found.tsx.
 */
export default function CatchAllNotFound() {
  notFound();
}
