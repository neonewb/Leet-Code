// https://leetcode.com/problems/maximum-subarray/

export const maxSubArray = (nums: number[]): number => {
	let maxSum = nums[0]
	let currSum = nums[0]

	for (const num of nums) {
		currSum = Math.max(currSum + num, num)
		maxSum = Math.max(currSum, maxSum)
	}

	return maxSum
}
