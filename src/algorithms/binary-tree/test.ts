import { sumTree } from './index'

describe('sumTree', () => {
	const bTree = {
		value: 1,
		left: {
			value: 2,
			left: {
				value: 4,
				right: {
					value: 6,
				},
				left: {
					value: 7,
				},
			},
		},
		right: {
			value: 3,
			right: {
				value: 5,
			},
			left: {
				value: 8,
				right: {
					value: 9,
					left: {
						value: 10,
					},
				},
			},
		},
	}

	const output = 55

	test('sumTree', () => {
		expect(sumTree(bTree)).toBe(output)
	})
})
