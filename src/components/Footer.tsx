import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-primary"><Logo size={28} /></span>
              <span className="font-semibold tracking-tight text-lg">After House</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-xs">{t("footer.tagline")}</p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {t("footer.product")}
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-primary transition">{t("nav.features")}</a></li>
              <li><a href="#preview" className="hover:text-primary transition">{t("nav.community")}</a></li>
              <li><a href="#events" className="hover:text-primary transition">{t("nav.events")}</a></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
              {t("footer.legal")}
            </div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} After House. {t("footer.rights")}</span>
          <span>Made for the night.</span>
        </div>
      </div>
    </footer>
  );
}
