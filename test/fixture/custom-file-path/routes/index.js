import Vue from 'vue'
import Router from 'vue-router'

import MyPage from '~/components/my-page'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: MyPage
      }
    ]
  })
}
