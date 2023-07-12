import { transform } from './index'

describe('Transform', () => {
	const list = [1, 2, 3, 4, 5]

	test(`${list} with offset 0`, () => {
		expect(transform(list, 0)).toStrictEqual(list)
	})

	test(`${list} with offset 1`, () => {
		expect(transform(list, 1)).toStrictEqual([2, 3, 4, 5, 1])
	})

	test(`${list} with offset 2`, () => {
		expect(transform(list, 2)).toStrictEqual([3, 4, 5, 1, 2])
	})

	test(`${list} with offset 5`, () => {
		expect(transform(list, 5)).toStrictEqual(list)
	})

	test(`${list} with offset 10`, () => {
		expect(transform(list, 10)).toStrictEqual(list)
	})

	test(`${list} with offset -1`, () => {
		expect(transform(list, -1)).toStrictEqual([5, 1, 2, 3, 4])
	})

	test(`${list} with offset -2`, () => {
		expect(transform(list, -2)).toStrictEqual([4, 5, 1, 2, 3])
	})

	test(`${list} with offset -5`, () => {
		expect(transform(list, -5)).toStrictEqual(list)
	})

	test(`${list} with offset -10`, () => {
		expect(transform(list, -10)).toStrictEqual(list)
	})
})
