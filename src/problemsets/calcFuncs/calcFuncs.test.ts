import { one, plus, two, three, minus, multiply, divide } from './calcFuncs'

describe('Calc functions', () => {
  const output = 6

  test(`3 * 2 = ${output}`, () => {
    expect(three(multiply(two()))).toBe(output)
  })
})
