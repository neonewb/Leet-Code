import { maxSubArray } from './index'

describe('Maximum Subarray', () => {
	const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
	const output = 6

	test(`${input} => ${output}`, () => {
		expect(maxSubArray(input)).toStrictEqual(output)
	})

	const input1 = [1]
	const output1 = 1

	test(`${input1} => ${output1}`, () => {
		expect(maxSubArray(input1)).toStrictEqual(output1)
	})

	const input2 = [5, 4, -1, 7, 8]
	const output2 = 23

	test(`${input2} => ${output2}`, () => {
		expect(maxSubArray(input2)).toStrictEqual(output2)
	})
})
