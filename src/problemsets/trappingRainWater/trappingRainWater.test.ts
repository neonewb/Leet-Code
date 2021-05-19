import { trap } from './trappingRainWater'

describe('Trapping Rain Water', () => {
  const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
  const output = 6

  test(`${input} => ${output}`, () => {
    expect(trap(input)).toBe(output)
  })

  const input1 = [4, 2, 0, 3, 2, 5, 0, 4]
  const output1 = 13

  test(`${input1} => ${output1}`, () => {
    expect(trap(input1)).toBe(output1)
  })

  const input2 = [15, 15, 15, 10, 20]
  const output2 = 5

  test(`${input2} => ${output2}`, () => {
    expect(trap(input2)).toBe(output2)
  })
})
