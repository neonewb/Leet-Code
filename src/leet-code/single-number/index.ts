// https://leetcode.com/problems/single-number/

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
