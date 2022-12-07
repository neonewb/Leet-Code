export const quicksort = (array: Array<string | number>): Array<string | number> => {
	if (array.length < 2) {
		return array
	}
	const pivot = array[Math.floor(Math.random() * array.length)]
	const equal: Array<string | number> = [] 
	const less: Array<string | number> = [] 
	const greater: Array<string | number> = []

	for (const item of array) {
		if (item === pivot) {
			equal.push(item)
		} else if (item > pivot) {
			greater.push(item)
		} else {
			less.push(item)
		}
	}

	return [
		...quicksort(less),
		...equal,
		...quicksort(greater)
	]
}
