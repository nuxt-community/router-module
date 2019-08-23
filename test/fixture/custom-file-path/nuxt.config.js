const { join } = require('path')

module.exports = {
  rootDir: __dirname,
  render: {
    resourceHints: false
  },
  buildModules: [
    { handler: require('../../../') }
  ],
  routerModule: {
    path: join(__dirname, 'routes'),
    fileName: 'index.js'
  }
}
