import pkg from "./package"

export default {
  mode: "universal",

  server: {
    port: 8000,
    host: "0.0.0.0"
  },

  /*
  ** Headers of the page
  */
  head: {
    title: "Kniffen\'s space",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },

  /*
  ** Global CSS
  */
  css: [
    "@/assets/scss/style.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/prism", ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/markdownit"
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
