import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Tp7Productos-Wilder/'  // 👈 esta línea es necesaria para GitHub Pages
});