export default {
  rootDir: __dirname,
  buildModules: [
    '../../../src/module.ts'
  ],
  routerModule: {
    keepDefaultRouter: true,
    parsePages: false
  }
}
