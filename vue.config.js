module.exports = {
  devServer: {
    disableHostCheck: true,
  },

  // Adds the prefix /turd only when the application is built.
  publicPath: process.env.NODE_ENV === 'production' ? '/whatsapp/' : '/',

  // https://cli.vuejs.org/config/#css-extract
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      sass: {
        additionalData: "@import '~@/assets/scss/vuetify/variables'",
      },
      scss: {
        additionalData: "@import '~@/assets/scss/vuetify/variables';",
      },
    },
  },

  chainWebpack: (config) => {
    // Remove the following lines to add Vue Prefetch and Preload on index.html
    // https://cli.vuejs.org/guide/html-and-static-assets.html#disable-index-generation
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },

  transpileDependencies: ['vuetify'],

  lintOnSave: false,
};
