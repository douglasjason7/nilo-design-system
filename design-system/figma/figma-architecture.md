# Arquitetura Figma — Nilo Atomic Design System

> Estrutura de organização de páginas, componentes e variáveis no Figma,
> pronta para uso via MCP ou setup manual.

## Arquivo de referência

- **URL:** https://www.figma.com/design/XkqdVKL6yYuwt9Cgx75c4u/Nilo-Design-System-by-Kemet?node-id=4-4&t=4ikWP67z4l2gmjF2-1
- **fileKey:** `XkqdVKL6yYuwt9Cgx75c4u`
- **Owner:** Kemet

Este é o destino padrão para chamadas via Figma MCP (`upload_assets`, `get_design_context`, etc.).

---

## 1. Estrutura de Páginas no Arquivo Figma

```
📁 NILO DESIGN SYSTEM
│
├── 📄 _Cover              → Thumbnail do arquivo, visão geral + logotype hero
├── 📄 Brand               → Logotype Nilo® (full/symbol/wordmark), clearspace, do's & don'ts
├── 📄 Tokens              → Estilos globais e variáveis (cores, tipo, espaço)
├── 📄 Atoms               → Logo, Button, Badge, Input, Tag, Divider, Typography
├── 📄 Molecules           → Card, NavBar, TestimonialCard, PricingCard, FAQ
├── 📄 Organisms           → Hero, Works Grid, Services, Testimonials, Pricing, Footer
├── 📄 Marketing           → CTA Banner, Logo Bar, Stats Row, Journal Grid
├── 📄 Templates           → Landing Page, Case Study, About, Pricing Page
└── 📄 Playground          → Sandbox para exploração e testes
```

### Página `Brand` — Conteúdo

```
Brand
├── Section: Logotype
│   ├── 🅻 Logo / Full        → símbolo + "nilo" + "design system"
│   ├── 🅻 Logo / Symbol       → marca-d'água/avatar
│   ├── 🅻 Logo / Wordmark     → "nilo design system"
│   └── Spec sheet (clearspace, min-size, tamanhos)
├── Section: Color Application
│   ├── Logo on Background/Base (dark)
│   ├── Logo on Background/Surface
│   ├── Logo on Background/Light
│   └── Logo on Accent/Default (inverso, monocromático)
├── Section: Don'ts
│   ├── Não esticar, não rotacionar, não recolorir o subtitle
│   └── Não usar em fundos de baixo contraste
└── Section: Asset library
    └── Export presets: SVG, PNG @1x/@2x/@3x, favicon (32, 64, 256)
```

### Asset bruto

`design-system/assets/nilo-design-system-logotype.svg` — fonte de verdade.
Componente React: `design-system/atoms/Logo.tsx` (variants `full | symbol | wordmark`).

---

## 2. Variáveis Figma (Variable Collections)

### Collection: `Color/Primitives`
Paleta bruta — não usar diretamente nos componentes.

```
Neutral/50  → #FAFAFA
Neutral/100 → #F4F4F5
...
Neutral/950 → #09090B
Accent/400  → #C084FC
Accent/500  → #A855F7
...
Accent/950  → #1E0A2E
```

### Collection: `Color/Semantic` (2 modes: Dark / Light)

| Variable             | Dark Mode         | Light Mode        |
|---|---|---|
| Background/Base      | Neutral/950       | Neutral/50        |
| Background/Surface   | #141414           | White             |
| Background/Elevated  | #1E1E1E           | Neutral/100       |
| Border/Default       | #2A2A2A           | Neutral/200       |
| Border/Subtle        | #1F1F1F           | Neutral/100       |
| Text/Primary         | Neutral/50        | Neutral/950       |
| Text/Secondary       | Neutral/500       | Neutral/500       |
| Text/Muted           | Neutral/600       | Neutral/400       |
| Accent/Default       | Accent/400        | Accent/600        |
| Accent/Hover         | Accent/500        | Accent/700        |
| Accent/SubtleBG      | Accent/950        | Accent/50         |

### Collection: `Spacing`

```
Space/1  → 4px
Space/2  → 8px
Space/3  → 12px
Space/4  → 16px
Space/6  → 24px
Space/8  → 32px
Space/10 → 40px
Space/12 → 48px
Space/16 → 64px
Space/20 → 80px
Space/24 → 96px
Space/32 → 128px
```

### Collection: `Radius`

```
Radius/sm   → 6px
Radius/md   → 10px
Radius/lg   → 14px
Radius/xl   → 20px
Radius/2xl  → 28px
Radius/full → 9999px
```

---

## 3. Estilos de Texto (Text Styles)

Organizar na hierarquia:

```
Display/2XL   → Instrument Serif, 72px, Regular, lh 1.05
Display/XL    → Instrument Serif, 56px, Regular, lh 1.1
Display/LG    → Instrument Serif, 44px, Regular, lh 1.15
Heading/XL    → Inter, 32px, Medium, lh 1.2
Heading/LG    → Inter, 24px, Medium, lh 1.3
Heading/MD    → Inter, 20px, Medium, lh 1.4
Body/LG       → Inter, 18px, Regular, lh 1.6
Body/MD       → Inter, 16px, Regular, lh 1.6
Body/SM       → Inter, 14px, Regular, lh 1.5
Label/LG      → Inter, 13px, Medium, lh 1.4
Label/SM      → Inter, 11px, SemiBold, lh 1.4 + uppercase
Caption       → Inter, 12px, Regular, lh 1.4
```

---

## 4. Componentes — Estrutura de Variantes

### Logo
```
Properties (no Figma):
  Variant: [Full, Symbol, Wordmark]
  Tone:    [Negative, Positive]    → 3 × 2 = 6 variantes

Properties (React — atoms/Logo.tsx):
  variant: [full, symbol, wordmark]
  size:    [sm, md, lg, xl]

Specs:
  Full     viewBox    0 0 271 78    (ratio ~3.47:1)
  Symbol   viewBox    0 0 52 65     (ratio ~0.8:1)
  Wordmark viewBox    89 0 182 78   (ratio ~2.33:1)
  Clearspace min      = altura do símbolo / 2 em todos os lados
  Min height          = 20px (full e wordmark) / 16px (symbol)
  Negative glyph      = #FAF8F2    (cream) — usar sobre fundos escuros
  Positive glyph      = #0A0A0A    (near-black) — usar sobre fundos claros
  Subtitle color      = #9DAD45    (token: --logo-brand-accent) — mantém nos dois tons
  Glyph color (React) = currentColor — herda do parent (auto-tone via theme)

Source assets:
  assets/nilo-design-system-logotype.svg          → tom negativo
  assets/nilo-design-system-logotype-positive.svg → tom positivo
```

### Button
```
Properties:
  Variant: [primary, secondary, ghost, outline, accent]
  Size: [sm, md, lg]
  State: [default, hover, active, disabled, loading]
  Icon: [none, left, right]
```

### Badge
```
Properties:
  Variant: [default, accent, success, error, warning, outline]
  Size: [sm, md]
  Dot: [true, false]
```

### Card/Project
```
Properties:
  Size: [default, featured]
  State: [default, hover]
  HasImage: [true, false]
```

### Card/Service
```
Properties:
  State: [default, hover]
```

### Card/Testimonial
```
Properties:
  HasRating: [true, false]
  HasAvatar: [photo, initials]
```

### Card/Pricing
```
Properties:
  Highlighted: [true, false]
  HasBadge: [true, false]
```

### NavBar
```
Properties:
  State: [default, scrolled]
  Theme: [dark, light]
  MobileMenu: [closed, open]
```

### AccordionFaq/Item
```
Properties:
  State: [collapsed, expanded]
```

---

## 5. Layout Grid Specs (para Frames)

| Frame         | Width   | Columns | Gutter | Margin |
|---|---|---|---|---|
| Desktop       | 1440px  | 12      | 32px   | 80px   |
| Laptop        | 1280px  | 12      | 32px   | 64px   |
| Tablet        | 768px   | 8       | 24px   → | 40px   |
| Mobile        | 390px   | 4       | 16px   | 24px   |

---

## 6. Protótipo — Conexões Sugeridas

```
[NavBar: CTA] → [Hero Section]
[Hero: Primary CTA] → [Pricing Section / Contact Modal]
[Hero: Secondary CTA] → [Works Grid]
[Works: See all] → [Portfolio Page]
[Pricing: Get started] → [Contact Modal]
[Article Card] → [Article Detail Page]
[Footer links] → [respective sections]
```

---

## 7. MCP — Comandos Sugeridos (via Figma MCP)

Para criar o arquivo via MCP (`mcp__claude_ai_Figma`):

```
1. use_figma → autenticar sessão
2. create_new_file → "Nilo Design System"
3. create_design_system_rules → passar tokens.json
4. get_libraries → verificar fontes disponíveis (Inter, Instrument Serif)
5. upload_assets → enviar design-system/assets/nilo-design-system-logotype.svg
                    para a página `Brand` (component sets: Full / Symbol / Wordmark)
6. generate_diagram → arquitetura de componentes
```

---

## 8. Naming Convention

```
Component:  PascalCase            → Button, ProjectCard
Variant:    kebab-case            → primary, fade-up
Token:      Category/Subcategory  → Color/Accent/400
Layer:      [icon] label          → 🔲 Container, ✦ Accent Glow
Page:       _Prefix para internas → _Cover, _Changelog
```

---

## 9. Checklist de Entrega Figma

- [ ] Variáveis de cor com suporte Dark/Light mode
- [ ] Todos os Text Styles criados e nomeados
- [ ] Componentes com Auto Layout em todas as variantes
- [ ] Componentes com Interactive States (hover, focus, disabled)
- [ ] Grid aplicado em todos os frames de página
- [ ] Instâncias usam variáveis, não valores hardcoded
- [ ] Protótipo com fluxo principal conectado
- [ ] Exported assets em SVG para ícones
