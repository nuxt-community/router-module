import { setupTest, get } from '@nuxt/test-utils'

describe('ok', () => {
  setupTest({
    server: true,
    fixture: 'fixture/ok'
  })

  test('render', async () => {
    const { body } = await get('/')
    expect(body).toContain('Hello server')
  })
})
