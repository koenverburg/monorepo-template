import { greeting } from '../index'

describe('foo', () => {
  it('returns a string with the give name as input', () => {
    expect(greeting('World!')).toBe('Hello, World!')
  })
})