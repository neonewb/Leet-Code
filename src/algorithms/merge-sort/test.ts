import { mergeSort } from './index'

describe('mergeSort', () => {
	const arrInput1 = ['30', '20', '10', '50', '22', '33', '55']
	const arrOutput1 = ['10', '20', '22', '30', '33', '50', '55']

	test('[30, 20, 10, 50, 22, 33, 55] => [10, 20, 22, 30, 33, 50, 55]', () => {
		expect(mergeSort(arrInput1)).toStrictEqual(arrOutput1)
	})

	const arrInput2 = [
		'5 A',
		'2 A',
		'4 A',
		'11 A',
		'9 A',
		'6 A',
		'7 A',
		'3 A',
		'10 A',
		'8 A',
		'1 A',
	]
	const arrOutput2 = [
		'1 A',
		'2 A',
		'3 A',
		'4 A',
		'5 A',
		'6 A',
		'7 A',
		'8 A',
		'9 A',
		'10 A',
		'11 A',
	]

	test('[5 A, 2 A, 4 A, 11 A, 9 A, 6 A, 7 A, 3 A, 10 A, 8 A, 1 A] => [1 A, 2 A, 3 A, 4 A, 5 A, 6 A, 7 A, 8 A, 9 A, 10 A, 11 A]', () => {
		expect(mergeSort(arrInput2)).toStrictEqual(arrOutput2)
	})

	const arrInput3 = [
		'6 B',
		'9 B',
		'2 A',
		'4 A',
		'11 B',
		'11 A',
		'6 A',
		'5 B',
		'3 B',
		'3 A',
		'10 A',
		'8 A',
		'1 A',
		'2 B',
		'4 B',
		'9 A',
		'7 B',
		'7 A',
		'10 B',
		'8 B',
		'5 A',
		'1 B',
	]
	const arrOutput3 = [
		'1 A',
		'1 B',
		'2 A',
		'2 B',
		'3 A',
		'3 B',
		'4 A',
		'4 B',
		'5 A',
		'5 B',
		'6 A',
		'6 B',
		'7 A',
		'7 B',
		'8 A',
		'8 B',
		'9 A',
		'9 B',
		'10 A',
		'10 B',
		'11 A',
		'11 B',
	]

	test('[6 B, 9 B, 2 A, 4 A, 11 B, 11 A, 6 A, 5 B, 3 B, 3 A, 10 A, 8 A, 1 A, 2 B, 4 B, 9 A, 7 B, 7 A, 10 B, 8 B, 5 A, 1 B] => [1 A, 1 B, 2 A, 2 B, 3 A, 3 B, 4 A, 4 B, 5 A, 5 B, 6 A, 6 B, 7 A, 7 B, 8 A, 8 B, 9 A, 9 B, 0 A, 0 B, 1 A, 1 B]', () => {
		expect(mergeSort(arrInput3)).toStrictEqual(arrOutput3)
	})

	const arrInput4 = [
		'Sociology',
		'Astronomy',
		'Chemistry',
		'Native language',
		'Russian language',
		'Computer science',
		'History',
		'Dutch language',
		'English language',
		'Mathematics',
		'Geography',
		'Technology',
		'Literature',
		'Geometry',
		'Algebra',
		'Literary reading',
		'Art',
		'The world',
		'Music',
		'Physical education',
		'Ecology',
		'Physics',
		'Biology',
	]

	const arrOutput4 = [
		'Algebra',
		'Art',
		'Astronomy',
		'Biology',
		'Chemistry',
		'Computer science',
		'Dutch language',
		'Ecology',
		'English language',
		'Geography',
		'Geometry',
		'History',
		'Literary reading',
		'Literature',
		'Mathematics',
		'Music',
		'Native language',
		'Physical education',
		'Physics',
		'Russian language',
		'Sociology',
		'Technology',
		'The world',
	]

	test('subjects', () => {
		expect(mergeSort(arrInput4)).toStrictEqual(arrOutput4)
	})
})