import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@ds": path.resolve(__dirname, "./design-system"),
    },
  },
  server: { port: 5173, open: true },
});
