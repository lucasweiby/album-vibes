import { useTranslation } from "react-i18next";
import { Star, Users, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "../Reveal";

const items = [
  { key: "rate", icon: Star },
  { key: "follow", icon: Users },
  { key: "events", icon: MapPin },
  { key: "social", icon: MessageCircle },
] as const;

export function Features() {
  const { t } = useTranslation();
  return (
    <section id="features" className="relative py-32">
      <div className="absolute inset-0 -z-10 ember-glow opacity-50" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
            {t("features.kicker")}
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tightest text-gradient leading-[1.05]">
            {t("features.title")}
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.key} delay={i * 0.1}>
                <div className="group relative glass rounded-3xl p-8 h-full overflow-hidden hover:bg-white/[0.06] transition-all duration-500">
                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary mb-6 ring-1 ring-primary/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight mb-2">
                      {t(`features.items.${it.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`features.items.${it.key}.desc`)}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
