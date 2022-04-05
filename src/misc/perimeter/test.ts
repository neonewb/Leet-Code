import { perimeter } from './index'

describe('Calc functions', () => {
	const input = [
		'10010',
		'10010',
		'00010',
		'11010',
		'01000',
	]

	const output = 24

	test(`${input} = ${output}`, () => {
		expect(perimeter(input)).toBe(output)
	})
})
