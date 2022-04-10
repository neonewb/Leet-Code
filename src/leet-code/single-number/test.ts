import { singleNumber } from './index'

describe('single-number', () => {
	const input = [2,2,1]
	const output = 1

	test(`${input} => ${output}`, () => {
		expect(singleNumber(input)).toStrictEqual(output)
	})

	const input1 = [4,1,2,1,2]
	const output1 = 4

	test(`${input1} => ${output1}`, () => {
		expect(singleNumber(input1)).toStrictEqual(output1)
	})

	const input2 = [1,1,2]
	const output2 = 2

	test (`${input2} => ${output2}`, () => {
		expect(singleNumber(input2)).toStrictEqual(output2)
	})

	const input3 = [1,1,2,2,3,3]
	const output3 = -1

	test (`${input3} => ${output3}`, () => {
		expect(singleNumber(input3)).toStrictEqual(output3)
	})

	const input4 = [1,1,2,2,3,3,4,4,5]
	const output4 = 5

	test (`${input4} => ${output4}`, () => {
		expect(singleNumber(input4)).toStrictEqual(output4)
	})
})
