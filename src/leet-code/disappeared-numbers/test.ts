import { findDisappearedNumbers } from './index'

describe('Missing Number', () => {
	const input = [4,3,2,7,8,2,3,1]
	const output = [5,6]

	test(`${input} => ${output}`, () => {
		expect(findDisappearedNumbers(input)).toStrictEqual(output)
	})

	const input1 = [1,1]
	const output1 = [2]

	test(`${input1} => ${output1}`, () => {
		expect(findDisappearedNumbers(input1)).toStrictEqual(output1)
	})
})
