import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 " +
        (scrolled ? "py-3" : "py-5")
      }
    >
      <div
        className={
          "mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6 transition-all duration-500 " +
          (scrolled
            ? "glass-strong rounded-full shadow-elegant max-w-5xl"
            : "")
        }
      >
        <a href="#top" className="flex items-center gap-2 py-2">
          <span className="text-primary">
            <Logo size={26} />
          </span>
          <span className="font-semibold tracking-tight text-foreground">
            After House
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">
            {t("nav.features")}
          </a>
          <a href="#preview" className="hover:text-foreground transition-colors">
            {t("nav.community")}
          </a>
          <a href="#events" className="hover:text-foreground transition-colors">
            {t("nav.events")}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            {t("nav.download")}
          </a>
        </div>
      </div>
    </header>
  );
}
