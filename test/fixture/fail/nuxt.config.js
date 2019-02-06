import { resolve } from 'path'

export default {
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  modules: [{ handler: require('@@') }]
}
