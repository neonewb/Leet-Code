import { isPalindrome } from './index'

describe('Palindrome Number', () => {
	test('121 - true', () => {
		expect(isPalindrome(121)).toStrictEqual(true)
	})
	
	test('-121 - false', () => {
		expect(isPalindrome(-121)).toStrictEqual(false)
	})

	test('10 - false', () => {
		expect(isPalindrome(10)).toStrictEqual(false)
	})
})
