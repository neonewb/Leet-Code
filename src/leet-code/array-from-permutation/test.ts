import { buildArray } from './index'

describe('arrayFromPermutation', () => {
	const input0 = [0,2,1,5,3,4]
	const output0 = [0,1,2,4,5,3]

	test(`${input0} = ${output0}`, () => {
		expect(buildArray(input0)).toStrictEqual(output0)
	})

	const input1 = [5,0,1,2,3,4]
	const output1 = [4,5,0,1,2,3]

	test(`${input1} = ${output1}`, () => {
		expect(buildArray(input1)).toStrictEqual(output1)
	})
})
