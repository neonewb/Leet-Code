// https://leetcode.com/problems/climbing-stairs/

export const climbStairs = (nums: number): number => {
	if (nums === 1) return 1
	if (nums === 2) return 2

	let first = 1
	let second = 2

	for (let i = 3; i <= nums; i++) {
		const third = first + second
		first = second
		second = third
	}

	return second
}
