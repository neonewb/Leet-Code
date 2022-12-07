import { quicksort } from './index'

describe('quicksort', () => {
	test('sort numbers', () => {
		const input = [4, 1, 2, 3, 5,]
		const output = [1, 2, 3, 4, 5]

		expect(quicksort(input)).toStrictEqual(output)
	})

	test('sort negative numbers', () => {
		const input = [-5, -2, 0]
		const output = [-5, -2, 0]

		expect(quicksort(input)).toStrictEqual(output)
	})

	test('same numbers', () => {
		const input = [4, 4, 5, 4, 4]
		const output = [4, 4, 4, 4, 5]

		expect(quicksort(input)).toStrictEqual(output)
	})

	test('sort strings', () => {
		const input = ['b', 'a', 'c', 'r']
		const output = ['a', 'b', 'c', 'r']

		expect(quicksort(input)).toStrictEqual(output)
	})
})
