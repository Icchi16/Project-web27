import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "src/index.html"),
        header: resolve(__dirname, "src/components/header.html"),
        hero: resolve(__dirname, "src/components/hot-carousel.html"),
      },
    },
  },
});
