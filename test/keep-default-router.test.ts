import { setupTest, get } from '@nuxt/test-utils'

describe('keep-default-router', () => {
  setupTest({
    server: true,
    fixture: 'fixture/keep-default-router'
  })

  test('render', async () => {
    const { body } = await get('/some/foo')
    expect(body).toContain('Hello page')
  })
})
