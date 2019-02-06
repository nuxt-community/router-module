const { Nuxt } = require('nuxt')
const consola = require('consola')

consola.mockTypes(() => jest.fn())

jest.setTimeout(60000)

const config = require('./fixture/fail/nuxt.config')

describe('Module', () => {
  let nuxt

  beforeAll(async () => {
    config.dev = false
    nuxt = new Nuxt(config)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if not found the router file', async () => {
    expect(consola.warn).toBeCalledTimes(1)
    expect(consola.warn).toBeCalledWith(expect.stringMatching(/^No `(.*)` file found in `(.*)`.$/))
  })
})
