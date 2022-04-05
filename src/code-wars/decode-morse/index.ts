// https://www.codewars.com/kata/54b724efac3d5402db00065e

const alphabetMorse = {
	'-----': '0',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'/': ' ',
	'-·-·--': '!',
	'·-·-·-': '.',
	'--··--': ',',
} as const

type morseChar = keyof typeof alphabetMorse

export const decodeMorse = (morseCode: string) => {
	return morseCode
		.split(' ')
		.reduce((prev, char): string => prev + (alphabetMorse[(char as morseChar)] || ' '), '')
		.toUpperCase()
		.replace(/ {2}/g, ' ')
		.trim()
}
