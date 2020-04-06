module.exports = {
  rootDir: __dirname,
  buildModules: [
    { handler: require('../../../') }
  ],
  routerModule: {
    keepDefaultRouter: true
  }
}
