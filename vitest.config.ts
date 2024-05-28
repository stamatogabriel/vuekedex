import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
  },
  optimizeDeps: {
    include: [
      'vuetify',
      '@pinia/nuxt',
      '@pinia/plugin-persistedstate',
    ],
  },
})