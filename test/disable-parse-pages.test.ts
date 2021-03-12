import { setupTest, get } from '@nuxt/test-utils'

describe('disable-parse-pages', () => {
  setupTest({
    server: true,
    fixture: 'fixture/disable-parse-pages'
  })

  test('render', async () => {
    const { body } = await get('/')
    expect(body).toContain('Hello server')
  })

  test('disable pages', async () => {
    await expect(get('/foo')).rejects.toThrow('Not Found')
  })
})
