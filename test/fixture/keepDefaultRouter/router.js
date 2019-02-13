import Router from 'vue-router'

export function createRouter(ssrContext, createDefaultRouter) {
  const defaultRouter = createDefaultRouter(ssrContext)
  return new Router({
    ...defaultRouter.options,
    routes: ((defaultRoutes) => {
      return defaultRoutes.map((route) => {
        return {
          ...route,
          path: '/some' + route.path
        }
      })
    })(defaultRouter.options.routes)
  })
}
