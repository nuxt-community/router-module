const { relative, resolve } = require('path')
const { existsSync } = require('fs')
const logger = require('./logger')

module.exports = function (moduleOptions) {
  const options = {
    path: this.options.srcDir,
    fileName: 'router.js',
    keepDefaultRouter: false,
    ...this.options['router-module'],
    ...this.options.routerModule,
    ...moduleOptions
  }

  const routerFilePath = resolve(options.path, options.fileName)

  // Check if router file path is defined
  if (!existsSync(routerFilePath)) {
    logger.warn(`No \`${options.fileName}\` file found in \`${options.path}\`.`)
    return
  }

  // Add plugin to import router file path as the main template for routing
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'router.js',
    options: {
      routerFilePath: relative(this.options.buildDir, routerFilePath).replace(/\/+|\\+/g, '/'),
      keepDefaultRouter: options.keepDefaultRouter
    }
  })

  // Disable parsing `pages/`
  if (!options.keepDefaultRouter) {
    return this.nuxt.hook('build:before', () => {
      this.nuxt.options.build.createRoutes = () => {
        return []
      }
    })
  }

  // Put default router as .nuxt/defaultRouter.js
  let defaultRouter

  try {
    defaultRouter = require.resolve('@nuxt/vue-app/template/router')
  } catch (err) {
    try {
      defaultRouter = require.resolve('@nuxt/vue-app-edge/template/router')
    } catch (err) {
      /* istanbul ignore next */
      defaultRouter = require.resolve('nuxt/lib/app/router')
    }
  }

  this.addTemplate({
    fileName: 'defaultRouter.js',
    src: defaultRouter
  })
}

module.exports.meta = require('../package.json')
