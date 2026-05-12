/** @type {import('tailwindcss').Config} */
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
        neutral: {
          50:  "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
          950: "#09090B",
        },
        accent: {
          50:  "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA",
          700: "#7E22CE",
          800: "#6B21A8",
          900: "#581C87",
          950: "#1E0A2E",
        },
      },

      /* ── TYPOGRAPHY ── */
      fontFamily: {
        display: ['"Inter"', "system-ui", "sans-serif"],
        body:    ['"Inter"', "system-ui", "sans-serif"],
        mono:    ['"JetBrains Mono"', '"Fira Code"', "monospace"],
      },
      fontSize: {
        "display-2xl": ["4.5rem",   { lineHeight: "1.05" }],
        "display-xl":  ["3.5rem",   { lineHeight: "1.1"  }],
        "display-lg":  ["2.75rem",  { lineHeight: "1.15" }],
        "heading-xl":  ["2rem",     { lineHeight: "1.2"  }],
        "heading-lg":  ["1.5rem",   { lineHeight: "1.3"  }],
        "heading-md":  ["1.25rem",  { lineHeight: "1.4"  }],
        "body-lg":     ["1.125rem", { lineHeight: "1.6"  }],
        "body-md":     ["1rem",     { lineHeight: "1.6"  }],
        "body-sm":     ["0.875rem", { lineHeight: "1.5"  }],
        "label-lg":    ["0.8125rem",{ lineHeight: "1.4"  }],
        "label-sm":    ["0.6875rem",{ lineHeight: "1.4"  }],
        caption:       ["0.75rem",  { lineHeight: "1.4"  }],
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

      /* ── BORDER RADIUS ── */
      borderRadius: {
        sm:   "0.375rem",
        md:   "0.625rem",
        lg:   "0.875rem",
        xl:   "1.25rem",
        "2xl":"1.75rem",
      },

      /* ── SHADOWS ── */
      boxShadow: {
        sm:     "0 1px 2px rgba(0, 0, 0, 0.4)",
        md:     "0 4px 12px rgba(0, 0, 0, 0.5)",
        lg:     "0 12px 32px rgba(0, 0, 0, 0.6)",
        accent: "0 0 32px rgba(192, 132, 252, 0.15)",
      },

      /* ── ANIMATION ── */
      transitionTimingFunction: {
        /* DEFAULT key → generates class `ease` */
        DEFAULT: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        /* named keys → generate classes `ease-in`, `ease-out`, `ease-spring` */
        in:     "cubic-bezier(0.4, 0.0, 1, 1)",
        out:    "cubic-bezier(0.0, 0.0, 0.2, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        base: "250ms",
        slow: "400ms",
        xslow:"600ms",
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
        container: "1200px",
      },
    },
  },

  plugins: [],
};
