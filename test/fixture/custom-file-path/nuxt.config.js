const { resolve, join } = require('path')

module.exports = {
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: ['@@'],
  routerModule: {
    path: join(__dirname, 'routes'),
    fileName: 'index.js'
  }
}
