import { createFileRoute } from "@tanstack/react-router";
import "@/lib/i18n";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { AppPreview } from "@/components/sections/AppPreview";
import { Events } from "@/components/sections/Events";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "After House — The place music deserves" },
      {
        name: "description",
        content:
          "Rate albums, follow critics you trust, and discover what your community is listening to. After House is the social home for music obsessives.",
      },
      { property: "og:title", content: "After House — The place music deserves" },
      {
        property: "og:description",
        content:
          "A social app for album reviews, music discovery, and live events. Built for the people who live for the next great record.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <AppPreview />
        {/* <Events /> */}
        <CTA />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}
