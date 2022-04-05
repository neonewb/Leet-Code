// https://leetcode.com/problems/number-of-good-pairs/

export const numIdenticalPairs = (nums: number[]): number => {
	type NumMap = {
		numIdenticalPairs: number
		[num: string]: number
	}

	const numMap = nums.reduce<NumMap>(
		(acc, num) => {
			if (acc[num]) {
				acc.numIdenticalPairs += acc[num]
				acc[num] += 1
				return acc
			} else {
				acc[num] = 1
				return acc
			}
		},
		{ numIdenticalPairs: 0 }
	)

	return numMap.numIdenticalPairs
}
