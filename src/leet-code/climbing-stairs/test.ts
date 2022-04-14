import { climbStairs } from './index'

describe('Climbing Stairs', () => {
	const input = 2
	const output = 2

	test(`${input} => ${output}`, () => {
		expect(climbStairs(input)).toStrictEqual(output)
	})

	const input1 = 3
	const output1 = 3

	test(`${input1} => ${output1}`, () => {
		expect(climbStairs(input1)).toStrictEqual(output1)
	})

	const input2 = 4
	const output2 = 5

	test (`${input2} => ${output2}`, () => {
		expect(climbStairs(input2)).toStrictEqual(output2)
	})
})
