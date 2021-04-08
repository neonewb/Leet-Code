import { kidsWithCandies } from "./kidsWithCandies"

describe('Kids With the Greatest Number of Candies', () => {
  const candies = [2,3,5,1,3]
  const extraCandies = 3
  const output = [true,true,true,false,true]

  test('Example 1', () => {
    expect(kidsWithCandies(candies, extraCandies)).toStrictEqual(output)
  })

  const candies2 = [4,2,1,1,2]
  const extraCandies2 = 1
  const output2 = [true,false,false,false,false]

  test('Example 2', () => {
    expect(kidsWithCandies(candies2, extraCandies2)).toStrictEqual(output2)
  })

  const candies3 = [12,1,12]
  const extraCandies3 = 10
  const output3 = [true,false,true]

  test('Example 3', () => {
    expect(kidsWithCandies(candies3, extraCandies3)).toStrictEqual(output3)
  })
})
