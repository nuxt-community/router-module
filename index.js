import { resolve } from 'path'
import { existsSync } from 'fs'

export default function (options) {
  const defaults = {
    keepDefaultRouter: false
  }
  options = Object.assign({}, defaults, options)

  const routerPath = resolve(this.options.srcDir, 'router.js')

  // Check if router.js is defined
  if (!existsSync(routerPath)) throw new Error('[nuxt-router-module] Please create a router.js file in your source folder.')

  if (options.keepDefaultRouter) {
    // Put default router as .nuxt/defaultRouter.js
    this.addTemplate({
      fileName: 'defaultRouter.js',
      src: require.resolve('@nuxt/vue-app/template/router')
    })
  } else {
    // Disable parsing `pages/`
    this.nuxt.options.build.createRoutes = () => {
      return []
    }
  }

  // Add ${srcDir}/router.js as the main template for routing
  this.addTemplate({
    fileName: 'router.js',
    src: routerPath
  })
}
