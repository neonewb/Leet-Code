// https://leetcode.com/problems/running-sum-of-1d-array/

export const runningSum = (nums: number[]): number[] => {
  nums.reduce((a,c,i) => nums[i] += a)
  return nums
}
