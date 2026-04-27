"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { Container, ThemeToggle, NavLangSelector } from "@/shared/components";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const NAV_LINKS = [
    { label: t("home"),     href: "/"         },
    { label: t("services"), href: "/#services" },
    { label: t("projects"), href: "/projects"  },
    { label: t("blog"),     href: "/blog"      },
    { label: t("contact"),  href: "/#contact"  },
  ];

  useEffect(() => {
    setScrolled(window.scrollY > 60);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  function isActive(href: string): boolean {
    if (href.startsWith("/#")) return false;
    return pathname === href;
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || mobileOpen
            ? "bg-canvas/95 backdrop-blur-[20px] border-b border-line shadow-[0_4px_40px_rgba(0,0,0,0.25)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Container className="flex items-center justify-between gap-4 px-12 max-md:px-6 h-16">
          <Link
            href="/"
            className="font-mono text-[17px] font-bold text-content tracking-[-0.5px] no-underline"
          >
            Sunnatoff<span className="text-accent">.dev</span>
          </Link>

          {/* Desktop nav */}
          <ul className="max-md:hidden flex gap-1 list-none m-0 p-0 flex-1 justify-center">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <li key={href}>
                  <Link
                    href={href as "/"}
                    className={`text-sm font-medium no-underline tracking-[0.3px] transition-all px-3 py-2 rounded-md ${
                      active
                        ? "text-accent bg-accent/[0.08]"
                        : "text-muted hover:text-content hover:bg-line"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <NavLangSelector />
            <ThemeToggle />
            {/* Desktop CTA */}
            <Link
              href="/#contact"
              className="max-md:hidden font-mono text-[13px] px-5 py-2 border border-accent rounded-md text-accent no-underline transition-all hover:bg-accent hover:text-white"
            >
              {t("cta")}
            </Link>
            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-line text-muted hover:text-content hover:border-accent/40 transition-all"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </Container>
      </nav>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-[99] bg-canvas/95 backdrop-blur-[20px] border-b border-line shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <Container className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href as "/"}
                  className={`text-[15px] font-medium no-underline py-3 px-3 rounded-lg transition-all ${
                    active
                      ? "text-accent bg-accent/[0.08]"
                      : "text-muted hover:text-content hover:bg-line"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="border-t border-line mt-2 pt-3">
              <Link
                href="/#contact"
                className="block text-center font-mono text-[13px] px-5 py-2.5 border border-accent rounded-md text-accent no-underline transition-all hover:bg-accent hover:text-white"
              >
                {t("cta")}
              </Link>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
