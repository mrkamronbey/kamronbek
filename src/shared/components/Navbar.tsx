"use client";

import Link from "next/link";
import { useTranslation } from "@/shared/hooks";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex gap-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t("nav.home")}
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
            {t("nav.about")}
          </Link>
        </div>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
