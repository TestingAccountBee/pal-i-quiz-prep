import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/pal-i-quiz-prep/",
  
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // Este plugin só será ativado em modo de desenvolvimento
    mode === "development" && componentTagger(),
  ].filter(Boolean), // Remove entradas falsas (como plugins inativos) do array

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
