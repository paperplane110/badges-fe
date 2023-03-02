// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-windicss',
    '@pinia/nuxt'
  ],
  css: [
    "@fontsource/material-icons",
  ],
  nitro: {
    devProxy: {
      '/api': {
        target: "http://127.0.0.1:3001",
        changeOrigin: true,
      }
    }
  }
})
