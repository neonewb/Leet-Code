// https://leetcode.com/problems/range-sum-query-immutable/

export class NumArray {
	private _nums: number[] = []

	constructor(nums: number[]) {
		let sum = 0

		for (let i = 0; i < nums.length; i++) {
			sum += nums[i]
			this._nums.push(sum)
		}
	}

	sumRange(left: number, right: number): number {		
		if (left === 0) {
			return this._nums[right]
		}

		return this._nums[right] - this._nums[left - 1]
	}
}