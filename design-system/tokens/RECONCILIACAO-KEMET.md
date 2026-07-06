# Reconciliação de Tokens — nilo → Kemet

## Decisão

O **brand-kit do kemet-core é a fonte única de verdade visual da marca**. Os tokens do
nilo passam a **derivar** dele. Fonte:

- `kemet-core/brand-kit/brand-tokens.json` (v2.0.0)
- `kemet-core/brand-kit/tokens.css`
- Docs de apoio: `04-color-system.md`, `05-typography-system.md`, `07-design-tokens.md`

**Regra desta reconciliação:** preservar os **nomes/estrutura** de token que o nilo já
expõe (`--color-accent-*`, `--color-neutral-*`, classes Tailwind `accent-500`,
`neutral-900`, `font-display`, `text-heading-xl`, etc.) e **trocar apenas os valores**
para bater com o brand-kit. Assim nada que consome os tokens quebra a API.

Nenhum componente (atoms/molecules/organisms) foi tocado nesta tarefa — só tokens,
tailwind configs, o link de fontes e este doc.

---

## Arquivos alterados

| Arquivo | O que mudou |
|---|---|
| `design-system/tokens/tokens.css` | Todos os valores de cor, tipografia, escala, radius, shadow, motion, z-index e aliases semânticos → Kemet. Nomes preservados. Adicionadas escalas `--color-royal/olive/sun-*` e letter-spacing. |
| `design-system/tokens/tokens.json` | Espelho do CSS no mesmo formato (design-tokens). Cada token ganhou anotação `kemet` com o par canônico. |
| `tailwind.config.ts` (raiz) | Escalas `accent`/`neutral` com hex Kemet; adicionadas `royal/olive/sun`; `fontSize`, `borderRadius`, `maxWidth`, `zIndex` e semantics realinhados. |
| `design-system/tailwind/tailwind.config.js` | Mesmos valores Kemet; `fontFamily` display→Space Grotesk, mono→Nova Mono. |
| `index.html` | Link do Google Fonts: Inter+JetBrains Mono → Space Grotesk + Inter + Nova Mono. |

---

## Mapa de cores

### Accent: orchid (roxo Tailwind) → **Royal** (roxo Kemet)

O accent antigo do nilo era o purple genérico do Tailwind ("orchid"). Passa a ser a
escala **Royal** do brand-kit (função: autoridade, profundidade, marca).

| Token nilo | Antigo (orchid) | Novo (Kemet Royal) | Par canônico |
|---|---|---|---|
| `accent-50`  | `#FAF5FF` | `#F4ECFF` | royal.50 |
| `accent-100` | `#F3E8FF` | `#E5D2FF` | royal.100 |
| `accent-200` | `#E9D5FF` | `#CFAEFF` | royal.200 |
| `accent-300` | `#D8B4FE` | `#B884FF` | royal.300 |
| `accent-400` | `#C084FC` | `#9854E5` | royal.400 |
| `accent-500` | `#A855F7` | **`#7B2CBF`** | **royal.500 (primary)** |
| `accent-600` | `#9333EA` | `#65229F` | royal.600 |
| `accent-700` | `#7E22CE` | `#4F1A7E` | royal.700 |
| `accent-800` | `#6B21A8` | `#3A1359` | royal.800 |
| `accent-900` | `#581C87` | `#240B36` | royal.900 |
| `accent-950` | `#1E0A2E` | `#240B36` | **alias de royal.900** (ver pendências) |

### Neutrals: zinc (Tailwind) → **Papyrus / Sand / Stone / Graphite / Onyx** (Kemet)

| Token nilo | Antigo (zinc) | Novo (Kemet) | Par canônico |
|---|---|---|---|
| `neutral-50`  | `#FAFAFA` | `#FAF8F2` | papyrus.50 |
| `neutral-100` | `#F4F4F5` | `#E8E4DC` | sand.100 |
| `neutral-200` | `#E4E4E7` | `#DCD6C8` | sand.200 |
| `neutral-300` | `#D4D4D8` | `#C8C2B5` | sand.300 |
| `neutral-400` | `#A1A1AA` | `#8C8C8C` | stone.400 |
| `neutral-500` | `#71717A` | `#6B6B6B` | stone.500 |
| `neutral-600` | `#52525B` | `#4B4B4B` | **interpolado** (ver pendências) |
| `neutral-700` | `#3F3F46` | `#2B2B2B` | graphite.700 |
| `neutral-800` | `#27272A` | `#1F1F1F` | graphite.800 |
| `neutral-900` | `#18181B` | `#141414` | onyx.900 |
| `neutral-950` | `#09090B` | `#0A0A0A` | onyx.950 / kemet.black |

### Escalas accent adicionadas (aditivas — não existiam no nilo)

Do brand-kit, com função semântica. Disponíveis como `--color-olive-*`, `--color-sun-*`,
`--color-royal-*` e como classes Tailwind `olive-*`, `sun-*`, `royal-*`.

- **Royal** (roxo · autoridade/marca) — 50→900 (é a fonte do `accent-*`).
- **Olive** (verde · sistema/processo, o "Nilo") — `olive.500 #6E7A2E` primary.
- **Sun** (laranja · resultado/conversão) — `sun.500 #F26419` primary.

### Semantics: Tailwind → tons Kemet

| Token nilo | Antigo | Novo (Kemet 500) |
|---|---|---|
| `success-500` | `#22C55E` | `#2F8A4E` |
| `error-500`   | `#EF4444` | `#C73838` |
| `warning-500` | `#F59E0B` | `#D4A018` |
| `info-500`    | `#3B82F6` | `#3B6CC9` |

No `tailwind.config.ts` os demais degraus (50/400/700/800/900/950) foram derivados a
partir do 500 Kemet (o 50 usa a surface e o 400 a variante dark do brand-tokens).

### Brand (logotype)

| Token | Antigo | Novo | Nota |
|---|---|---|---|
| `--color-brand-olive` | `#9DAD45` | `#6E7A2E` | Sobe para olive.500 (primary). O valor antigo era, na prática, o olive.400 Kemet. |
| `--color-brand-cream` | `#FAF8F2` | `#FAF8F2` | Já era papyrus.50 — mantido. |

---

## Mapa de tipografia

| Item | Antigo | Novo (Kemet) |
|---|---|---|
| `--font-display` | Inter | **Space Grotesk**, ui-sans-serif, system-ui, sans-serif |
| `--font-body` | Inter | **Inter**, ui-sans-serif, system-ui, sans-serif |
| `--font-mono` | JetBrains Mono | **Nova Mono**, ui-monospace, JetBrains Mono, Menlo, monospace |

Escala (nomes nilo preservados; valores do brand-kit):

| Token nilo | Antigo | Novo | Par Kemet |
|---|---|---|---|
| `display-2xl` | 72px / 1.05 / w400 | 72px / 1.05 / -0.03em / **w600** | display.xl |
| `display-xl`  | 56px / 1.1 / w400 | 56px / 1.08 / -0.025em / **w600** | display.lg |
| `display-lg`  | 44px / 1.15 / w400 | 44px / 1.10 / -0.02em / **w500** | display.md |
| `heading-xl`  | 32px / 1.2 / w500 | **36px** / 1.15 / -0.015em / **w600** | heading.h1 |
| `heading-lg`  | 24px / 1.3 / w500 | **28px** / 1.20 / -0.01em / **w600** | heading.h2 |
| `heading-md`  | 20px / 1.4 / w500 | **22px** / 1.25 / -0.005em / **w600** | heading.h3 |
| `body-lg`     | 18px / 1.6 | 18px / **1.55** | body.lg |
| `body-md`     | 16px / 1.6 | 16px / 1.6 | body.md |
| `body-sm`     | 14px / 1.5 | 14px / **1.55** | body.sm |
| `label-lg`    | 13px / 1.4 / w500 | 13px / 1.4 / w500 | label |
| `label-sm`    | 11px / 1.4 / w600 | 11px / 1.4 / w600 | sem par (ver pendências) |
| `caption`     | 12px / 1.4 / w400 | 12px / 1.5 / **w500** / 0.01em | body.xs |

Adicionadas as variáveis de letter-spacing `--ls-tighter/tight/normal/wide/wider`.

---

## Mapa de escala, forma e movimento

| Grupo | Mudança |
|---|---|
| **Spacing** | Mantida a convenção nilo `--space-N` (N×4px), que casa com a grade 8px Kemet. Adicionados `--space-14: 56px` (spacing.8) e `--space-30: 120px` (spacing.10). Degraus 20/48/64/96/128px marcados como fora da escala canônica. |
| **Radius** | sm 6 (=) · md 10→**12** · lg 14→**20** · xl 20→**28** · 2xl 28→**28** (alias de xl). |
| **Shadow** | Base rgba(0,0,0) → **rgba(10,10,10)** Kemet. sm `0 1px 2px /.06` · md `0 8px 24px /.08` · lg `0 20px 48px /.12`. `--shadow-accent` → glow royal `0 0 60px rgba(123,44,191,.45)`. Adicionado `--shadow-focus-ring`. |
| **Motion** | fast 150→**160ms** · base 250→**240ms** · slow 400→**420ms** · xslow 600→**720ms**. `--ease-default` → `cubic-bezier(0.22,1,0.36,1)`. Adicionado `--ease-hover`. |
| **Z-index** | dropdown 100→**1000** · sticky 200→**1100** · overlay 300→**1200** · modal 400→**1300** · popover **1400** (novo) · toast 500→**1500** · top 999→**1600**. |
| **Container** | `--container-max` 1200→**1280px** (container.xl). Paddings mobile/tablet/desktop (24/40/80) já batiam com spacing 5/7/9. |

### Aliases semânticos (dark é o default do nilo)

| Alias | Dark antigo | Dark novo | Light novo |
|---|---|---|---|
| `--bg` | neutral-950 | onyx.950 | papyrus.50 |
| `--bg-surface` | `#141414` literal | onyx.900 (var) | white |
| `--bg-elevated` | `#1E1E1E` literal | graphite.800 (var) | sand.100 |
| `--border` | `#2A2A2A` literal | graphite.700 (var) | sand.300 |
| `--border-subtle` | `#1F1F1F` literal | graphite.800 (var) | sand.200 |
| `--text-secondary` | stone.500 | **sand.200** (regra dark do 04-color) | graphite.700 |
| `--text-muted` | neutral-600 | stone.400 | stone.500 |
| `--accent` | accent-400 | **accent-500** (royal.500) | accent-500 |
| `--accent-hover` | accent-500 | accent-400 (dark clareia) | accent-600 |

---

## Pendências

1. **`neutral-600` interpolado** — a escala neutra Kemet não tem um par direto entre
   `stone.500 #6B6B6B` e `graphite.700 #2B2B2B`. Usei `#4B4B4B` como interpolação. Se o
   brand-kit definir esse degrau no futuro, substituir.
2. **`accent-950` = alias de `royal.900`** — o brand-kit vai só até 900. Mantido o nome
   `950` para não quebrar consumo, apontando para `#240B36`. Auditar usos de `accent-950`.
3. **`radius-xl` e `radius-2xl` convergem em 28px** — Kemet só tem 4 degraus (sm/md/lg/xl)
   + full. `2xl` virou alias de `xl`. Componentes que usavam `2xl` para um raio maior que
   `xl` precisam ser revisados (hoje ficam iguais).
4. **`label-sm` (11px)** — não existe par na escala tipográfica Kemet (o menor é body.xs
   12px). Mantido por compatibilidade; avaliar remoção ao revisar componentes.
5. **Spacing fora da grade canônica** — 20, 48, 64, 96, 128px não estão na escala Kemet
   (4/8/12/16/24/32/40/56/80/120/160). Mantidos por compatibilidade; limpar junto com a
   revisão de componentes.
6. **`--ease-in/out/spring`** — utilitários de animação do nilo sem equivalente no
   brand-kit. Preservados; o easing de marca é `--ease-default` (0.22,1,0.36,1).
7. **Semantics estendidas (50/400/700/800/900/950)** no tailwind.config.ts são **derivadas**
   do 500 Kemet, não canônicas. Só o 500 (e o 50/400 em dark) vem direto do brand-kit.
8. **Componentes ainda não revisados visualmente** com os novos valores. O accent agora é
   mais escuro/profundo (Royal) que o orchid claro — esperado, é a marca mandando, mas
   contrastes e estados hover/pressed dos atoms devem ser conferidos numa próxima tarefa.
9. **Docs/Figma do nilo** (`design-system/docs`, `design-system/figma`) podem citar orchid
   e Inter — desatualizados, fora do escopo desta tarefa (só tokens).

---

## Receitas de efeito (teardown cosmoq → Kemet)

Efeitos visuais premium destilados do `cosmoq.framer.website` e remapeados para a
cromática Kemet. **Técnica preservada, cor trocada.** Tokens em `tokens.css` (bloco
`EFFECTS`), escala Tailwind em `preset.js`, classes em `components.css`, componentes em
`atoms/` (`GlassPanel`, `NoiseOverlay`, `Aurora`, `Reveal`) + variante `glass` no `Card`.

| Papel (cosmoq) | Valor original | → Kemet |
|---|---|---|
| Acento frio | azul `#0175ff` | royal `#7B2CBF` (`--accent`) |
| Acento quente | âmbar `#ffac0a` | sun `#F26419` |
| Highlight creme | `#ffcd7d` | papyrus `#FAF8F2` / sun-200 |
| Aro de vidro | `rgba(125,164,255,.16)` | royal-300 α `rgba(184,132,255,.16)` |
| Halo de CTA | `rgba(255,179,73,.25)` | sun α `rgba(242,100,25,.28)` |
| Gradiente-assinatura | `148deg azul→âmbar` | `148deg royal→sun` |

Receitas entregues: **glass** (`--glass-*`, `.ds-glass`, `backdrop-blur-glass`), **noise**
(feTurbulence SVG a ~0.12 com máscara de fade — sem asset externo), **gradientes de marca**
(`bg-gradient-brand/-alt/-metallic`, `.ds-gradient-text`, `.ds-border-gradient`), **light**
(`shadow-halo`, `shadow-float`, `shadow-glow-dual`, `.ds-orb`, `Aurora`), **motion**
(`ease-cinematic`/`ease-hero`, `animate-fade-up-blur`, componente `Reveal` on-scroll).
Como parte da frente, removido o resíduo da paleta orchid (`#c084fc`/`rgba(192,132,252)`)
das classes `.ds-glow-accent` e `.ds-gradient-text`.
