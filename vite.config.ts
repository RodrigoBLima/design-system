import path from 'node:path'
import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    dts({
      include: ['src/components/ui'],
      exclude: ['**/*.stories.ts*'],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace('/components/ui', ''),
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, 'src/components/ui/button/button.tsx'),
        path.resolve(__dirname, 'src/styles/globals.css'),
      ],
      formats: ['es'],
      fileName: (format, name) => `${name}/index.${format}.js`,
    },
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './vitest.setup.ts',
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src/**/*.{ts,tsx}'],
    },
  },
} as UserConfig)
