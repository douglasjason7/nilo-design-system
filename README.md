# Nilo Design System by Kemet

Atomic design system para a marca Nilo® — React + TypeScript + Tailwind CSS, com referência viva no Figma.

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Figma](https://img.shields.io/badge/Figma-Design_System-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/design/XkqdVKL6yYuwt9Cgx75c4u/Nilo-Design-System-by-Kemet?node-id=4-4&t=4ikWP67z4l2gmjF2-1)

---

## Links

- **Figma (source of truth):** [Nilo Design System by Kemet](https://www.figma.com/design/XkqdVKL6yYuwt9Cgx75c4u/Nilo-Design-System-by-Kemet?node-id=4-4&t=4ikWP67z4l2gmjF2-1)
- **Documentação completa:** [`design-system/INDEX.md`](design-system/INDEX.md)
- **Arquitetura Figma:** [`design-system/figma/figma-architecture.md`](design-system/figma/figma-architecture.md)
- **Roadmap:** [`design-system/docs/10-roadmap.md`](design-system/docs/10-roadmap.md)

---

## O que tem aqui

```
design-system/
├── tokens/        ─ Variáveis CSS, JSON W3C/Style Dictionary
├── atoms/         ─ 18 primitives (Button, Input, Badge, Chip, Progress, StatusIndicator…)
├── molecules/     ─ 16 composições (Card, Tabs, InputGroup, Menu, BigNumber, Snackbar…)
├── organisms/     ─ 17 seções (Hero, Sidebar, Table, Dialog, Carousel, DatePicker…)
├── marketing/     ─ 6 blocos (CtaBanner, LogoBar, FeatureGrid, StatsRow…)
├── templates/     ─ Landing page completa
├── figma/         ─ Documentação da arquitetura no Figma
└── tailwind/      ─ Config + classes utilitárias
```

Filosofia: **Atomic Design** (Brad Frost). Cada nível depende apenas dos níveis anteriores — nenhum componente importa de um nível superior. Todos os component sets da biblioteca `_Lib` do Figma têm equivalente em código.

---

## Quickstart

```bash
git clone https://github.com/douglasjason7/nilo-design-system.git
cd nilo-design-system
npm install
npm run dev
```

Para usar como biblioteca em outro projeto, veja o [Quickstart no INDEX.md](design-system/INDEX.md#quickstart).

---

## Tokens — resumo

| Sistema | Tokens |
|---|---|
| Cores | 11 neutros + 11 accents (orchid) + 4 semânticas (success/error/warning/info) |
| Tipografia | 3 famílias (Inter, Instrument Serif, JetBrains Mono) + 12 tamanhos |
| Espaçamento | Grid de 4px — 18 steps (0 a 160px) |
| Radius | 8 raios (xs → 2xl + full) |
| Sombras | shadow-sm, shadow-md, shadow-lg, shadow-accent |
| Motion | 4 durações + 4 easings |

Definições em [`design-system/tokens/`](design-system/tokens/).

---

## Stack

- **React 18** + **TypeScript 5**
- **Tailwind CSS 3** com tokens via CSS variables
- **Vite 5** dev server + build
- **Figma** como source of truth (variants, variables, auto-layout)

---

## Estrutura de páginas do Figma

```
00 - Foundations           ─ Cores, tipografia, espaçamento, radius, sombras, grid, motion
01 - Atoms                 ─ Primitives + showcases
02 - Molecules             ─ Composições
03 - Organisms             ─ Seções complexas + app shell (sidebar/header)
04 - Marketing Components  ─ LogoBar, Testimonials, Pricing, CTA banners
05 - Templates             ─ Landing page (desktop/tablet/mobile) + Dashboard
_Lib                       ─ Component sets reutilizáveis (Button, Card, Modal, …)
Brand                      ─ Logos e variantes
```

Acesse o arquivo: [Figma](https://www.figma.com/design/XkqdVKL6yYuwt9Cgx75c4u/Nilo-Design-System-by-Kemet?node-id=4-4&t=4ikWP67z4l2gmjF2-1)

---

## Licença

Privado — Kemet.
