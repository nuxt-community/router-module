import { setupTest } from '@nuxt/test-utils'

const mockReporter = {
  warn: jest.fn()
}

jest.mock('consola', () => ({
  info: jest.fn(),
  success: jest.fn(),
  debug: jest.fn(),
  warn: jest.fn(),
  withTag: jest.fn().mockImplementation(() => mockReporter)
}))

describe('fail', () => {
  setupTest({
    build: true,
    fixture: 'fixture/fail'
  })

  test('should warn if not found the router file', () => {
    expect(mockReporter.warn).toHaveBeenCalledWith(expect.stringMatching(/^No `(.*)` file found in `(.*)`.$/))
  })
})
