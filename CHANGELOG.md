# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.7.0](https://github.com/nuxt-community/router-module/compare/v1.6.1...v1.7.0) (2021-12-17)


### Features

* **createRouter:** Add the store parameter to the customCreateRouter function ([#105](https://github.com/nuxt-community/router-module/issues/105)) ([d068f6e](https://github.com/nuxt-community/router-module/commit/d068f6e2991f39cf8dca68dc3a92bc19c1a38c85))

### [1.6.1](https://github.com/nuxt-community/router-module/compare/v1.6.0...v1.6.1) (2021-03-15)


### Bug Fixes

* template missing ([#99](https://github.com/nuxt-community/router-module/issues/99)) ([a5b8aad](https://github.com/nuxt-community/router-module/commit/a5b8aadc7a87dfd567e5bb879315aae214c35298))

## [1.6.0](https://github.com/nuxt-community/router-module/compare/v1.5.1...v1.6.0) (2021-03-12)


### Features

* option parse pages ([#95](https://github.com/nuxt-community/router-module/issues/95)) ([4ebf7e6](https://github.com/nuxt-community/router-module/commit/4ebf7e6c4645bb58fcc471dc45bb8066720e4fb1))
* typescript rewrite ([#94](https://github.com/nuxt-community/router-module/issues/94)) ([0c6a034](https://github.com/nuxt-community/router-module/commit/0c6a034c3508a056bb94ffafee0352c3985a8be2))

### [1.5.1](https://github.com/nuxt-community/router-module/compare/v1.5.0...v1.5.1) (2021-02-18)


### Bug Fixes

* keepDefaultRouter option broken in nuxt 2.15 ([#92](https://github.com/nuxt-community/router-module/issues/92)) ([fb16c31](https://github.com/nuxt-community/router-module/commit/fb16c31b45bdaa49773e062e408e5fed356e5b3b))

## [1.5.0](https://github.com/nuxt-community/router-module/compare/v1.4.0...v1.5.0) (2019-08-21)


### Features

* add routerOptions ([9512d6d](https://github.com/nuxt-community/router-module/commit/9512d6d))
* try to load from edge ([4c66590](https://github.com/nuxt-community/router-module/commit/4c66590))

## [1.4.0](https://github.com/nuxt-community/router-module/compare/v1.3.2...v1.4.0) (2019-07-26)


### Build System

* **deps:** bump handlebars from 4.1.0 to 4.1.2 ([63e5cb7](https://github.com/nuxt-community/router-module/commit/63e5cb7))
* **deps:** bump js-yaml from 3.12.1 to 3.13.1 ([b68dad9](https://github.com/nuxt-community/router-module/commit/b68dad9))
* **deps:** bump lodash.template from 4.4.0 to 4.5.0 ([#52](https://github.com/nuxt-community/router-module/issues/52)) ([5dd8c08](https://github.com/nuxt-community/router-module/commit/5dd8c08))
* **deps:** bump webpack-bundle-analyzer from 3.0.4 to 3.3.2 ([eac68fd](https://github.com/nuxt-community/router-module/commit/eac68fd))


### Features

* support `router-module` in `nuxt.config` ([3e9ecdd](https://github.com/nuxt-community/router-module/commit/3e9ecdd))
* **logger:** separate consola into logger file ([2ff54ff](https://github.com/nuxt-community/router-module/commit/2ff54ff))


### Tests

* **fixture:** update configs ([55c4c4f](https://github.com/nuxt-community/router-module/commit/55c4c4f))
* **module:** update describe ([ca8d937](https://github.com/nuxt-community/router-module/commit/ca8d937))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/nuxt-community/router-module/compare/v1.3.1...v1.3.2) (2019-02-15)


### Bug Fixes

* **paths:** support for windows ([0314e9c](https://github.com/nuxt-community/router-module/commit/0314e9c))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/nuxt-community/router-module/compare/v1.3.0...v1.3.1) (2019-02-15)


### Bug Fixes

* **paths:** support for windows paths ([e1817ba](https://github.com/nuxt-community/router-module/commit/e1817ba))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/nuxt-community/router-module/compare/v1.2.1...v1.3.0) (2019-02-13)


### Bug Fixes

* **module:** add hook `build:before` when disabled `keepDefaultRouter` ([58109e4](https://github.com/nuxt-community/router-module/commit/58109e4))


### Features

* **module:** import router on plugin, inject defaultRouter if enabled ([ec998ad](https://github.com/nuxt-community/router-module/commit/ec998ad))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/nuxt-community/router-module/compare/v1.1.0...v1.2.1) (2019-02-11)


### Bug Fixes

* **deps:** update babel ([38ac59f](https://github.com/nuxt-community/router-module/commit/38ac59f))
* **module:** remove hook ([9625b91](https://github.com/nuxt-community/router-module/commit/9625b91))
* **module:** return on disable `keepDefaultRouter` ([7374c65](https://github.com/nuxt-community/router-module/commit/7374c65))
* **module:** run in build:before hook ([b4b7e2f](https://github.com/nuxt-community/router-module/commit/b4b7e2f))
* **module:** simplify require modules ([6ee58ee](https://github.com/nuxt-community/router-module/commit/6ee58ee))
* **module:** use `consola` instead of `throw` when router file not found ([ed63475](https://github.com/nuxt-community/router-module/commit/ed63475))
* **plugin:** removed, no need ([ea3edfe](https://github.com/nuxt-community/router-module/commit/ea3edfe))
* use a try catch to set defaultRouter ([d11dc18](https://github.com/nuxt-community/router-module/commit/d11dc18))


### Performance Improvements

* **module:** reduce complebility ([1ef401f](https://github.com/nuxt-community/router-module/commit/1ef401f))
