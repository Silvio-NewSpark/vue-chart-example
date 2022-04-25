import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

const path = require("path");

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {}
      }
    })
  ],
  resolve: {
    alias: {
      //'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js',
      //'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js',
      "@": path.resolve(__dirname, "./src"),
      "./runtimeConfig": "./runtimeConfig.browser"
    }
  },
  base: "./",
  server: {
    host: process.env.VITE_HOST ? process.env.VITE_HOST : "0.0.0.0",
    port: process.env.VITE_PORT ? process.env.VITE_PORT : "3000",
    open: "/"
  }
});
