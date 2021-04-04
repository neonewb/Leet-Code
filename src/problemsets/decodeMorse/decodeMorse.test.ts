import { decodeMorse } from './decodeMorse';

describe('DecodeMorse', () => {
  test('HEY JUDE', () => {
    expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
  })
})