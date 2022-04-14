import { maxProfit } from './index'

describe('Mmax profit', () => {
	const input = [7,1,5,3,6,4]
	const output = 5

	test(`${input} => ${output}`, () => {
		expect(maxProfit(input)).toStrictEqual(output)
	})

	const input1 = [7,6,4,3,1]
	const output1 = 0

	test(`${input1} => ${output1}`, () => {
		expect(maxProfit(input1)).toStrictEqual(output1)
	})
})
