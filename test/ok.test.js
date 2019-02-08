jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt')
const request = require('request-promise-native')

const config = require('./fixture/ok/nuxt.config')

const url = path => `http://localhost:4446${path}`
const get = path => request(url(path))

describe('Module', () => {
  let nuxt

  beforeAll(async () => {
    config.dev = false
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(4446)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Hello server')
  })
})
