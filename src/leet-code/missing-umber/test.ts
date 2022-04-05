import { missingNumber } from './index'

describe('Missing Number', () => {
	const input = [3, 0, 1]
	const output = 2

	test(`${input} => ${output}`, () => {
		expect(missingNumber(input)).toBe(output)
	})

	const input1 = [0, 1]
	const output1 = 2

	test(`${input1} => ${output1}`, () => {
		expect(missingNumber(input1)).toBe(output1)
	})

	const input2 = [9, 6, 4, 2, 3, 5, 7, 0, 1]
	const output2 = 8

	test(`${input2} => ${output2}`, () => {
		expect(missingNumber(input2)).toBe(output2)
	})
})
