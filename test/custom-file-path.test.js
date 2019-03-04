jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt')
const request = require('request-promise-native')
const getPort = require('get-port')

const config = require('./fixture/custom-file-path/nuxt.config')
config.dev = false

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

describe('module', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    port = await getPort()
    await nuxt.listen(port)
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Hello server')
  })
})
