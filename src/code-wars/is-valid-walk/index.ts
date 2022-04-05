// https://www.codewars.com/kata/54da539698b8a2ad76000228

export function isValidWalk(walk: string[]) {
	let n = 0,
		s = 0,
		e = 0,
		w = 0
	walk.forEach((direction) => {
		switch (direction) {
		case 'n':
			n++
			break
		case 's':
			s++
			break
		case 'e':
			e++
			break
		case 'w':
			w++
			break
		}
	})
	if (n === s && e === w && n + s + w + e === 10 && walk.length % 2 === 0)
		return true
	return false
}