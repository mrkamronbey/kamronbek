import type { Metadata, Viewport } from "next";
import { Geologica, Space_Mono, JetBrains_Mono } from "next/font/google";
import { getLocale } from "next-intl/server";
import { SITE_URL, SITE_NAME } from "@/shared/seo";
import "./globals.css";

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Komronbek Sunnatov — Frontend Engineer",
    template: `%s · ${SITE_NAME}`,
  },
  description: "Komronbek Sunnatov — Frontend Engineer portfolio",
  applicationName: SITE_NAME,
  authors: [{ name: "Komronbek Sunnatov", url: SITE_URL }],
  creator: "Komronbek Sunnatov",
  openGraph: { type: "website", siteName: SITE_NAME, images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth"
      className={`${geologica.variable} ${spaceMono.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
