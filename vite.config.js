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
        hero: resolve(__dirname, "src/components/hero-carousel.html"),
        hot: resolve(__dirname, "src/components/hot-carousel.html"),
        footer: resolve(__dirname, "src/components/footer.html"),
        book: resolve(__dirname, "src/components/book.html"),
        event: resolve(__dirname, "src/components/event.html"),
        calendar: resolve(__dirname, "src/components/calendar.html"),
      },
    },
  },
});
