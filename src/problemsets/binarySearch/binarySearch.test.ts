import { binarySearch } from "./binarySearch"

describe('binarySearch', () => {
  const arrInput0 = ['10', '20', '22', '30', '33', '50', '55']
  const output0 = 0

  test('Array string', () => {
    expect(binarySearch(arrInput0, '10')).toStrictEqual(output0)
  })

  const arrInput1 = [10, 20, 22, 30, 33, 50, 55]
  const output1 = 6

  test('Array numbers', () => {
    expect(binarySearch(arrInput1, 55)).toStrictEqual(output1)
  })

  const arrInput2 = [
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
  const output2 = 1

  test('Array class num titles', () => {
    expect(binarySearch(arrInput2, '2 A')).toStrictEqual(output2)
  })

  const arrInput3 = ['1 A', '1 B', '2 A', '2 B']
  const output3 = 2

  test('Array class num titles', () => {
    expect(binarySearch(arrInput3, '2 A')).toStrictEqual(output3)
  })

  const arrInput4 = [
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

  const output4 = 2

  test('Array class num titles', () => {
    expect(binarySearch(arrInput4, 'Astronomy')).toStrictEqual(output4)
  })

  const arrInput5 = ['apple', 'peach', 'spork', 'straw']

  const output5 = 2

  test('Array class num titles', () => {
    expect(binarySearch(arrInput5, 'spork')).toStrictEqual(output5)
  })
})