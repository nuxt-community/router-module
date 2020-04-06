const { join } = require('path')

module.exports = {
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  routerModule: {
    path: join(__dirname, 'routes'),
    fileName: 'index.js'
  }
}
