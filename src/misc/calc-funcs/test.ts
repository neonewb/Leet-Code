import { two, three, multiply } from './index'

describe('Calc functions', () => {
	const output = 6

	test(`3 * 2 = ${output}`, () => {
		expect(three(multiply(two()))).toBe(output)
	})
})
