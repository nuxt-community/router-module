import { Nuxt, Builder } from 'nuxt'
import request from 'request-promise-native'
import config from './fixture/keepDefaultRouter/nuxt.config'

const url = path => `http://localhost:4445${path}`
const get = path => request(url(path))

describe('Module', () => {
  let nuxt

  beforeAll(async () => {
    config.dev = false
    nuxt = new Nuxt(config)
    await new Builder(nuxt).build()
    await nuxt.listen(4445)
  }, 60000)

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    let html = await get('/some/foo')
    expect(html).toContain('Hello page')
  })
})
