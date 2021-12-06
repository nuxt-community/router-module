# @nuxtjs/router

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Nuxt.js module to use router.js instead of pages/ directory

[📖 **Release Notes**](./CHANGELOG.md)

## Features

Use your own `router.js` to handle your routes into your [Nuxt.js](https://nuxtjs.org) application.

## Setup

1. Add `@nuxtjs/router` dependency to your project

```bash
yarn add --dev @nuxtjs/router # or npm install --save-dev @nuxtjs/router
```

2. Add `@nuxtjs/router` to the `buildModules` section of `nuxt.config.js`

```js
export default {
  buildModules: [
    // Simple usage
    '@nuxtjs/router',

    // With options
    ['@nuxtjs/router', { /* module options */ }]
  ]
}
```

:warning: If you are using Nuxt **< v2.9** you have to install the module as a `dependency` (No `--dev` or `--save-dev` flags) and use `modules` section in `nuxt.config.js` instead of `buildModules`.

### Using top level options

```js
export default {
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
export default {
  generate: {
    routes: [
      '/'
    ]
  }
}
```

## Options

### `path`

- Type: `String`
- Default: `srcDir`

Location of you route file.

### `fileName`

- Type: `String`
- Default: `router.js`

Name of you route file.

### `keepDefaultRouter`

- Type: `Boolean`
- Default: `false`

Can access the default router.

### `parsePages`

- Type: `Boolean`
- Default: `'keepDefaultRouter'`

Can disable/enable the `pages/` directory into Nuxt.

## Usage

This module, by default, disable the `pages/` directory into Nuxt and will use a `router.js` file at your `srcDir` directory:

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

The components defined as routes have access to the same special attributes and functions (head, asyncData, validate, etc.) as the [Nuxt Page component](https://nuxtjs.org/guide/views/#pages).

### Accessing default router

If you use the module with `{ keepDefaultRouter: true }`, you can access the default router:

:warning: If you are using Nuxt `< 2.9.0`, the parameter `routerOptions` is not available.

:warning: If you are using Nuxt `< 2.15.0`, the parameter `config` is not available.

:warning: If you are using Nuxt `< 2.16.0`, the parameter `store` is not available.

```js
export function createRouter(ssrContext, createDefaultRouter, routerOptions, config, store) {
  const options = routerOptions ? routerOptions : createDefaultRouter(ssrContext, config).options

  return new Router({
    ...options,
    routes: fixRoutes(options.routes, store)
  })
}

function fixRoutes(defaultRoutes, store) {
  // default routes that come from `pages/`
  // Filter some routes using the content of the store for example
  return defaultRoutes.filter(...).map(...)
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/router/latest.svg
[npm-version-href]: https://npmjs.com/package/@nuxtjs/router

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/router.svg
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/router

[github-actions-ci-src]: https://github.com/nuxt-community/router-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/nuxt-community/router-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/router-module.svg
[codecov-href]: https://codecov.io/gh/nuxt-community/router-module

[license-src]: https://img.shields.io/npm/l/@nuxtjs/router.svg
[license-href]: https://npmjs.com/package/@nuxtjs/router
