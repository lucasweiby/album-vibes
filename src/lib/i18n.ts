import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        features: "Features",
        community: "Community",
        events: "Events",
        download: "Download",
        signin: "Sign in",
      },
      hero: {
        badge: "Now in beta",
        title1: "The place",
        title2: "music",
        title3: "deserves.",
        subtitle:
          "Rate albums, follow critics you trust, and discover what your community is listening to. After House is a social home for music obsessives.",
        cta: "Get the app",
        secondary: "Watch demo",
      },
      stats: {
        albums: "Albums rated",
        members: "Active members",
        reviews: "Reviews shared",
        cities: "Cities",
      },
      features: {
        kicker: "Built for listeners",
        title: "Everything you need to live music deeper.",
        items: {
          rate: {
            title: "Rate every album",
            desc: "From legendary classics to last night's drop. Your taste, your scores, your library.",
          },
          follow: {
            title: "Follow real critics",
            desc: "Curated voices, not algorithms. See reviews from people whose taste you actually trust.",
          },
          events: {
            title: "Live events nearby",
            desc: "From listening parties to club nights — the city's music calendar in your pocket.",
          },
          social: {
            title: "Social by design",
            desc: "Comment, repost, react. A feed that feels like the after-party of the music world.",
          },
        },
      },
      preview: {
        kicker: "A closer look",
        title: "Designed like a record sleeve.",
        desc: "Bold typography, dark surfaces, ember-warm accents. Every screen feels handcrafted for the way you experience music.",
      },
      events: {
        kicker: "Tonight",
        title: "The city is playing.",
        desc: "Catch the sets that matter. After House surfaces the events your community is going to.",
        items: [
          { date: "24 APR", name: "FICA, VAI TER POP!", venue: "Gandaia Club · 11pm" },
          { date: "26 APR", name: "Underground Resonance", venue: "Warehouse 9 · 12am" },
          { date: "28 APR", name: "Vinyl Only Sessions", venue: "Salon Noir · 10pm" },
        ],
      },
      cta: {
        title: "Your next favorite album is one tap away.",
        desc: "Join thousands of listeners building the most honest music community on the internet.",
        button: "Download free",
        note: "Available on iOS & Android",
      },
      footer: {
        tagline: "The place music deserves.",
        product: "Product",
        company: "Company",
        legal: "Legal",
        rights: "All rights reserved.",
      },
    },
  },
  pt: {
    translation: {
      nav: {
        features: "Recursos",
        community: "Comunidade",
        events: "Eventos",
        download: "Baixar",
        signin: "Entrar",
      },
      hero: {
        badge: "Agora em beta",
        title1: "O lugar",
        title2: "que a música",
        title3: "merece.",
        subtitle:
          "Avalie álbuns, siga críticos que você confia e descubra o que sua comunidade está ouvindo. After House é a casa social dos obcecados por música.",
        cta: "Baixar o app",
        secondary: "Ver demo",
      },
      stats: {
        albums: "Álbuns avaliados",
        members: "Membros ativos",
        reviews: "Reviews publicados",
        cities: "Cidades",
      },
      features: {
        kicker: "Feito para quem escuta",
        title: "Tudo que você precisa para viver música mais fundo.",
        items: {
          rate: {
            title: "Avalie cada álbum",
            desc: "Dos clássicos lendários ao lançamento de ontem. Seu gosto, suas notas, sua biblioteca.",
          },
          follow: {
            title: "Siga críticos de verdade",
            desc: "Vozes curadas, não algoritmos. Reviews de quem você realmente confia.",
          },
          events: {
            title: "Eventos perto de você",
            desc: "De listening parties a noites de clube — a agenda musical da cidade no seu bolso.",
          },
          social: {
            title: "Social por natureza",
            desc: "Comente, reposte, reaja. Um feed que parece o after-party do mundo da música.",
          },
        },
      },
      preview: {
        kicker: "De pertinho",
        title: "Desenhado como uma capa de disco.",
        desc: "Tipografia ousada, fundos escuros, acentos cor de brasa. Cada tela feita à mão para o jeito que você vive música.",
      },
      events: {
        kicker: "Hoje",
        title: "A cidade está tocando.",
        desc: "Pegue os sets que importam. After House mostra os eventos que sua comunidade vai.",
        items: [
          { date: "24 ABR", name: "FICA, VAI TER POP!", venue: "Gandaia Club · 23h" },
          { date: "26 ABR", name: "Ressonância Underground", venue: "Galpão 9 · 00h" },
          { date: "28 ABR", name: "Vinyl Only Sessions", venue: "Salon Noir · 22h" },
        ],
      },
      cta: {
        title: "Seu próximo álbum favorito está a um toque.",
        desc: "Junte-se a milhares de ouvintes construindo a comunidade musical mais honesta da internet.",
        button: "Baixar grátis",
        note: "Disponível em iOS e Android",
      },
      footer: {
        tagline: "O lugar que a música merece.",
        product: "Produto",
        company: "Empresa",
        legal: "Legal",
        rights: "Todos os direitos reservados.",
      },
    },
  },
  de: {
    translation: {
      nav: {
        features: "Funktionen",
        community: "Community",
        events: "Events",
        download: "Laden",
        signin: "Anmelden",
      },
      hero: {
        badge: "Jetzt in der Beta",
        title1: "Der Ort,",
        title2: "den Musik",
        title3: "verdient.",
        subtitle:
          "Bewerte Alben, folge Kritikern, denen du vertraust, und entdecke, was deine Community hört. After House ist das soziale Zuhause für Musikbesessene.",
        cta: "App holen",
        secondary: "Demo ansehen",
      },
      stats: {
        albums: "Alben bewertet",
        members: "Aktive Mitglieder",
        reviews: "Reviews geteilt",
        cities: "Städte",
      },
      features: {
        kicker: "Für Hörer gemacht",
        title: "Alles, um Musik tiefer zu erleben.",
        items: {
          rate: {
            title: "Jedes Album bewerten",
            desc: "Von Klassikern bis zum gestrigen Release. Dein Geschmack, deine Noten, deine Bibliothek.",
          },
          follow: {
            title: "Echten Kritikern folgen",
            desc: "Kuratierte Stimmen, keine Algorithmen. Reviews von Menschen, deren Geschmack du wirklich vertraust.",
          },
          events: {
            title: "Live-Events in der Nähe",
            desc: "Von Listening-Partys bis Clubnächten — der Musikkalender deiner Stadt in der Tasche.",
          },
          social: {
            title: "Sozial im Kern",
            desc: "Kommentieren, reposten, reagieren. Ein Feed wie die Afterparty der Musikwelt.",
          },
        },
      },
      preview: {
        kicker: "Aus der Nähe",
        title: "Wie ein Plattencover gestaltet.",
        desc: "Mutige Typografie, dunkle Flächen, glühende Akzente. Jeder Bildschirm fühlt sich handgemacht an.",
      },
      events: {
        kicker: "Heute",
        title: "Die Stadt spielt.",
        desc: "Erwische die Sets, die zählen. After House zeigt die Events, zu denen deine Community geht.",
        items: [
          { date: "24 APR", name: "FICA, VAI TER POP!", venue: "Gandaia Club · 23 Uhr" },
          { date: "26 APR", name: "Underground Resonance", venue: "Lagerhaus 9 · 0 Uhr" },
          { date: "28 APR", name: "Vinyl Only Sessions", venue: "Salon Noir · 22 Uhr" },
        ],
      },
      cta: {
        title: "Dein nächstes Lieblingsalbum ist nur einen Tap entfernt.",
        desc: "Schließe dich Tausenden von Hörern in der ehrlichsten Musikcommunity an.",
        button: "Kostenlos laden",
        note: "Für iOS und Android",
      },
      footer: {
        tagline: "Der Ort, den Musik verdient.",
        product: "Produkt",
        company: "Unternehmen",
        legal: "Rechtliches",
        rights: "Alle Rechte vorbehalten.",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "pt", "de"],
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
