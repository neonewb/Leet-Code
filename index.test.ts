// import { countDublicates, decodeMorse, runningSum, spinWords } from './index'
import { binarySearch, mergeSort } from './index'

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

  const arrInput3 = [
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
  const output3 = 4
  
  test('Array class num titles', () => {
    expect(binarySearch(arrInput3, '3 A')).toStrictEqual(output3)
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
})

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

// describe('runningSum', () => {
//   test('[1,2,3,4] => [1,3,6,10]', () => {
//     expect(runningSum([1,2,3,4])).toStrictEqual([1,3,6,10])
//   })
// })

// describe('DecodeMorse', () => {
//   test('HEY JUDE', () => {
//     expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
//   })
// })

// describe('Count dublicates', () => {
//   test('abcde 0', () => {
//     expect(countDublicates('abcde')).toBe(0)
//   })
//   test('aabbcde 2', () => {
//     expect(countDublicates('aabbcde')).toBe(2)
//   })
//   test('aabBcde 2', () => {
//     expect(countDublicates('aabBcde')).toBe(2)
//   })
//   test('indivisibility 1', () => {
//     expect(countDublicates('indivisibility')).toBe(1)
//   })
//   test('Indivisibilities 2', () => {
//     expect(countDublicates('Indivisibilities')).toBe(2)
//   })
//   test('aA11 2', () => {
//     expect(countDublicates('aA11')).toBe(2)
//   })
//   test('ABBA 2', () => {
//     expect(countDublicates('ABBA')).toBe(2)
//   })
// })

// describe('Spin Words', () => {
//   test('Spin Welcome', () => {
//     expect(spinWords('Welcome')).toBe('emocleW')
//   })
//   test('Hey fellow warriors', () => {
//     expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw')
//   })
//   test('This is a test', () => {
//     expect(spinWords('This is a test')).toBe('This is a test')
//   })
//   test('This is another test', () => {
//     expect(spinWords('This is another test')).toBe('This is rehtona test')
//   })
//   test('You are almost to the last test', () => {
//     expect(spinWords('You are almost to the last test')).toBe(
//       'You are tsomla to the last test'
//     )
//   })
//   test('Just kidding there is still one more', () => {
//     expect(spinWords('Just kidding there is still one more')).toBe(
//       'Just gniddik ereht is llits one more'
//     )
//   })
//   test('Seriously this is the last one', () => {
//     expect(spinWords('Seriously this is the last one')).toBe(
//       'ylsuoireS this is the last one'
//     )
//   })
// })
