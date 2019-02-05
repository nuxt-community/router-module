const { resolve } = require('path')

module.exports = {
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [{ handler: require('@@') }],
  routerModule: {
    keepDefaultRouter: true
  }
}
