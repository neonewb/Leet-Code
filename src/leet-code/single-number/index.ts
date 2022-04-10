// https://leetcode.com/problems/single-number/

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space
export const singleNumber = (nums: number[]): number => {
	const map = new Map<number, number>();

	for (const num of nums) {
		if (map.has(num)) {
			// @ts-ignore
			map.set(num, map.get(num) + 1);
		} else {
			map.set(num, 1);
		}
	}

	for (const [key, value] of map) {
		if (value === 1) {
			return key;
		}
	}

	return -1;
}
