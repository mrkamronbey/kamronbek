/**
 * Single source of truth for identity & contact info.
 * Change anything here and it updates the whole site (hero, contact, schema, llms.txt, emails).
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sunnatoff.dev";
export const SITE_NAME = "Sunnatoff.dev";

export const PERSON = {
  name: "Komronbek Sunnatov",
  alternateNames: ["Kamronbek Sunnatov", "Sunnatov Komronbek"],
  role: "Frontend Engineer",
  email: "komronbek.sunnatov@mail.ru",
  /** Displayable phone numbers. Empty array hides them everywhere. */
  phones: ["+998 95 002 37 52", "+998 94 360 01 17"],
  location: { city: "Tashkent", country: "UZ", label: "Tashkent, Uzbekistan" },
};

export type SocialPlatform = "linkedin" | "github" | "telegram" | "instagram";

export interface Social {
  platform: SocialPlatform;
  label: string;
  value: string;
  href: string;
  /** Tailwind classes for the icon chip (used on contact cards). */
  color: string;
}

export const SOCIALS: Social[] = [
  {
    platform: "linkedin",
    label: "LinkedIn",
    value: "komronbek-sunnatov",
    href: "https://www.linkedin.com/in/komronbek-sunnatov-042922371/",
    color: "text-[#0a66c2] bg-[#0a66c2]/10",
  },
  {
    platform: "github",
    label: "GitHub",
    value: "mrkamronbek",
    href: "https://github.com/mrkamronbek",
    color: "text-content bg-content/10",
  },
  {
    platform: "telegram",
    label: "Telegram",
    value: "@sunnatoff_dev",
    href: "https://t.me/sunnatoff_dev",
    color: "text-[#2aabee] bg-[#2aabee]/10",
  },
  {
    platform: "instagram",
    label: "Instagram",
    value: "sunnatoff.dev",
    href: "https://www.instagram.com/sunnatoff.dev/",
    color: "text-[#e1306c] bg-[#e1306c]/10",
  },
];

/** All public profile URLs — used for schema.org `sameAs`. */
export const SAME_AS = SOCIALS.map((s) => s.href);

export const mailHref = `mailto:${PERSON.email}`;
/** Build a tel: link from a displayable phone number. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
