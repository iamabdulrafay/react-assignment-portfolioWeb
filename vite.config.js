import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  base: "/react-assignment-portfolioWeb/", // Set the correct base URL
  plugins: [react()],
});
