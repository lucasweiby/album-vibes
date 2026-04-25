# After House — Landing Page

Landing page moderna para o **After House**, um app social para avaliação de álbuns musicais e descoberta de eventos. Construída com TanStack Start, React 19, Tailwind v4 e shadcn/ui, no estilo "Obsidian Glow" (dark, liquid glass, com toques de laranja).

Suporta 3 idiomas: Inglês (padrão), Português e Alemão.

## Pré-requisitos

- [Node.js](https://nodejs.org/) 20 ou superior
- [Bun](https://bun.sh/) (recomendado) ou npm / pnpm

Para instalar o Bun:

```bash
curl -fsSL https://bun.sh/install | bash
```

## Como rodar localmente

1. **Clone o repositório**

   ```bash
   git clone <url-do-repo>
   cd after-house
   ```

2. **Instale as dependências**

   ```bash
   bun install
   ```

   (ou `npm install`)

3. **Inicie o servidor de desenvolvimento**

   ```bash
   bun run dev
   ```

   (ou `npm run dev`)

4. **Abra o navegador** em [http://localhost:3000](http://localhost:3000)

   O Vite faz hot reload automaticamente conforme você edita os arquivos.

## Scripts disponíveis

| Comando            | O que faz                                         |
| ------------------ | ------------------------------------------------- |
| `bun run dev`      | Sobe o servidor de desenvolvimento com hot reload |
| `bun run build`    | Gera o build de produção                          |
| `bun run preview`  | Pré-visualiza o build de produção localmente      |
| `bun run lint`     | Roda o ESLint                                     |
| `bun run format`   | Formata o código com Prettier                     |

## Estrutura do projeto

```
src/
├── assets/              # Imagens, logos e mockups do app
├── components/
│   ├── sections/        # Seções da landing (Hero, Features, etc.)
│   ├── ui/              # Componentes shadcn/ui
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── LanguageSwitcher.tsx
│   └── Reveal.tsx       # Wrapper de animação on-scroll
├── lib/
│   ├── i18n.ts          # Configuração e traduções (EN/PT/DE)
│   └── utils.ts
├── routes/              # Rotas (file-based routing do TanStack Router)
│   ├── __root.tsx
│   └── index.tsx
└── styles.css           # Design tokens, tema e utilitários
```

## Stack

- **Framework:** TanStack Start (Vite + React 19)
- **Estilo:** Tailwind CSS v4 + shadcn/ui (new-york)
- **Animações:** Framer Motion
- **i18n:** i18next + react-i18next
- **Tipografia:** SF Pro (system stack) + Inter como fallback

## Design

O design segue o estilo **Obsidian Glow**:

- Tema dark permanente
- Liquid glass (backdrop-blur + saturate)
- Laranja ember usado **apenas como destaque pontual** (CTAs, kickers, hover states)
- Tokens semânticos definidos em `src/styles.css` em `oklch`

Para ajustar o tema, edite as variáveis CSS em `:root` no arquivo `src/styles.css`.
