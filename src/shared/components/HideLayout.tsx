"use client";

import { useEffect } from "react";

export function HideLayout() {
  useEffect(() => {
    document.body.classList.add("hide-layout");
    return () => document.body.classList.remove("hide-layout");
  }, []);
  return null;
}
