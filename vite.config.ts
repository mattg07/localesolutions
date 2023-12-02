import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'build', // Adjust this to your actual output directory
  },
  plugins: [react()],
});
