import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    checker({
      vueTsc: true,
      eslint: {lintCommand: 'eslint "src/{**/*,*}.{ts,tsx,vue}"'},
    }),
  ],
});
