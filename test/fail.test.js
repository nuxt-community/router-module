const { Nuxt, Builder } = require('nuxt')

jest.setTimeout(60000)

const config = require('./fixture/fail/nuxt.config')

describe('Module', () => {
  test('Build should fail if no router.js', async () => {
    config.dev = false
    const nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    try {
      await new Builder(nuxt).build()
    } catch (err) {
      expect(err.message).toContain('Please create a router.js file in your source folder.')
    }
    await nuxt.close()
  })
})
