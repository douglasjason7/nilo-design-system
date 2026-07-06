/* ============================================================
   nilo Design System — Tailwind PRESET (reutilizável)
   Valores reconciliados com o brand-kit Kemet.
   Ver tokens/RECONCILIACAO-KEMET.md e tokens/tokens.css.

   Uso no projeto consumidor (tailwind.config.mjs):
     import niloPreset from "nilo-design-system/preset";
     export default {
       presets: [niloPreset],
       content: [
         "./src/[glob]/(astro,js,ts,jsx,tsx,mdx)",
         "./node_modules/nilo-design-system/design-system/[glob]/(js,ts,jsx,tsx)",
       ],
     };
   (troque [glob]/(…) pelos globs reais — não dá pra escrever
   asterisco-barra dentro deste comentário de bloco.)

   Aliases semânticos (bg, fg, accent…) apontam para as CSS vars
   de tokens/tokens.css — importe "nilo-design-system/tokens.css"
   no CSS global do consumidor.
   ============================================================ */

/** @type {import('tailwindcss').Config} */
const preset = {
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        /* Semantic aliases — bound to CSS variables (themeable) */
        bg:              "var(--bg)",
        surface:         "var(--bg-surface)",
        elevated:        "var(--bg-elevated)",
        border:          "var(--border)",
        "border-subtle": "var(--border-subtle)",
        fg:              "var(--text-primary)",
        "fg-muted":      "var(--text-secondary)",
        "fg-subtle":     "var(--text-muted)",
        /* Accent = Royal (roxo Kemet · autoridade/marca). Escala = royal do brand-kit. */
        accent: {
          DEFAULT: "var(--accent)",
          hover:   "var(--accent-hover)",
          subtle:  "var(--accent-subtle-bg)",
          50:  "#F4ECFF", 100: "#E5D2FF", 200: "#CFAEFF", 300: "#B884FF",
          400: "#9854E5", 500: "#7B2CBF", 600: "#65229F", 700: "#4F1A7E",
          800: "#3A1359", 900: "#240B36", 950: "#240B36",
        },
        /* Neutrals Kemet: Papyrus → Sand → Stone → Graphite → Onyx */
        neutral: {
          50:  "#FAF8F2", 100: "#E8E4DC", 200: "#DCD6C8", 300: "#C8C2B5",
          400: "#8C8C8C", 500: "#6B6B6B", 600: "#4B4B4B", 700: "#2B2B2B",
          800: "#1F1F1F", 900: "#141414", 950: "#0A0A0A",
        },
        /* Escalas accent nomeadas do brand-kit (aditivas, função semântica) */
        royal: {
          50:"#F4ECFF",100:"#E5D2FF",200:"#CFAEFF",300:"#B884FF",400:"#9854E5",
          500:"#7B2CBF",600:"#65229F",700:"#4F1A7E",800:"#3A1359",900:"#240B36",
        },
        olive: {
          50:"#F4F6E6",100:"#E6EBC7",200:"#D2DA9E",300:"#B8C56A",400:"#9DAD45",
          500:"#6E7A2E",600:"#5A6325",700:"#454C1C",800:"#2F3413",900:"#191C0A",
        },
        sun: {
          50:"#FFF1E6",100:"#FFD9BF",200:"#FFB888",300:"#FF9555",400:"#FA7A2C",
          500:"#F26419",600:"#CE5210",700:"#A23F09",800:"#742C05",900:"#3F1802",
        },
        /* Semantics Kemet — 500 = valor canônico; demais degraus derivados */
        success: {
          50:"#E6F3EA",400:"#5CBF7E",500:"#2F8A4E",700:"#256E3E",800:"#1C5330",900:"#123A21",950:"#0A2214",
        },
        error: {
          50:"#F8E1E1",400:"#E36161",500:"#C73838",700:"#A92F2F",800:"#872525",900:"#5E1A1A",950:"#360F0F",
        },
        warning: {
          50:"#FBF1D6",400:"#E6BB3E",500:"#D4A018",700:"#A87F13",800:"#7E5F0E",900:"#544009",950:"#2C2105",
        },
        info: {
          50:"#E1EAF7",400:"#6B95E2",500:"#3B6CC9",700:"#2F569F",800:"#244178",900:"#182C50",950:"#0D1830",
        },
        brand: {
          olive: "var(--color-brand-olive)",   // Logotype subtitle accent — olive.500 Kemet
          cream: "var(--color-brand-cream)",   // Logotype negative-tone glyph — papyrus.50
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
        mono:    ["var(--font-mono)"],
      },
      fontSize: {
        /* Escala Kemet (05-typography-system): base 16 / ratio 1.25 */
        "display-2xl": ["4.5rem",   { lineHeight: "1.05", letterSpacing: "-0.03em"  }],
        "display-xl":  ["3.5rem",   { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-lg":  ["2.75rem",  { lineHeight: "1.1",  letterSpacing: "-0.02em"  }],
        "heading-xl":  ["2.25rem",  { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "heading-lg":  ["1.75rem",  { lineHeight: "1.2",  letterSpacing: "-0.01em"  }],
        "heading-md":  ["1.375rem", { lineHeight: "1.25", letterSpacing: "-0.005em" }],
        "body-lg":     ["1.125rem", { lineHeight: "1.55" }],
        "body-md":     ["1rem",     { lineHeight: "1.6"  }],
        "body-sm":     ["0.875rem", { lineHeight: "1.55" }],
        "label-lg":    ["0.8125rem",{ lineHeight: "1.4"  }],
        "label-sm":    ["0.6875rem",{ lineHeight: "1.4"  }],
        caption:       ["0.75rem",  { lineHeight: "1.5", letterSpacing: "0.01em" }],
      },
      spacing: {
        /* extras além da escala padrão do Tailwind (grid de 8px) */
        18: "4.5rem", 22: "5.5rem", 26: "6.5rem", 30: "7.5rem", 34: "8.5rem", 38: "9.5rem",
      },
      borderRadius: {
        /* Kemet: 4 degraus + full. xl e 2xl convergem em 28px (Kemet não tem 2xl). */
        sm:  "0.375rem", md: "0.75rem", lg: "1.25rem", xl: "1.75rem", "2xl":"1.75rem",
      },
      boxShadow: {
        sm:     "var(--shadow-sm)",
        md:     "var(--shadow-md)",
        lg:     "var(--shadow-lg)",
        accent: "var(--shadow-accent)",
        /* Efeitos premium (teardown cosmoq → Kemet). Ver tokens.css → EFFECTS. */
        float:      "var(--shadow-float)",   // elevação flutuante multicamada
        halo:       "var(--glow-halo)",      // halo sun sob CTAs
        "glow-dual":"var(--glow-dual)",      // inner glow royal + cream nos cards
        glass:      "var(--glass-highlight)",// highlight interno do vidro
      },
      backgroundImage: {
        /* Gradientes de marca — frio→quente (royal→sun). Ver tokens.css → EFFECTS. */
        "gradient-brand":    "var(--gradient-brand)",
        "gradient-brand-alt":"var(--gradient-brand-alt)",
        "gradient-metallic": "var(--gradient-metallic)",
        "gradient-glass":    "var(--gradient-glass)",
      },
      backdropBlur: {
        glass: "var(--glass-blur)",          // 10px — frosted glass
      },
      transitionTimingFunction: {
        DEFAULT:   "var(--ease-default)",
        in:        "var(--ease-in)",
        out:       "var(--ease-out)",
        spring:    "var(--ease-spring)",
        /* Assinaturas de movimento do cosmoq (tween, sem spring) */
        cinematic: "cubic-bezier(0.12, 0.23, 0.5, 1)",  // ease-out suave (padrão dos reveals)
        hero:      "var(--ease-hover)",                 // cubic-bezier(0.16,1,0.3,1) — reveals de hero
      },
      transitionDuration: {
        fast:  "var(--duration-fast)",
        base:  "var(--duration-base)",
        slow:  "var(--duration-slow)",
        xslow: "var(--duration-xslow)",
      },
      keyframes: {
        "fade-up":  { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-in":  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        "scale-in": { "0%": { opacity: "0", transform: "scale(0.95)" }, "100%": { opacity: "1", transform: "scale(1)" } },
        marquee:    { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        /* Blur-reveal — assinatura de entrada do cosmoq (fade + rise + desfoque→nítido) */
        "fade-up-blur": {
          "0%":   { opacity: "0", transform: "translateY(24px)", filter: "blur(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)",    filter: "blur(0)" },
        },
      },
      animation: {
        "fade-up":  "fade-up 0.4s var(--ease-out) forwards",
        "fade-in":  "fade-in 0.25s var(--ease-out) forwards",
        "scale-in": "scale-in 0.25s var(--ease-spring) forwards",
        marquee:    "marquee 30s linear infinite",
        /* Reveal cinematográfico: padrão 0.6s / hero 1.2s (easings do teardown) */
        "fade-up-blur":      "fade-up-blur 0.6s cubic-bezier(0.12,0.23,0.5,1) forwards",
        "fade-up-blur-hero": "fade-up-blur 1.2s var(--ease-hover) forwards",
      },
      maxWidth: { container: "1280px" },
      zIndex: {
        below: "-1", base: "0", raised: "10", dropdown: "1000",
        sticky: "1100", overlay: "1200", popover: "1400", modal: "1300", toast: "1500", top: "1600",
      },
    },
  },
};

export default preset;
