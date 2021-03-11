import Router from 'vue-router'
import MyPage from '~/components/my-page'

export function createRouter (ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions || createDefaultRouter(ssrContext).options

  return new Router({
    ...options,
    routes: [
      {
        path: '/',
        component: MyPage
      }
    ]
  })
}
