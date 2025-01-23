import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://david-blog-580bbcb9a6c9.herokuapp.com/',
        secure: false,
      },
    },
  },
  plugins: [react()],
});
