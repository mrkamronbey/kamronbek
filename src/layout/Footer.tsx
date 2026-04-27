import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/shared/components";

export function Footer() {
  const t = useTranslations("footer");

  const LINKS = [
    { label: t("home"),     href: "/" as "/" },
    { label: t("projects"), href: "/projects" as "/projects" },
    { label: t("blog"),     href: "/blog" as "/blog" },
  ];

  return (
    <footer className="border-t border-line py-8 max-md:py-6">
      <Container className="px-12 max-md:px-6 flex max-md:flex-col justify-between items-center max-md:gap-4">
        <p className="font-mono text-[13px] text-muted">
          © 2026 <span className="text-accent">Sunnatoff.dev</span> · {t("copy")}
        </p>
        <div className="flex gap-6">
          {LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-[13px] text-muted no-underline transition-colors hover:text-content"
            >
              {label}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
