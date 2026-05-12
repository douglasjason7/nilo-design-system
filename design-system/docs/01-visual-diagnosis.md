# 01 — Diagnóstico Visual da Interface

> **Referência:** https://orchid-template.framer.website/  
> **Filosofia:** Atomic Design (Brad Frost)  
> **Data de análise:** 2026-04-28

---

## 1. Estilo Visual Geral

| Atributo | Valor identificado |
|---|---|
| Estética | Minimalista moderna com tensão tipográfica |
| Modo | Dark-first com suporte a light |
| Personalidade | Premium, editorial, intencional |
| Público-alvo | Agências criativas, designers, freelancers de alto valor |
| Referência de mercado | Agência boutique / SaaS B2B de design |

---

## 2. Sistema de Cor

### Paleta Deduzida

| Token | Papel | Hex estimado |
|---|---|---|
| `--color-background` | Fundo base (dark) | `#0A0A0A` |
| `--color-surface` | Superfície de cards | `#141414` |
| `--color-surface-elevated` | Cards hover / modais | `#1E1E1E` |
| `--color-border` | Bordas sutis | `#2A2A2A` |
| `--color-text-primary` | Texto principal | `#F5F5F5` |
| `--color-text-secondary` | Texto de suporte | `#888888` |
| `--color-text-muted` | Labels, metadados | `#555555` |
| `--color-accent` | Cor de destaque (orchid) | `#C084FC` |
| `--color-accent-hover` | Hover do accent | `#A855F7` |
| `--color-accent-subtle` | Background de badges | `#1E0A2E` |
| `--color-white` | Contraste absoluto | `#FFFFFF` |
| `--color-error` | Estado de erro | `#EF4444` |
| `--color-success` | Estado de sucesso | `#22C55E` |

### Modo Light (inversão)

| Token | Hex estimado |
|---|---|
| `--color-background` | `#FAFAFA` |
| `--color-surface` | `#FFFFFF` |
| `--color-surface-elevated` | `#F4F4F5` |
| `--color-border` | `#E4E4E7` |
| `--color-text-primary` | `#09090B` |
| `--color-text-secondary` | `#71717A` |

---

## 3. Sistema Tipográfico

### Famílias

| Papel | Família | Fallback |
|---|---|---|
| Display / Hero | `"Instrument Serif"` | Georgia, serif |
| Body / UI | `"Inter"` | system-ui, sans-serif |
| Mono / Code | `"JetBrains Mono"` | monospace |

### Escala de Tipo (Major Third — 1.25x)

| Token | Tamanho | Line-height | Weight | Uso |
|---|---|---|---|---|
| `text-display-2xl` | 72px / 4.5rem | 1.05 | 400 | Hero principal |
| `text-display-xl` | 56px / 3.5rem | 1.1 | 400 | H1 de seção |
| `text-display-lg` | 44px / 2.75rem | 1.15 | 400 | H2 subseção |
| `text-heading-xl` | 32px / 2rem | 1.2 | 500 | H3, cards destacados |
| `text-heading-lg` | 24px / 1.5rem | 1.3 | 500 | H4 |
| `text-heading-md` | 20px / 1.25rem | 1.4 | 500 | H5, labels de seção |
| `text-body-lg` | 18px / 1.125rem | 1.6 | 400 | Corpo longo |
| `text-body-md` | 16px / 1rem | 1.6 | 400 | Corpo padrão |
| `text-body-sm` | 14px / 0.875rem | 1.5 | 400 | Descrições |
| `text-label-lg` | 13px / 0.8125rem | 1.4 | 500 | Labels |
| `text-label-sm` | 11px / 0.6875rem | 1.4 | 600 | Badges, caps |
| `text-caption` | 12px / 0.75rem | 1.4 | 400 | Notas, metadados |

---

## 4. Sistema de Espaçamento

Base: **8px grid** (t-shirt scale)

| Token | Valor | Uso |
|---|---|---|
| `space-1` | 4px | Micro gaps |
| `space-2` | 8px | Inline spacing |
| `space-3` | 12px | Compact padding |
| `space-4` | 16px | Default padding |
| `space-5` | 20px | Form elements |
| `space-6` | 24px | Card padding |
| `space-8` | 32px | Section sub-gap |
| `space-10` | 40px | Component gap |
| `space-12` | 48px | Large padding |
| `space-16` | 64px | Section gap (mobile) |
| `space-20` | 80px | Section gap (tablet) |
| `space-24` | 96px | Section gap (desktop) |
| `space-32` | 128px | Hero padding |
| `space-40` | 160px | Macro sections |

---

## 5. Sistema de Layout

### Breakpoints

| Token | Valor | Tipo |
|---|---|---|
| `screen-sm` | 640px | Mobile landscape |
| `screen-md` | 768px | Tablet |
| `screen-lg` | 1024px | Laptop |
| `screen-xl` | 1280px | Desktop |
| `screen-2xl` | 1536px | Wide |

### Container

| Breakpoint | Max-width | Padding horizontal |
|---|---|---|
| Mobile | 100% | 24px |
| Tablet | 100% | 40px |
| Desktop | 1200px | 80px |
| Wide | 1200px | 80px |

### Grid

- **12 colunas** em desktop  
- **8 colunas** em tablet  
- **4 colunas** em mobile  
- Gap: `32px` desktop / `24px` tablet / `16px` mobile

---

## 6. Motion & Interatividade

| Atributo | Valor |
|---|---|
| Easing padrão | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (ease-out) |
| Easing de entrada | `cubic-bezier(0.0, 0.0, 0.2, 1)` (decelerate) |
| Easing de saída | `cubic-bezier(0.4, 0.0, 1, 1)` (accelerate) |
| Easing de spring | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| Duration rápida | `150ms` |
| Duration padrão | `250ms` |
| Duration lenta | `400ms` |
| Duration extra | `600ms` |

### Padrões de animação identificados
- **Fade-up:** `opacity 0→1` + `translateY 20px→0`
- **Fade-in:** `opacity 0→1` apenas
- **Scale-in:** `scale 0.95→1` + `opacity 0→1`
- **Stagger:** delay incremental em listas (`50ms` entre items)

---

## 7. Bordas & Elevação

| Token | Valor |
|---|---|
| `radius-sm` | 6px |
| `radius-md` | 10px |
| `radius-lg` | 14px |
| `radius-xl` | 20px |
| `radius-2xl` | 28px |
| `radius-full` | 9999px |

| Token | Valor |
|---|---|
| `shadow-sm` | `0 1px 2px rgba(0,0,0,0.4)` |
| `shadow-md` | `0 4px 12px rgba(0,0,0,0.5)` |
| `shadow-lg` | `0 12px 32px rgba(0,0,0,0.6)` |
| `shadow-accent` | `0 0 32px rgba(192,132,252,0.15)` |

---

## 8. Padrões Estruturais de Página

### Fluxo narrativo identificado

```
[Nav] → [Hero + CTA] → [Social Proof / Logos] → [Trabalhos]
→ [Quem somos] → [Cases] → [Serviços] → [Depoimentos]
→ [Preços] → [FAQ] → [Blog/Journal] → [CTA Final] → [Footer]
```

### Padrões de composição

1. **Split layout** — texto à esquerda, visual à direita (hero, about)
2. **Grid assimétrico** — cards de larguras variadas (featured works)
3. **Full-width** — seções de impacto (CTA, testimonial)
4. **3-4 colunas** — serviços, features, pricing
5. **Lista vertical** — FAQ, journal

---

## 9. Diagnóstico de Hierarquia de Atenção

```
1° Headline do hero (display, alto contraste)
2° CTA buttons (accent color)
3° Imagens de projeto (visual anchors)
4° Seção de preços (conversão)
5° Depoimentos (credibilidade)
6° Footer links (navegação secundária)
```

---

## 10. Oportunidades de Design System

| Área | Observação |
|---|---|
| Tokens | Sistema de variáveis CSS completo suportando dark/light |
| Componentes | 100% composable via props |
| Motion | Sistema centralizado de animações |
| Grid | Layout container + grid utilitário |
| Theming | Suporte a múltiplas marcas via tokens layer |
