import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "0776-2401-4900-882b-163-60d0-6bae-2ac9-a7e4.ngrok-free.app",
    ],
  },
});
