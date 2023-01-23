// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      rapidApiToken: process.env.RAPIDAPI_TOKEN,
      rapidApiHost: process.env.RAPIDAPI_HOST,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@pinia/nuxt'],

  plugins: ['@/plugins/api'],
});
