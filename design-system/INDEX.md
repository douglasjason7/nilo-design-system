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
├── atoms/                         (18 primitives)
│   ├── Button.tsx                 → 5 variantes, 3 tamanhos, loading; com `href` vira <a>
│   ├── Badge.tsx                  → 6 variantes, dot indicator
│   ├── Chip.tsx                   → assist / filter / input; selected, leadingIcon, onDismiss
│   ├── Tag.tsx                    → Filter tag interativo (simples)
│   ├── Input.tsx                  → Com label, hint, error, icon
│   ├── Select.tsx / Checkbox.tsx / Radio.tsx / Toggle.tsx → form controls + estados
│   ├── Tooltip.tsx               → 4 placements
│   ├── Spinner.tsx               → sm/md/lg
│   ├── ProgressLinear.tsx        → barra 0–100, tones accent/success/warning/error
│   ├── ProgressCircular.tsx      → anel SVG 0–100, tones, showValue
│   ├── StatusIndicator.tsx       → online/offline/pending/degraded/maintenance × compact/standard/full
│   ├── InlineFeedback.tsx        → validação inline info/success/warning/error
│   ├── Logo.tsx                   → full / symbol / wordmark, 4 tamanhos
│   ├── Typography.tsx             → Display, Heading, Body, Label, Caption
│   └── Divider.tsx                → Horizontal e vertical
│
├── molecules/                     (16 composições)
│   ├── Card.tsx                   → Base + ProjectCard + ServiceCard
│   ├── MediaCard.tsx              → mídia image/video × layout top/left, CTA opcional
│   ├── BigNumber.tsx              → KPI com tone e trend up/down
│   ├── InputGroup.tsx             → input com addons leading/trailing/both + estados
│   ├── FormGroup.tsx              → wrapper label/hint/erro
│   ├── Menu.tsx                   → painel de menu (default/compact), MenuItem + separador
│   ├── Tabs.tsx / Breadcrumb.tsx / Pagination.tsx → navegação
│   ├── Alert.tsx                  → info/success/warning/error, onClose
│   ├── Snackbar.tsx               → toast variante + ação + dismiss
│   ├── NavBar.tsx                 → Responsivo com menu mobile
│   ├── Toolbar.tsx                → horizontal/vertical, densidade (+ ToolbarDivider)
│   ├── TestimonialCard.tsx / PricingCard.tsx
│   └── AccordionFaq.tsx           → Accordion animado (question/answer ReactNode; defaultOpen…)
│
├── organisms/                     (17 seções + app shell)
│   ├── HeroSection.tsx / ServicesSection.tsx / PricingSection.tsx / FaqSection.tsx
│   ├── WorksGrid.tsx / TestimonialsSection.tsx / FooterSection.tsx
│   ├── AppShell.tsx (+AppHeader) / Sidebar.tsx  → shell de aplicação
│   ├── Dropdown.tsx / Modal.tsx / Dialog.tsx     → overlays (Dialog = confirm default/destructive/success)
│   ├── Carousel.tsx               → track + setas (solid/ghost) + dots, teclado
│   ├── DatePicker.tsx             → calendário date/range, PT-BR (+DateRange)
│   ├── TimePicker.tsx             → seleção HH:mm, minuteStep, 24h/12h
│   ├── Stepper.tsx               → passos numerados
│   └── Table.tsx                  → colunas tipadas (Column), header/zebra/hover
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

## Consumo como pacote (outro projeto da pasta/monorepo)

O nilo é consumível direto do fonte (TS/TSX) por projetos com bundler (Vite, Astro, Next):

```bash
# no projeto consumidor
npm install ../../nilo   # dependência file: → symlink
```

Entrypoints expostos (`package.json → exports`):

| Import | Conteúdo |
|---|---|
| `nilo-design-system` | Todos os componentes (atoms + molecules + organisms + marketing + templates) e `cn` — via `design-system/index.ts` |
| `nilo-design-system/preset` | **Preset Tailwind** com o theme reconciliado Kemet (`tailwind/preset.js`) — use em `presets: [...]`, não redefina cores |
| `nilo-design-system/tokens.css` | Variáveis CSS (dark + light) |
| `nilo-design-system/components.css` | Classes `ds-*` (`@layer components`) |
| `nilo-design-system/tokens.json` | Tokens W3C/Style Dictionary |

Requisitos do consumidor: React 18 (peer dependency), Tailwind 3, e incluir o caminho do pacote no `content` do Tailwind:

```js
// tailwind.config.mjs do consumidor
import niloPreset from "nilo-design-system/preset";
export default {
  presets: [niloPreset],
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,mdx}",
    "./node_modules/nilo-design-system/design-system/**/*.{js,ts,jsx,tsx}",
  ],
};
```

```css
/* CSS global do consumidor */
@import "nilo-design-system/tokens.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
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
