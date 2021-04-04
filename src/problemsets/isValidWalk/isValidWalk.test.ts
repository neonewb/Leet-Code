import { isValidWalk } from "./isValidWalk"

describe('Is a valid walk', () => {
  const input0 = ['n','s','n','s','n','s','n','s','n','s']
  const input1 = ['w','e','w','e','w','e','w','e','w','e','w','e']
  const input2 = ['w']
  const input3 = ['n','n','n','s','n','s','n','s','n','s']

  test('Spin Welcome', () => {
    expect(isValidWalk(input0)).toBe(true)
  })
  test('Spin Welcome', () => {
    expect(isValidWalk(input1)).toBe(false)
  })
  test('Spin Welcome', () => {
    expect(isValidWalk(input2)).toBe(false)
  })
  test('Spin Welcome', () => {
    expect(isValidWalk(input3)).toBe(false)
  })
})