const { resolve } = require('path')

module.exports = {
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: ['@@'],
  routerModule: {
    keepDefaultRouter: true
  }
}
