// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false, // Enable SPA mode
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  router: {
    options: {
      hashMode: false
    }
  }
})
