const { resolve } = require('path')
const { existsSync } = require('fs')
const consola = require('consola')

function routerModule(moduleOptions) {
  const defaultOptions = {
    path: this.options.srcDir,
    fileName: 'router.js',
    keepDefaultRouter: false
  }

  const options = {
    ...{},
    ...defaultOptions,
    ...this.options.routerModule,
    ...moduleOptions
  }

  const routerFilePath = resolve(options.path, options.fileName)

  // Check if router file path is defined
  if (!existsSync(routerFilePath)) {
    return consola.warn(`No \`${options.fileName}\` file found in \`${options.path}\`.`)
  }

  // Add router file path as the main template for routing
  this.addTemplate({
    fileName: 'router.js',
    src: routerFilePath
  })

  // Disable parsing `pages/`
  if (!options.keepDefaultRouter) {
    this.nuxt.options.build.createRoutes = () => {
      return []
    }

    return
  }

  // Put default router as .nuxt/defaultRouter.js
  let defaultRouter

  try {
    defaultRouter = require.resolve('@nuxt/vue-app/template/router')
  } catch (err) {
    /* istanbul ignore next */
    defaultRouter = require.resolve('nuxt/lib/app/router')
  }

  this.addTemplate({
    fileName: 'defaultRouter.js',
    src: defaultRouter
  })
}

module.exports = routerModule
module.exports.meta = require('../package.json')
