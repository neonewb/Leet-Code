import { decodeMorse } from './index';

describe('DecodeMorse', () => {
	test('HEY JUDE', () => {
		expect(decodeMorse('.... . -.--   .--- ..- -.. .')).toBe('HEY JUDE')
	})
})