import { containsDuplicate } from './index'

describe('Contains Duplicate', () => {
	const input = [1, 2, 3, 1]
	const output = true

	test(`${input} => ${output}`, () => {
		expect(containsDuplicate(input)).toBe(output)
	})

	const input1 = [1, 2, 3, 4]
	const output1 = false

	test(`${input1} => ${output1}`, () => {
		expect(containsDuplicate(input1)).toBe(output1)
	})

	const input2 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
	const output2 = true

	test(`${input2} => ${output2}`, () => {
		expect(containsDuplicate(input2)).toBe(output2)
	})
})
