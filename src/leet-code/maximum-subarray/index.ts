// https://leetcode.com/problems/maximum-subarray/

export const maxSubArray = (nums: number[]): number => {
	let maxSum = nums[0]
	let currSum = nums[0]

	for (let i = 1; i < nums.length; i++) {
		const num = nums[i]

		currSum = Math.max(currSum + num, num)
		maxSum = Math.max(maxSum, currSum)
	}

	return maxSum
}
