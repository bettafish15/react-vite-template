import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint({
    exclude: [/virtual:/, /node_modules/, "build"]
  }), tsconfigPaths()],
  server: {
    open: true,
    hmr: true,
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  // test: {
  //   globals: true,
  //   environment: "jsdom",
  //   setupFiles: "src/setupTests",
  //   mockReset: true,
  //   coverage: {
  //     provider: 'c8',
  //     all: true,
  //     include: ['src/**/*'],
  //     exclude: [
  //       '**/*stories*',
  //     ],
  //     lines: 80,
  //       functions: 80,
  //       branches: 80,
  //       statements: 80,
  //   }
  // },
  base: './',
})
