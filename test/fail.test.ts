import { setupTest, mockConsola } from '@nuxt/test-utils'

const logger = mockConsola()

describe('fail', () => {
  setupTest({
    build: true,
    fixture: 'fixture/fail'
  })

  test('should warn if not found the router file', () => {
    expect(logger.warn).toHaveBeenCalledWith(expect.stringMatching(/^No `(.*)` file found in `(.*)`.$/))
  })
})
