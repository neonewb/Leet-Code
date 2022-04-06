// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

export const findDisappearedNumbers = (nums: number[]): number[] => {
	const result = new Set(Array.from({length: nums.length}, (_, i) => i + 1))

	for (const num of new Set(nums)) {
		result.delete(num)
	}
	console.log([...result]);

	return [...result]
}
