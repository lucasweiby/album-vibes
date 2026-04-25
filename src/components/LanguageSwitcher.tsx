import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const langs = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "de", label: "Deutsch" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || "en").slice(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="glass rounded-full px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-foreground/80 hover:text-foreground inline-flex items-center gap-1.5 transition">
        <Globe className="h-3.5 w-3.5" />
        {current}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="glass-strong border-white/10">
        {langs.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => i18n.changeLanguage(l.code)}
            className={
              "cursor-pointer " +
              (current === l.code ? "text-primary font-semibold" : "")
            }
          >
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
