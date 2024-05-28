import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import pinia from '@pinia/nuxt'

export default defineNuxtConfig({
  devtools: { enabled: true },
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  imports: {
    dirs: ["store"],
  },
  modules: [
    pinia,
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/test-utils/module',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }), )
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  piniaPersistedstate: {
    storage: 'localStorage'
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.POKE_API_URL,
    },
  },
})