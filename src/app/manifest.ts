import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/shared/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Komronbek Sunnatov — Frontend Engineer",
    short_name: SITE_NAME,
    description:
      "Komronbek Sunnatov — Frontend Engineer building products for logistics, sales and mobile apps with React, Next.js, TypeScript and React Native.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    lang: "uz",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
