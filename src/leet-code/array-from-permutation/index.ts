// https://leetcode.com/problems/build-array-from-permutation/

export function buildArray(nums: number[]): number[] {
	return nums.map((num, i, arr) => arr[num])
}
