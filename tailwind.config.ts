import type { Config } from "tailwindcss";
import niloPreset from "./design-system/tailwind/preset.js";

/*
 * Config local do nilo (playground/showcase Vite).
 * Todo o theme vive no PRESET compartilhado:
 *   design-system/tailwind/preset.js
 * Valores reconciliados com o brand-kit Kemet —
 * ver design-system/tokens/RECONCILIACAO-KEMET.md.
 */
const config: Config = {
  presets: [niloPreset],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./design-system/**/*.{js,ts,jsx,tsx}",
    "./examples/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
};

export default config;
