export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Auth Template - Laravel 9 & Nuxt 2",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/sass/app.scss", "@fortawesome/fontawesome-free/css/all.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontawesome",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxtjs/toast"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    },
  },

  axios: {
    baseURL: process.env.API_BASE_URL,
    credentials: true,
  },

  auth: {
    redirect: {
      login: "/",
      home: false,
    },
    strategies: {
      laravelSanctum: {
        provider: "laravel/sanctum",
        url: process.env.API_BASE_URL,
        endpoints: {
          login: {
            url: "/api/login",
          },
          user: {
            url: "/api/v1/user",
          },
          logout: {
            url: "/api/logout",
          },
        },
      },
    },
  },
};
