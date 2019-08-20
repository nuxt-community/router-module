const { setup, loadConfig, get } = require('@nuxtjs/module-test-utils')

describe('keep-default-router', () => {
  let nuxt

  beforeAll(async () => {
    ({ nuxt } = (await setup(loadConfig(__dirname, 'keep-default-router'))))
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/some/foo')
    expect(html).toContain('Hello page')
  })
})
