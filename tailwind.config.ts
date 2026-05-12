import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./design-system/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        /* Semantic aliases — bound to CSS variables (themeable) */
        bg:            "var(--bg)",
        surface:       "var(--bg-surface)",
        elevated:      "var(--bg-elevated)",
        border:        "var(--border)",
        "border-subtle": "var(--border-subtle)",
        fg:            "var(--text-primary)",
        "fg-muted":    "var(--text-secondary)",
        "fg-subtle":   "var(--text-muted)",
        accent: {
          DEFAULT: "var(--accent)",
          hover:   "var(--accent-hover)",
          subtle:  "var(--accent-subtle-bg)",
          50:  "#FAF5FF", 100: "#F3E8FF", 200: "#E9D5FF", 300: "#D8B4FE",
          400: "#C084FC", 500: "#A855F7", 600: "#9333EA", 700: "#7E22CE",
          800: "#6B21A8", 900: "#581C87", 950: "#1E0A2E",
        },
        neutral: {
          50:  "#FAFAFA", 100: "#F4F4F5", 200: "#E4E4E7", 300: "#D4D4D8",
          400: "#A1A1AA", 500: "#71717A", 600: "#52525B", 700: "#3F3F46",
          800: "#27272A", 900: "#18181B", 950: "#09090B",
        },
        success: {
          50:"#F0FDF4",400:"#4ADE80",500:"#22C55E",700:"#15803D",800:"#166534",900:"#14532D",950:"#052E16",
        },
        error: {
          50:"#FEF2F2",400:"#F87171",500:"#EF4444",700:"#B91C1C",800:"#991B1B",900:"#7F1D1D",950:"#450A0A",
        },
        warning: {
          50:"#FFFBEB",400:"#FBBF24",500:"#F59E0B",700:"#B45309",800:"#92400E",900:"#78350F",950:"#451A03",
        },
        info: {
          50:"#EFF6FF",400:"#60A5FA",500:"#3B82F6",700:"#1D4ED8",800:"#1E40AF",900:"#1E3A8A",950:"#172554",
        },
        brand: {
          olive: "var(--color-brand-olive)",   // Logotype subtitle accent — Nilo Design System
          cream: "var(--color-brand-cream)",   // Logotype negative-tone glyph
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body:    ["var(--font-body)"],
        mono:    ["var(--font-mono)"],
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
      spacing: {
        /* extend Tailwind's default scale with extras pulled from Figma audit */
        18: "4.5rem", 22: "5.5rem", 26: "6.5rem", 30: "7.5rem", 34: "8.5rem", 38: "9.5rem",
      },
      borderRadius: {
        sm:  "0.375rem", md: "0.625rem", lg: "0.875rem", xl: "1.25rem", "2xl":"1.75rem",
      },
      boxShadow: {
        sm:     "var(--shadow-sm)",
        md:     "var(--shadow-md)",
        lg:     "var(--shadow-lg)",
        accent: "var(--shadow-accent)",
      },
      transitionTimingFunction: {
        DEFAULT: "var(--ease-default)",
        in:      "var(--ease-in)",
        out:     "var(--ease-out)",
        spring:  "var(--ease-spring)",
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
      },
      animation: {
        "fade-up":  "fade-up 0.4s var(--ease-out) forwards",
        "fade-in":  "fade-in 0.25s var(--ease-out) forwards",
        "scale-in": "scale-in 0.25s var(--ease-spring) forwards",
        marquee:    "marquee 30s linear infinite",
      },
      maxWidth: { container: "1200px" },
      zIndex: {
        below: "-1", base: "0", raised: "10", dropdown: "100",
        sticky: "200", overlay: "300", modal: "400", toast: "500", top: "999",
      },
    },
  },
  plugins: [],
};

export default config;
