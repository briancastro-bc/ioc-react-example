import { defineConfig, } from 'vite'
import { resolve, } from 'node:path';

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ioc': resolve(__dirname, 'src/ioc'),
      '@contexts': resolve(__dirname, 'src/contexts'),
      '@Shared': resolve(__dirname, 'src/apps/Shared')
    }
  }
})
