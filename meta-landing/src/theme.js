import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#f7f7f7' },
          100: { value: '#e3e3e3' },
          500: { value: '#1a1a1a' },
          900: { value: '#0a0a0a' },
        },
        accent: { value: '#2563eb' },
      },
      fonts: {
        heading: { value: '"Inter", system-ui, sans-serif' },
        body: { value: '"Inter", system-ui, sans-serif' },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
