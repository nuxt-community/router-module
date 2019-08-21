import Router from 'vue-router'

export function createRouter (ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options

  return new Router({
    ...options,
    routes: ((defaultRoutes) => {
      return defaultRoutes.map((route) => {
        return {
          ...route,
          path: '/some' + route.path
        }
      })
    })(options.routes)
  })
}
