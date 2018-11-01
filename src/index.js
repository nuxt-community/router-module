import { resolve } from 'path'
import { existsSync } from 'fs'

export default function (moduleOptions) {
  const defaultOptions = {
    path: this.options.srcDir,
    filename: 'router.js',
    keepDefaultRouter: false
  }

  const options = Object.assign({}, defaultOptions, this.options.routerModule, moduleOptions)

  const routerFilePath = resolve(options.path, options.filename)
  
  // Check if router file path is defined
  if (!existsSync(routerFilePath))
    throw new Error(`[nuxt-router-module] Please create a ${options.filename} file in your source folder.`)

  if (options.keepDefaultRouter) {
    // Put default router as .nuxt/defaultRouter.js
    this.addTemplate({
      fileName: 'defaultRouter.js',
      src: require.resolve('nuxt/lib/app/router')
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
