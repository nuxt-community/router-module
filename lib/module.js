import { resolve } from 'path'
import { existsSync } from 'fs'
import consola from 'consola'

function routerModule (moduleOptions) {
  const defaultOptions = {
    path: this.options.srcDir,
    fileName: 'router.js',
    keepDefaultRouter: false
  }

  const options = Object.assign({}, defaultOptions, this.options.routerModule, moduleOptions)

  const routerFilePath = resolve(options.path, options.fileName)

  // Check if router file path is defined
  if (!existsSync(routerFilePath)) {
    return consola.warn(`No \`${options.fileName}\` file found in \`${options.path}\`.`)
  }

  if (options.keepDefaultRouter) {
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
  } else {
    // Disable parsing `pages/`
    this.nuxt.options.build.createRoutes = () => {
      return []
    }
  }

  // Add router file path as the main template for routing
  this.addTemplate({
    fileName: 'router.js',
    src: routerFilePath
  })
}

module.exports = routerModule
module.exports.meta = require('../package.json')
