jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000
process.env.PORT = process.env.PORT || 4445
process.env.NODE_ENV = 'production'

const { Nuxt, Builder } = require('nuxt')
const request = require('request-promise-native')

const config = require('./fixture/fail/nuxt.config')

const url = path => `http://localhost:${process.env.PORT}${path}`
const get = path => request(url(path))

describe('Module', () => {
  test('Build should fail if no router.js', async () => {
    const nuxt = new Nuxt(config)
    try {
      await new Builder(nuxt).build()
    } catch (err) {
      expect(err.message).toContain('Couldn\'t find a `pages` directory')
    }
  })
})
