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
        // target: "http://127.0.0.1:3001",
        target: "http://175.178.154.189:8080/api",
        changeOrigin: true,
      }
    }
  }
})
