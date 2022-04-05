// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

export const kidsWithCandies = (
	candies: number[],
	extraCandies: number
): boolean[] => {
	const result: boolean[] = []
	const greatestCandies = Math.max(...candies)

	candies.forEach(c => {
		if (c + extraCandies >= greatestCandies) {
			result.push(true)
		} else {
			result.push(false)
		}
	})

	return result
}
