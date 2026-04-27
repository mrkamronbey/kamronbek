"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/shared/hooks";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="w-9 h-9 flex items-center justify-center rounded-md border border-line text-muted hover:text-content hover:border-accent/40 transition-all"
    >
      {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
