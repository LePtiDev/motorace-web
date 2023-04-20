export default defineNuxtConfig({
  ssr: false,
  telemetry: false,
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap', // TO_CONFIG
        },
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css',
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      mapboxApiKey: '',
      supabaseApiKey: '',
      supabaseApiUrl: '',
      url: '',
      graphhopperApiKey: '',
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    viewer: false,
  },
})
