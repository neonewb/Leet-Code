// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

export const countDublicates = (str: string) => {
	let result = 0
	const charsResolved: string[] = []
	const chars = str.toLowerCase().split('')
	chars.forEach((char) => {
		if (!charsResolved.includes(char)) {
			const matches = chars.filter((c) => c === char)
			if (matches.length > 1) {
				result += 1
				charsResolved.push(char)
			}
		}
	})
	return result
}
