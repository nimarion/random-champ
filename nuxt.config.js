export default {
    target: 'static',
    telemetry: false,
    ssr: false,
    router: {
      base: process.env.NODE_ENV === 'github' ? '/random-champ/' : '/',
    },
    build: {
      parallel: true,
      terser: true,
      sourceMap: true
    },
    modules: [['nuxt-buefy']]
  }