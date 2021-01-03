import { countDublicates, decodeMorse, runningSum, spinWords } from './index'

describe('runningSum', () => {
  test('[1,2,3,4] => [1,3,6,10]', () => {
    expect(runningSum([1,2,3,4])).toStrictEqual([1,3,6,10])
  })
})

describe('DecodeMorse', () => {
  test('HEY JUDE', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
  })
})

describe('Count dublicates', () => {
  test('abcde 0', () => {
    expect(countDublicates('abcde')).toBe(0)
  })
  test('aabbcde 2', () => {
    expect(countDublicates('aabbcde')).toBe(2)
  })
  test('aabBcde 2', () => {
    expect(countDublicates('aabBcde')).toBe(2)
  })
  test('indivisibility 1', () => {
    expect(countDublicates('indivisibility')).toBe(1)
  })
  test('Indivisibilities 2', () => {
    expect(countDublicates('Indivisibilities')).toBe(2)
  })
  test('aA11 2', () => {
    expect(countDublicates('aA11')).toBe(2)
  })
  test('ABBA 2', () => {
    expect(countDublicates('ABBA')).toBe(2)
  })
})

describe('Spin Words', () => {
  test('Spin Welcome', () => {
    expect(spinWords('Welcome')).toBe('emocleW')
  })
  test('Hey fellow warriors', () => {
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw')
  })
  test('This is a test', () => {
    expect(spinWords('This is a test')).toBe('This is a test')
  })
  test('This is another test', () => {
    expect(spinWords('This is another test')).toBe('This is rehtona test')
  })
  test('You are almost to the last test', () => {
    expect(spinWords('You are almost to the last test')).toBe(
      'You are tsomla to the last test'
    )
  })
  test('Just kidding there is still one more', () => {
    expect(spinWords('Just kidding there is still one more')).toBe(
      'Just gniddik ereht is llits one more'
    )
  })
  test('Seriously this is the last one', () => {
    expect(spinWords('Seriously this is the last one')).toBe(
      'ylsuoireS this is the last one'
    )
  })
})
