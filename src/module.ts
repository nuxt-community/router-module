import { relative, resolve } from 'path'
import { existsSync } from 'fs'
import type { Module } from '@nuxt/types'
import consola from 'consola'
import defu from 'defu'
import { name, version } from '../package.json'

const logger = consola.withTag('nuxt:router')

export interface ModuleOptions {
  path: string;
  fileName: string;
  keepDefaultRouter?: boolean;
  parsePages?: boolean;
}

const CONFIG_KEY = 'routerModule'

const nuxtModule: Module<ModuleOptions> = function (moduleOptions) {
  const DEFAULTS: ModuleOptions = {
    path: this.options.srcDir,
    fileName: 'router.js',
    keepDefaultRouter: false
  }

  const options: ModuleOptions = defu(
    this.options['router-module'],
    this.options[CONFIG_KEY],
    moduleOptions,
    DEFAULTS
  )

  if (typeof options.parsePages === 'undefined') {
    options.parsePages = options.keepDefaultRouter
  }

  const routerFilePath = resolve(options.path, options.fileName)

  // Check if router file path is defined
  if (!existsSync(routerFilePath)) {
    logger.warn(`No \`${options.fileName}\` file found in \`${options.path}\`.`)
    return
  }

  // Add plugin to import router file path as the main template for routing
  this.addPlugin({
    src: resolve(__dirname, '../templates/plugin.js'),
    fileName: 'router.js',
    options: {
      routerFilePath: relative(this.options.buildDir, routerFilePath).replace(/\/+|\\+/g, '/'),
      keepDefaultRouter: options.keepDefaultRouter
    }
  })

  // Disable parsing `pages/`
  if (!options.parsePages) {
    this.nuxt.hook('build:before', () => {
      this.nuxt.options.build.createRoutes = () => {
        return []
      }
    })
  }

  if (options.keepDefaultRouter) {
    // Put default router as .nuxt/defaultRouter.js
    let defaultRouter: string

    try {
      defaultRouter = require.resolve('@nuxt/vue-app/template/router')
    } catch (err) {
      /* istanbul ignore next */
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
}

;(nuxtModule as any).meta = { name, version }

declare module '@nuxt/types' {
  interface NuxtConfig { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.14+
  interface Configuration { [CONFIG_KEY]?: ModuleOptions } // Nuxt 2.9 - 2.13
}

export default nuxtModule
