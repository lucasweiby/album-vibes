import { useTranslation } from "react-i18next";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-club.jpg";
import appHome from "@/assets/app-home.png";

export function Hero() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-screen overflow-hidden pt-32 pb-20"
    >
      {/* Background image with mask */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </motion.div>

      {/* Glow blobs — subtle ambient light */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/[0.07] blur-[180px] animate-pulse-glow" />
        <div className="absolute right-0 top-0 h-[400px] w-[500px] rounded-full bg-white/[0.03] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs uppercase tracking-widest text-foreground/80 mb-8"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {t("hero.badge")}
            </motion.div>

            <h1 className="font-display font-bold tracking-tightest text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="block text-gradient"
              >
                {t("hero.title1")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block text-gradient"
              >
                {t("hero.title2")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block text-gradient italic"
              >
                {t("hero.title3")}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-glow-lg hover:scale-105 transition-transform"
              >
                {t("hero.cta")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#preview"
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-foreground hover:bg-white/10 transition"
              >
                <Play className="h-4 w-4 fill-current" />
                {t("hero.secondary")}
              </a>
            </motion.div>
          </div>

          {/* Floating phone */}
          <motion.div
            style={{ y: phoneY }}
            initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative mx-auto max-w-sm"
          >
            <div className="absolute -inset-8 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative animate-float">
              <div className="rounded-[3rem] glass-strong p-3 shadow-elegant">
                <img
                  src={appHome}
                  alt="After House app"
                  className="rounded-[2.4rem] w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
