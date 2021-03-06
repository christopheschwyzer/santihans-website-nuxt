const webpack = require('webpack')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'SANTIHANS',
    titleTemplate: '%s - SANTIHANS',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Santihans is a communication design company located in 4056 Basel, Switzerland.'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#F96673'
  },

  css: [{
      src: '~assets/styles/app.styl',
      lang: 'styl'
    },
    {
      src: '~assets/styles/variables.scss',
      lang: 'scss'
    }
  ],

  plugins: [{
      src: '~plugins/vuetify.js'
    },
    {
      src: '~plugins/i18n.js'
    },
    {
      src: '~plugins/localePath.js'
    },
    {
      src: '~plugins/ga.js',
      ssr: false
    },
    {
      src: '~plugins/webFontLoader.js',
      ssr: false
    },
    {
      src: '~plugins/vueSmoothScroll.js'
    }
  ],

  router: {
    middleware: 'i18n'
  },

  /*
   ** Build configuration
   */
  build: {
    vendor: ['jquery', 'vuetify', 'underscore', 'vue-loading-spinner', 'vue-smooth-scroll'],

    /*
     ** Run ESLINT on save
     */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
