import { Nuxt } from 'nuxt'
import consola from 'consola'
import config from './fixture/fail/nuxt.config'

consola.mockTypes(() => jest.fn())

describe('Module', () => {
  let nuxt

  beforeAll(async () => {
    config.dev = false
    nuxt = new Nuxt(config)
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if not found the router file', async () => {
    expect(consola.warn).toBeCalledTimes(1)
    expect(consola.warn).toBeCalledWith(expect.stringMatching(/^No `(.*)` file found in `(.*)`.$/))
  })
})
