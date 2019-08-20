const { build, loadConfig } = require('@nuxtjs/module-test-utils')
const logger = require('../lib/logger')

logger.mockTypes(() => jest.fn())

describe('fail', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await build(loadConfig(__dirname, 'fail'))))
  }, 60000)

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
