// https://leetcode.com/problems/contains-duplicate/

export const containsDuplicate = (nums: number[]): boolean => {
	const set = new Set()
	
	for (const num of nums) {
		if (set.has(num)) {
			return true
		} else {
			set.add(num)
		}
	}

	return false
}
