import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import albumsImg from "@/assets/albums-mosaic.jpg";

export function CTA() {
  const { t } = useTranslation();
  return (
    <section id="cta" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] glass-strong">
            <img
              src={albumsImg}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-30"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/80" />
            <div className="absolute -left-20 bottom-0 h-[400px] w-[600px] rounded-full bg-primary/40 blur-3xl" />
            <div className="absolute -right-20 top-0 h-[300px] w-[400px] rounded-full bg-primary/30 blur-3xl" />

            <div className="relative px-6 py-20 md:px-20 md:py-28 text-center max-w-3xl mx-auto">
              <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tightest leading-[1.05] text-gradient">
                {t("cta.title")}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                {t("cta.desc")}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow-lg hover:scale-105 transition-transform"
                >
                  {t("cta.button")}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <span className="text-sm text-muted-foreground">{t("cta.note")}</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
