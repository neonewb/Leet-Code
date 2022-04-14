// https://leetcode.com/problems/range-sum-query-immutable/

export class NumArray {
	constructor(private _nums: number[]) { }

	sumRange(left: number, right: number): number {		
		let sum = 0

		for (let i = left; i < right + 1; i++) {
			sum += this._nums[i]
		}

		return sum
	}
}