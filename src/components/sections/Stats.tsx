import { useTranslation } from "react-i18next";
import { Reveal } from "../Reveal";

const stats = [
  { key: "albums", value: "120K+" },
  { key: "members", value: "48K" },
  { key: "reviews", value: "320K" },
  { key: "cities", value: "90+" },
] as const;

export function Stats() {
  const { t } = useTranslation();
  return (
    <section className="relative py-20 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08} className="text-center">
              <div className="font-display text-5xl md:text-6xl font-bold tracking-tightest text-gradient">
                {s.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {t(`stats.${s.key}`)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
