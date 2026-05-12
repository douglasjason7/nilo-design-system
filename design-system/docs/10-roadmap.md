# 10 — Roadmap de Implementação

> Design System baseado em análise visual de referência Framer/Orchid template.
> Filosofia Atomic Design. Stack: React + TypeScript + Tailwind CSS.

---

## Fase 0 — Fundação (Semana 1)

**Objetivo:** Ambiente configurado, tokens publicados, dependências instaladas.

| Tarefa | Responsável | Entrega |
|---|---|---|
| Criar repositório com estrutura de pastas | Dev | Repo criado |
| Configurar `tailwind.config.js` com tokens | Dev | Config validada |
| Importar fontes: Inter + Instrument Serif | Dev | Fontes funcionando |
| Publicar `tokens.css` como global stylesheet | Dev | Variáveis CSS disponíveis |
| Criar arquivo Figma com páginas e variáveis | Designer | Arquivo Figma base |
| Instalar dependências: `clsx`, `tailwind-merge` | Dev | `cn()` funcionando |

**Critério de aceite:** `npm run dev` exibe página em branco com tokens aplicados.

---

## Fase 1 — Atoms (Semana 2)

**Objetivo:** Todos os átomos estáveis, testados, documentados no Figma.

### Componentes

| Componente | Status | Variantes |
|---|---|---|
| `Button` | Pronto (código) | primary, secondary, ghost, outline, accent |
| `Badge` | Pronto (código) | default, accent, success, error, warning, outline |
| `Typography` | Pronto (código) | Display, Heading, Body, Label, Caption |
| `Input` | Pronto (código) | default, error, with-icon |
| `Tag` | Pronto (código) | default, active, interactive |
| `Divider` | Pronto (código) | horizontal, vertical |

### Ações

- [ ] Storybook ou Ladle: criar stories para cada átomo
- [ ] Figma: criar componentes com Auto Layout + variantes
- [ ] Testar acessibilidade: contraste, focus states, aria-labels
- [ ] Criar snapshot tests ou visual regression tests

**Critério de aceite:** Todos os átomos renderizam sem erro em isolamento.

---

## Fase 2 — Molecules (Semana 3)

**Objetivo:** Moléculas compostas com átomos, prontas para uso em organismos.

| Componente | Deps | Status |
|---|---|---|
| `Card` (base + Project + Service) | Typography, cn | Pronto (código) |
| `NavBar` | Button, cn | Pronto (código) |
| `TestimonialCard` | cn | Pronto (código) |
| `PricingCard` | Button, Badge, cn | Pronto (código) |
| `AccordionFaq` | cn | Pronto (código) |

### Pendente nesta fase

- [ ] `Textarea` atom (derivado de Input)
- [ ] `Select` / `Combobox` atom
- [ ] `Avatar` component isolado (hoje está inline)
- [ ] `Tooltip` molecule
- [ ] `Modal` molecule (overlay + dialog)
- [ ] `Toast` / Notification molecule

**Critério de aceite:** NavBar funciona em mobile e desktop. Cards renderizam com dados reais.

---

## Fase 3 — Organisms (Semana 4)

**Objetivo:** Seções de página completas, composable via props.

| Componente | Deps | Status |
|---|---|---|
| `HeroSection` | Button, Badge, Typography | Pronto (código) |
| `ServicesSection` | ServiceCard, Label | Pronto (código) |
| `WorksGrid` | ProjectCard, Button, Tag | Pronto (código) |
| `TestimonialsSection` | TestimonialCard, Label | Pronto (código) |
| `PricingSection` | PricingCard, Label | Pronto (código) |
| `FaqSection` | AccordionFaq, Label | Pronto (código) |
| `FooterSection` | Divider | Pronto (código) |

### Pendente nesta fase

- [ ] `TeamSection` — grid de pessoas com bio e redes sociais
- [ ] `CaseStudyHero` — hero específico para página de case
- [ ] `AboutSection` — split layout texto + imagem
- [ ] `ContactSection` — formulário com validação

**Critério de aceite:** Landing page completa funcional com dados mock.

---

## Fase 4 — Marketing & Templates (Semana 5)

**Objetivo:** Componentes de conversão e templates de página finalizados.

| Componente | Status |
|---|---|
| `CtaBanner` | Pronto (código) |
| `LogoBar` (marquee + grid) | Pronto (código) |
| `StatsRow` | Pronto (código) |
| `JournalGrid` + `ArticleCard` | Pronto (código) |
| `AgencyLandingPage` template | Pronto (código) |

### Templates pendentes

- [ ] `PortfolioPage` — grade de projetos filtráveis
- [ ] `CaseStudyPage` — layout editorial de case
- [ ] `PricingPage` — pricing full com comparativo
- [ ] `BlogIndexPage` — grid de artigos com categorias
- [ ] `ArticleDetailPage` — layout de leitura tipográfica
- [ ] `ContactPage` — formulário + mapa + info lateral

**Critério de aceite:** AgencyLandingPage renderiza com todos os sections.

---

## Fase 5 — Qualidade & Publicação (Semana 6)

### Acessibilidade

- [ ] Contraste WCAG AA em todos os textos body
- [ ] Contraste WCAG AAA em textos críticos (CTAs, preços)
- [ ] Teclado navegável (Tab, Enter, Space, Esc)
- [ ] ARIA roles corretos em Modal, Accordion, NavBar
- [ ] `prefers-reduced-motion` respeitado nas animações
- [ ] Testado com VoiceOver / NVDA

### Performance

- [ ] Fontes com `font-display: swap`
- [ ] Imagens com `loading="lazy"` e dimensões definidas
- [ ] Tailwind purge configurado (sem classes não usadas)
- [ ] Bundle < 50KB CSS gzip

### Dark / Light Mode

- [ ] Todos os tokens semânticos usando variáveis CSS
- [ ] Toggle funcional via `data-theme` attribute
- [ ] `prefers-color-scheme` media query como fallback
- [ ] Testado em ambos os modos

### Documentação

- [ ] README com quickstart
- [ ] Cada componente com JSDoc nas props
- [ ] Figma anotado com usage guidelines
- [ ] Changelog iniciado

---

## Fase 6 — Theming & Escalonamento (Semana 7–8)

**Objetivo:** Design system pronto para múltiplas marcas / projetos.

| Recurso | Descrição |
|---|---|
| Multi-brand theming | Override de tokens por projeto via CSS custom props |
| Dark mode completo | Suporte a `prefers-color-scheme` + toggle manual |
| Motion tokens | `--duration-*` e `--ease-*` como variáveis |
| Responsive tokens | Tokens de tipo e espaço que mudam por breakpoint |
| Icon system | SVG sprite ou biblioteca de ícones integrada |
| Design token pipeline | Tokens JSON → CSS variables (Style Dictionary ou Theo) |

---

## Stack Recomendada

```
Framework:    Next.js 14+ (App Router)
Language:     TypeScript 5+
Styling:      Tailwind CSS 3.4+
Utilities:    clsx + tailwind-merge
Animation:    Framer Motion (ou CSS animations nativas)
Icons:        Lucide React (ou Phosphor Icons)
Form:         React Hook Form + Zod
Testing:      Vitest + Testing Library
Visual tests: Chromatic (via Storybook)
Doc:          Storybook 8+
Deploy:       Vercel
```

---

## Dependências Mínimas

```json
{
  "dependencies": {
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.0",
    "@tailwindcss/typography": "^0.5.13",
    "autoprefixer": "^10.4.19",
    "typescript": "^5.4.0"
  }
}
```

---

## Métricas de Sucesso

| Métrica | Meta |
|---|---|
| Cobertura de componentes | 100% dos identificados na análise |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Performance | ≥ 90 |
| Bundle CSS (gzip) | < 50KB |
| Tokens padronizados | 100% via variáveis, zero hardcoded |
| Dark/Light mode | Suportado em todos os componentes |
| Mobile responsivo | 100% dos componentes |
