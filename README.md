# Nuxt Router Module
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/router/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/router)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/router.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/router)
[![CircleCI](https://img.shields.io/circleci/project/github/nuxt-community/router-module.svg?style=flat-square)](https://circleci.com/gh/nuxt-community/router-module)
[![Codecov](https://img.shields.io/codecov/c/github/nuxt-community/router-module.svg?style=flat-square)](https://codecov.io/gh/nuxt-community/router-module)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

> Nuxt module to use router.js instead of pages/ directory

[📖 **Release Notes**](https://github.com/nuxt-community/router-module/releases)

## Features

Use your own `router.js` to handle your routes into your [Nuxt.js](https://nuxtjs.org) application.

## Setup

1. Install `@nuxtjs/router` dependency with `yarn` or `npm` into your project
2. Add `@nuxtjs/router` to `modules` section of `nuxt.config.js`:

```js
{
  modules: [
    '@nuxtjs/router'
 ]
}
```

3. If you are using SPA mode, you will need to generate an index route in `nuxt.config.js`:

```js
generate: {
  routes: [
    "/"
  ]
}
```

## Usage

This module disable the `pages/` directory into Nuxt and will use a `router.js` file at your `srcDir` directory:

```bash
components/
  my-page.vue
router.js
```

`router.js` need to export a `createRouter` method like this:

```js
import Vue from 'vue'
import Router from 'vue-router'

import MyPage from '~/components/my-page'

Vue.use(Router)

export function createRouter() {
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
```

## License

[MIT License](./LICENSE)

Copyright (c) Sebastien Chopin <seb@chopin.io>
