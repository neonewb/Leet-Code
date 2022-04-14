import { NumArray } from './index'

describe('Maximum Subarray', () => {
	const arr = [-2, 0, 3, -5, 2, -1]
	const numArray = new NumArray(arr)

	const input = [0, 2] as const
	const output = 1


	test(`${input} => ${output}`, () => {
		expect(numArray.sumRange(...input)).toBe(output)
	})

	const input1 = [2, 5] as const
	const output1 = -1

	test(`${input1} => ${output1}`, () => {
		expect(numArray.sumRange(...input1)).toBe(output1)
	})

	const input2 = [0, 5] as const
	const output2 = -3

	test(`${input2} => ${output2}`, () => {
		expect(numArray.sumRange(...input2)).toBe(output2)
	})
})
