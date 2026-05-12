# Orchid Atomic Design System — Índice

> **Figma:** https://www.figma.com/design/XkqdVKL6yYuwt9Cgx75c4u/Nilo-Design-System-by-Kemet?node-id=4-4&t=4ikWP67z4l2gmjF2-1
> Referência visual: https://orchid-template.framer.website/
> Filosofia: Atomic Design (Brad Frost)
> Stack: React + TypeScript + Tailwind CSS
> Data: 2026-04-28

---

## Estrutura de Entrega

```
design-system/
│
├── docs/
│   ├── 01-visual-diagnosis.md     → Diagnóstico visual completo
│   └── 10-roadmap.md              → Roadmap de 8 semanas
│
├── tokens/
│   ├── tokens.css                 → Variáveis CSS (dark + light mode)
│   └── tokens.json                → Tokens em formato W3C/Style Dictionary
│
├── assets/
│   ├── nilo-design-system-logotype.svg          → Logo Nilo® — versão negativa (cream-on-dark)
│   └── nilo-design-system-logotype-positive.svg → Logo Nilo® — versão positiva (black-on-light)
│
├── atoms/
│   ├── Button.tsx                 → 5 variantes, 3 tamanhos, loading state
│   ├── Badge.tsx                  → 6 variantes, dot indicator
│   ├── Logo.tsx                   → full / symbol / wordmark, 4 tamanhos
│   ├── Typography.tsx             → Display, Heading, Body, Label, Caption
│   ├── Input.tsx                  → Com label, hint, error, icon
│   ├── Tag.tsx                    → Filter tag interativo
│   └── Divider.tsx                → Horizontal e vertical
│
├── molecules/
│   ├── Card.tsx                   → Base + ProjectCard + ServiceCard
│   ├── NavBar.tsx                 → Responsivo com menu mobile
│   ├── TestimonialCard.tsx        → Com rating e avatar
│   ├── PricingCard.tsx            → Com feature list e CTA
│   └── AccordionFaq.tsx           → Accordion animado
│
├── organisms/
│   ├── HeroSection.tsx            → Badge + headline + CTA + media
│   ├── ServicesSection.tsx        → Grid de serviços (2–4 colunas)
│   ├── WorksGrid.tsx              → Portfolio com filtro por categoria
│   ├── TestimonialsSection.tsx    → Grid e carousel
│   ├── PricingSection.tsx         → Suporte a N tiers
│   ├── FaqSection.tsx             → Layout centered e split
│   └── FooterSection.tsx          → Multi-coluna com socials
│
├── marketing/
│   ├── CtaBanner.tsx              → 3 variantes (dark, accent, full-bleed)
│   ├── LogoBar.tsx                → Grid e marquee animado
│   ├── StatsRow.tsx               → Estatísticas com display typography
│   └── JournalGrid.tsx            → Cards de artigos com filtro
│
├── templates/
│   └── AgencyLandingPage.tsx      → Página completa com dados mock
│
├── figma/
│   └── figma-architecture.md     → Estrutura Figma: pages, variáveis, variantes
│
├── tailwind/
│   ├── tailwind.config.js         → Config com todos os tokens
│   └── components.css             → @layer components com classes utilitárias
│
└── utils/
    └── cn.ts                      → clsx + tailwind-merge helper
```

---

## Quickstart

### 1. Instalar dependências
```bash
npm install clsx tailwind-merge
npm install -D tailwindcss autoprefixer
```

### 2. Configurar Tailwind
Copie `tailwind/tailwind.config.js` para a raiz do seu projeto.

### 3. Importar tokens CSS
```css
/* globals.css */
@import "./design-system/tokens/tokens.css";
@import "./design-system/tailwind/components.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Importar fontes
```html
<!-- No <head> do seu layout -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:wght@400;500;600;700&family=JetBrains+Mono&display=swap"
  rel="stylesheet"
/>
```

### 5. Usar um componente
```tsx
import { Button } from "./design-system/atoms/Button";
import { HeroSection } from "./design-system/organisms/HeroSection";

export default function Page() {
  return (
    <HeroSection
      headline="Construímos marcas que movem mercados"
      primaryCtaLabel="Iniciar projeto"
    />
  );
}
```

### 6. Template completo
```tsx
import { AgencyLandingPage } from "./design-system/templates/AgencyLandingPage";

export default function Home() {
  return <AgencyLandingPage />;
}
```

---

## Design Tokens — Resumo

| Sistema | Tokens |
|---|---|
| Cores | 11 neutros + 11 accents (orchid) + 4 semânticas |
| Tipografia | 3 famílias + 12 tamanhos + escala Major Third |
| Espaçamento | 14 steps (grid de 8px) |
| Bordas | 6 raios + sombras (sm, md, lg, accent) |
| Motion | 4 durações + 4 easings |
| Z-index | 9 camadas nomeadas |

---

## Filosofia Atomic Design

```
ATOMS          → Partículas indivisíveis de UI
MOLECULES      → Grupos funcionais de atoms
ORGANISMS      → Seções complexas, auto-suficientes
TEMPLATES      → Esqueletos de página sem conteúdo real
PAGES          → Templates preenchidos com dados reais
```

Cada nível depende apenas dos níveis anteriores.
Nenhum componente importa de um nível superior.
