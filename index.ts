export const runningSum = (nums: number[]): number[] => {
  nums.reduce((a,c,i) => nums[i] += a)
  return nums
}

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

export const decodeMorse = (morseCode: string) => {
  return morseCode
    .split(' ')
    .reduce((prev, char): string => prev + (alphabetMorse[char] || ' '), '')
    .toUpperCase()
    .replace(/  /g, ' ')
    .trim()
}

export const countDublicates = (str: string) => {
  console.log(str.match(/([^])\1+/g))

  let result: number = 0
  let charsResolved: string[] = []
  const chars = str.toLowerCase().split('')
  chars.forEach((char) => {
    if (!charsResolved.includes(char)) {
      const matches = chars.filter((c) => c === char)
      if (matches.length > 1) {
        result += 1
        charsResolved.push(char)
      }
    }
  })
  return result
}

export const spinWords = (str: string) => {
  let result: String[] = []
  const words = str.split(' ')
  for (const word of words) {
    if (word.length >= 5) {
      result.push(word.split('').reverse().join(''))
    } else {
      result.push(word)
    }
  }
  return result.join(' ')
}
