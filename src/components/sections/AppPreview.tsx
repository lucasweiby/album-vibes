import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "../Reveal";
import appHome from "@/assets/app-home.png";
import appLogin from "@/assets/app-login.png";
import appProfile from "@/assets/app-profile.png";

export function AppPreview() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="preview" ref={ref} className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
              {t("preview.kicker")}
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tightest text-gradient leading-[1.05]">
              {t("preview.title")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-md">
              {t("preview.desc")}
            </p>
          </Reveal>

          <div className="relative h-[640px]">
            <div className="absolute inset-0 ember-glow opacity-60" />
            <motion.div
              style={{ y: y1 }}
              className="absolute left-0 top-10 w-[55%] rounded-[2.5rem] glass-strong p-2.5 shadow-elegant rotate-[-6deg]"
            >
              <img src={appLogin} alt="Login screen" className="rounded-[2rem] w-full" loading="lazy" />
            </motion.div>
            <motion.div
              style={{ y: y2 }}
              className="absolute right-0 top-0 w-[55%] rounded-[2.5rem] glass-strong p-2.5 shadow-elegant rotate-[5deg] z-10"
            >
              <img src={appHome} alt="Home screen" className="rounded-[2rem] w-full" loading="lazy" />
            </motion.div>
            <motion.div
              style={{ y: y3 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[55%] rounded-[2.5rem] glass-strong p-2.5 shadow-elegant rotate-[2deg]"
            >
              <img src={appProfile} alt="Profile screen" className="rounded-[2rem] w-full" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
