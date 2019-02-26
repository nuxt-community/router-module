jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt')
const logger = require('@/logger')

const config = require('./fixture/fail/nuxt.config')

let nuxt

logger.mockTypes(() => jest.fn())

describe('module', () => {
  beforeAll(async () => {
    config.dev = false
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if not found the router file', () => {
    expect(logger.warn).toHaveBeenNthCalledWith(1, expect.stringMatching(/^No `(.*)` file found in `(.*)`.$/))
  })
})
