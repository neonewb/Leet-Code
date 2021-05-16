import { numIdenticalPairs } from './numIdenticalPairs'

describe('numIdenticalPairs', () => {
  const input = [1, 2, 3, 1, 1, 3]
  const output = 4

  test('[1,2,3,1,1,3] => 4', () => {
    expect(numIdenticalPairs(input)).toBe(output)
  })

  const input1 = [1, 1, 1, 1]
  const output1 = 6

  test('[1,1,1,1] => 6', () => {
    expect(numIdenticalPairs(input1)).toBe(output1)
  })

  const input2 = [1, 2, 3]
  const output2 = 0

  test('[1,2,3] => 0', () => {
    expect(numIdenticalPairs(input2)).toBe(output2)
  })
})
