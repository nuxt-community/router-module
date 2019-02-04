const { Nuxt, Builder } = require('nuxt')
const request = require('request-promise-native')

jest.setTimeout(60000)

const config = require('./fixture/custom-file-path/nuxt.config')

const url = path => `http://localhost:4444${path}`
const get = path => request(url(path))

describe('Module', () => {
  let nuxt

  beforeAll(async () => {
    config.dev = false
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(4444)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    let html = await get('/')
    expect(html).toContain('Hello server')
  })
})
