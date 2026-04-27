"use client";

import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) ?? "dark";
    applyTheme(stored);
    setTheme(stored);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  return { theme, toggleTheme };
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("light", theme === "light");
}
