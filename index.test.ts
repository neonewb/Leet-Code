import { spinWords } from './index'

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
