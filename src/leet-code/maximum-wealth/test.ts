import { maximumWealth } from './index'

describe('maximumWealth', () => {
	const input = [[1,2,3],[3,2,1]]
	const output = 6

	test('maximumWealth', () => {
		expect(maximumWealth(input)).toBe(output)
	})
})
