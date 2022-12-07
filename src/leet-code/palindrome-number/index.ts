// https://leetcode.com/problems/palindrome-number/

export const isPalindrome = (num: number): boolean => {
	if (num < 0) {
		return false
	}

	const string = String(num);
	const flippedString = [...string].reverse()

	for (let i = 0; i < string.length; i++) {
		const symbol = string[i]
		const flippedSymbol = flippedString[i]

		if (symbol !== flippedSymbol) {
			return false;
		}
	}

	return true;
}
