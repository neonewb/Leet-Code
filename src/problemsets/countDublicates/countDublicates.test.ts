import { countDublicates } from './countDublicates';

describe('Count dublicates', () => {
  test('abcde 0', () => {
    expect(countDublicates('abcde')).toBe(0)
  })
  test('aabbcde 2', () => {
    expect(countDublicates('aabbcde')).toBe(2)
  })
  test('aabBcde 2', () => {
    expect(countDublicates('aabBcde')).toBe(2)
  })
  test('indivisibility 1', () => {
    expect(countDublicates('indivisibility')).toBe(1)
  })
  test('Indivisibilities 2', () => {
    expect(countDublicates('Indivisibilities')).toBe(2)
  })
  test('aA11 2', () => {
    expect(countDublicates('aA11')).toBe(2)
  })
  test('ABBA 2', () => {
    expect(countDublicates('ABBA')).toBe(2)
  })
})