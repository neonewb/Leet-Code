export const transform = (list: number[], offset: number): number[] => {
	const result = [...list]

	if (offset === 0 || offset === result.length) {
		return result
	}

	if (offset > result.length || offset < -result.length) {
		offset = offset % result.length
	}

	const isReversed = offset < 0

	while (offset !== 0) {
		if (isReversed) {
			result.unshift(result.pop()!)
			offset++
		} else {
			result.push(result.shift()!)
			offset--
		}
	}

	return result
}
