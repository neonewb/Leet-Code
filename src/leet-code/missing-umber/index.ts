// https://leetcode.com/problems/contains-duplicate/

export const missingNumber = (nums: number[]): number => {
	return nums.length * (nums.length + 1) / 2 - nums.reduce((a, c) => a + c)
}
