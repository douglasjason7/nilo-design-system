/** @type {import('tailwindcss').Config} */
/* Valores reconciliados com o brand-kit Kemet. Ver tokens/RECONCILIACAO-KEMET.md. */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./design-system/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],

  theme: {
    extend: {
      /* ── COLORS ── */
      colors: {
        /* Neutrals Kemet: Papyrus → Sand → Stone → Graphite → Onyx */
        neutral: {
          50:  "#FAF8F2",
          100: "#E8E4DC",
          200: "#DCD6C8",
          300: "#C8C2B5",
          400: "#8C8C8C",
          500: "#6B6B6B",
          600: "#4B4B4B",
          700: "#2B2B2B",
          800: "#1F1F1F",
          900: "#141414",
          950: "#0A0A0A",
        },
        /* Accent = Royal (roxo Kemet · autoridade/marca) */
        accent: {
          50:  "#F4ECFF",
          100: "#E5D2FF",
          200: "#CFAEFF",
          300: "#B884FF",
          400: "#9854E5",
          500: "#7B2CBF",
          600: "#65229F",
          700: "#4F1A7E",
          800: "#3A1359",
          900: "#240B36",
          950: "#240B36",
        },
        royal: {
          50:  "#F4ECFF", 100: "#E5D2FF", 200: "#CFAEFF", 300: "#B884FF", 400: "#9854E5",
          500: "#7B2CBF", 600: "#65229F", 700: "#4F1A7E", 800: "#3A1359", 900: "#240B36",
        },
        olive: {
          50:  "#F4F6E6", 100: "#E6EBC7", 200: "#D2DA9E", 300: "#B8C56A", 400: "#9DAD45",
          500: "#6E7A2E", 600: "#5A6325", 700: "#454C1C", 800: "#2F3413", 900: "#191C0A",
        },
        sun: {
          50:  "#FFF1E6", 100: "#FFD9BF", 200: "#FFB888", 300: "#FF9555", 400: "#FA7A2C",
          500: "#F26419", 600: "#CE5210", 700: "#A23F09", 800: "#742C05", 900: "#3F1802",
        },
      },

      /* ── TYPOGRAPHY ── */
      fontFamily: {
        display: ['"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        body:    ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono:    ['"Nova Mono"', "ui-monospace", '"JetBrains Mono"', "Menlo", "monospace"],
      },
      fontSize: {
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

      /* ── SPACING ── */
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
      },

      /* ── BORDER RADIUS (Kemet: xl e 2xl convergem em 28px) ── */
      borderRadius: {
        sm:   "0.375rem",
        md:   "0.75rem",
        lg:   "1.25rem",
        xl:   "1.75rem",
        "2xl":"1.75rem",
      },

      /* ── SHADOWS (brand-kit — base rgba(10,10,10)) ── */
      boxShadow: {
        sm:     "0 1px 2px rgba(10, 10, 10, 0.06)",
        md:     "0 8px 24px rgba(10, 10, 10, 0.08)",
        lg:     "0 20px 48px rgba(10, 10, 10, 0.12)",
        accent: "0 0 60px rgba(123, 44, 191, 0.45)",
      },

      /* ── ANIMATION (brand-kit motion) ── */
      transitionTimingFunction: {
        /* DEFAULT key → generates class `ease` */
        DEFAULT: "cubic-bezier(0.22, 1, 0.36, 1)",
        hover:  "cubic-bezier(0.16, 1, 0.3, 1)",
        in:     "cubic-bezier(0.4, 0.0, 1, 1)",
        out:    "cubic-bezier(0.0, 0.0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        fast: "160ms",
        base: "240ms",
        slow: "420ms",
        xslow:"720ms",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)"    },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up":  "fade-up 0.4s cubic-bezier(0.0, 0.0, 0.2, 1) forwards",
        "fade-in":  "fade-in 0.25s cubic-bezier(0.0, 0.0, 0.2, 1) forwards",
        "scale-in": "scale-in 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        marquee:    "marquee 30s linear infinite",
      },

      /* ── CONTAINER ── */
      maxWidth: {
        container: "1280px",
      },
    },
  },

  plugins: [],
};
