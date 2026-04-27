"use client";

import { useTranslation } from "@/shared/hooks";

export function AboutView() {
  const { t } = useTranslation();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-900">{t("about.title")}</h1>
      <p className="mt-4 text-lg text-gray-600">{t("about.description")}</p>
    </main>
  );
}
