import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "afterhouse-cookie-consent";

export function CookieConsent() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const id = window.setTimeout(() => setVisible(true), 600);
      return () => window.clearTimeout(id);
    }
  }, []);

  const handleChoice = (choice: "accepted" | "declined") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t("cookies.title")}
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:pb-6 md:px-6 animate-in fade-in slide-in-from-bottom-4 duration-500"
    >
      <div className="mx-auto max-w-4xl glass-strong rounded-2xl border border-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex items-start gap-3 flex-1">
          <div className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Cookie className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">{t("cookies.title")}</h2>
            <p className="mt-1 text-xs md:text-sm text-muted-foreground leading-relaxed">
              {t("cookies.description")}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:shrink-0">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleChoice("declined")}
            className="text-muted-foreground hover:text-foreground"
          >
            {t("cookies.decline")}
          </Button>
          <Button
            size="sm"
            onClick={() => handleChoice("accepted")}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {t("cookies.accept")}
          </Button>
          <button
            aria-label={t("cookies.close")}
            onClick={() => handleChoice("declined")}
            className="md:hidden absolute top-3 right-3 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
