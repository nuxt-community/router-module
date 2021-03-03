const { join } = require('path')

export default {
  rootDir: __dirname,
  buildModules: [
    '../../../src/module.ts'
  ],
  routerModule: {
    path: join(__dirname, 'routes'),
    fileName: 'index.js'
  }
}
