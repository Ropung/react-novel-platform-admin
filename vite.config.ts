import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
// import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@data": path.resolve(__dirname, "./src/data"),
      "@models": path.resolve(__dirname, "./src/models"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@libs": path.resolve(__dirname, "./src/libs"),
    },
  },
  // Build
  // root(소스) -> outDir(도착지)
  root: ".",
  build: {
    // outDir: "../dist/sample(경로설정)",
    // default: "./dist"
  },
});
