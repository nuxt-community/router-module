const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('ok', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, 'ok'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Hello server')
  })
})
