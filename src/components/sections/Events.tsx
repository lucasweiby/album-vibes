import { useTranslation } from "react-i18next";
import { MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";

type Event = { date: string; name: string; venue: string };

export function Events() {
  const { t } = useTranslation();
  const items = t("events.items", { returnObjects: true }) as Event[];

  return (
    <section id="events" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              {t("events.kicker")}
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tightest text-gradient leading-[1.05] max-w-xl">
              {t("events.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-sm">{t("events.desc")}</p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((ev, i) => {
            const [day, month] = ev.date.split(" ");
            return (
              <Reveal key={i} delay={i * 0.1}>
                <a
                  href="#"
                  className="group glass rounded-3xl p-6 flex flex-col h-full hover:bg-white/[0.06] transition-all relative overflow-hidden"
                >
                  <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-start justify-between mb-8">
                    <div className="rounded-2xl bg-primary text-primary-foreground px-4 py-3 text-center min-w-[70px]">
                      <div className="font-display text-2xl font-bold leading-none">
                        {day}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider mt-1 opacity-80">
                        {month}
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all" />
                  </div>
                  <div className="relative">
                    <h3 className="font-display text-xl font-semibold tracking-tight mb-2">
                      {ev.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {ev.venue}
                    </div>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
