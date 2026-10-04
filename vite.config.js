import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.svg", "apple-touch-icon.png"],
      manifest: {
        name: "Matin Mohammadi Portfolio",
        short_name: "Matin Portfolio",
        description:
          "Portfolio of Matin Mohammadi, frontend developer and full-stack engineer in progress.",
        theme_color: "#080c15",
        background_color: "#080c15",
        display: "standalone",
        orientation: "portrait-primary",
        scope: "/Matin_portfolio/",
        start_url: "/Matin_portfolio/",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{css,html,ico,js,pdf,png,svg,webmanifest}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  base: "/Matin_portfolio/", 
});
