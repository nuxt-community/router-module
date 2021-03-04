import { setupTest, get } from '@nuxt/test-utils'

describe('custom-file-path', () => {
  setupTest({
    server: true,
    fixture: 'fixture/custom-file-path'
  })

  test('render', async () => {
    const { body } = await get('/')
    expect(body).toContain('Hello server')
  })
})
