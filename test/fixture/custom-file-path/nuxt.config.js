import { resolve, join } from 'path'

export default {
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [{ handler: require('@@') }],
  routerModule: {
    path: join(__dirname, 'routes'),
    fileName: 'index.js'
  }
}
