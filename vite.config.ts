// Plugins
import vue from "@vitejs/plugin-vue";
import path from "path";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import dynamicImport from "vite-plugin-dynamic-import";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// Utilities
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    dynamicImport(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
      styles: {
        configFile: "src/styles/default.scss",
      },
    }),
    VueI18nPlugin({}),
  ],
  define: { "process.env": { BASE_URL: "/portfolio/" } },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
  },
  server: {
    port: 3000,
  },
});
