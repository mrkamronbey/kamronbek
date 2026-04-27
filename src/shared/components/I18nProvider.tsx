"use client";

import { ReactNode } from "react";
import "@/lib/i18n/config";

export function I18nProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
