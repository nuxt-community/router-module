import { resolve } from 'path'
import { existsSync } from 'fs'

export default function () {
  const routerPath = resolve(this.options.srcDir, 'router.js')

  // Check if router.js is defined
  if (!existsSync(routerPath)) throw new Error('[nuxt-router-module] Please create a router.js file in your source folder.')

  // Disable parsing `pages/`
  this.nuxt.options.build.createRoutes = () => {}

  // Add ${srcDir}/router.js as the main template for routing
  this.addTemplate({
    fileName: 'router.js',
    src: routerPath
  })
}
