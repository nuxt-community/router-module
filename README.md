# @nuxtjs/router

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Nuxt module to use router.js instead of pages/ directory

[📖 **Release Notes**](./CHANGELOG.md)

## Features

Use your own `router.js` to handle your routes into your [Nuxt.js](https://nuxtjs.org) application.

## Setup

1. Add `@nuxtjs/router` dependency to your project

```bash
yarn add @nuxtjs/router # or npm install @nuxtjs/router
```

2. Add `@nuxtjs/router` to the `buildModules` section of `nuxt.config.js`

:warning: If you are using Nuxt `< 2.9.0`, use `modules` instead.

```js
{
  buildModules: [
    // Simple usage
    '@nuxtjs/router',

    // With options
    ['@nuxtjs/router', { /* module options */ }]
  ]
}
```

### Using top level options

```js
{
  buildModules: [
    '@nuxtjs/router'
  ],
  routerModule: {
    /* module options */
  }
}
```

If you are using SPA mode, add an index `/` route to `generate` section of `nuxt.config.js`:

```js
{
  generate: {
    routes: [
      '/'
    ]
  }
}
```

## Options

### `path`

- Default: `srcDir`

Location of you route file.

### `fileName`

- Default: `router.js`

Name of you route file.

### `keepDefaultRouter`

- Default: `false`

Can access the default router.

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

### Accessing default router

If you use the module with `{ keepDefaultRouter: true }`, you can access the default router:

```js
export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions ? routerOptions : createDefaultRouter(ssrContext).options

  return new Router({
    ...options,
    routes: fixRoutes(options.routes)
  })
}

function fixRoutes(defaultRoutes) {
  // default routes that come from `pages/`
  return defaultRoutes.filter(...).map(...)
}
```

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/router/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/router

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/router.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/router

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/router-module.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/router-module

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/router-module.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/router-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/router.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/router
