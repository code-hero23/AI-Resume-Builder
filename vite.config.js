// vite.config.js

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
  optimizeDeps: {
    // 💡 This is the fix: Exclude lightningcss from Vite's optimization/pre-bundling
    exclude: ['lightningcss'],
  },
});