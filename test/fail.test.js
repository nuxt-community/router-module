jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt')
const logger = require('../lib/logger')

const config = require('./fixture/fail/nuxt.config')
config.dev = false

let nuxt

logger.mockTypes(() => jest.fn())

describe('module', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await nuxt.ready()
    await new Builder(nuxt).build()
  })

  beforeEach(() => {
    logger.clear()
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if not found the router file', () => {
    expect(logger.warn).toHaveBeenCalledWith(expect.stringMatching(/^No `(.*)` file found in `(.*)`.$/))
  })
})
