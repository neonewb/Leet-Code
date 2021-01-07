export const binarySearch = (sortedArray: string[] | number[], key: string | number) => {
  let start = 0
  let end = sortedArray.length - 1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)

    if (sortedArray[middle] === key) {
      // found the key
      return middle
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1
    } else {
      // search searching to the left
      end = middle - 1
    }
  }
  // key wasn't found
  return -1
}

const isInt = (n: string) => /^\d+/.test(n)

const merge = (
  left: number,
  right: number,
  leftLimit: number,
  rightLimit: number,
  sorted: string[],
  buffer: string[]
) => {
  let i = left

  // Compare the two sub arrays and merge them in the sorted order
  while (left < leftLimit && right < rightLimit) {
    // Check number in start of the string and compare them
    if (isInt(sorted[left]) && isInt(sorted[right])) {
      if (parseInt(sorted[left]) < parseInt(sorted[right])) {
        buffer[i++] = sorted[left++]
      } else if (parseInt(sorted[left]) > parseInt(sorted[right])) {
        buffer[i++] = sorted[right++]
      } // Numbers are equal, compare as strings
      else if (sorted[left] <= sorted[right]) {
        buffer[i++] = sorted[left++]
      } else {
        buffer[i++] = sorted[right++]
      }
    } else if (sorted[left] <= sorted[right]) {
      buffer[i++] = sorted[left++]
    } else {
      buffer[i++] = sorted[right++]
    }
  }

  // If there are elements in the left sub arrray then add it to the result
  while (left < leftLimit) {
    buffer[i++] = sorted[left++]
  }

  // If there are elements in the right sub array then add it to the result
  while (right < rightLimit) {
    buffer[i++] = sorted[right++]
  }
}

export const mergeSort = (arr: string[]) => {
  // Create two arrays for sorting
  let sorted = Array.from(arr)
  const length = sorted.length
  let buffer = new Array<string>(length)

  for (let size = 1; size < length; size *= 2) {
    for (let leftStart = 0; leftStart < length; leftStart += 2 * size) {
      // Get the two sub arrays
      let left = leftStart,
        right = Math.min(left + size, length),
        leftLimit = right,
        rightLimit = Math.min(right + size, length)

      // Merge the sub arrays
      merge(left, right, leftLimit, rightLimit, sorted, buffer)
    }

    // Swap the sorted sub array and merge them
    let temp = sorted
    sorted = buffer
    buffer = temp
  }
  return sorted
}

// export const runningSum = (nums: number[]): number[] => {
//   nums.reduce((a,c,i) => nums[i] += a)
//   return nums
// }

// const alphabetMorse = {
//   '-----': '0',
//   '.----': '1',
//   '..---': '2',
//   '...--': '3',
//   '....-': '4',
//   '.....': '5',
//   '-....': '6',
//   '--...': '7',
//   '---..': '8',
//   '----.': '9',
//   '.-': 'a',
//   '-...': 'b',
//   '-.-.': 'c',
//   '-..': 'd',
//   '.': 'e',
//   '..-.': 'f',
//   '--.': 'g',
//   '....': 'h',
//   '..': 'i',
//   '.---': 'j',
//   '-.-': 'k',
//   '.-..': 'l',
//   '--': 'm',
//   '-.': 'n',
//   '---': 'o',
//   '.--.': 'p',
//   '--.-': 'q',
//   '.-.': 'r',
//   '...': 's',
//   '-': 't',
//   '..-': 'u',
//   '...-': 'v',
//   '.--': 'w',
//   '-..-': 'x',
//   '-.--': 'y',
//   '--..': 'z',
//   '/': ' ',
//   '-·-·--': '!',
//   '·-·-·-': '.',
//   '--··--': ',',
// } as const

// export const decodeMorse = (morseCode: string) => {
//   return morseCode
//     .split(' ')
//     .reduce((prev, char): string => prev + (alphabetMorse[char] || ' '), '')
//     .toUpperCase()
//     .replace(/  /g, ' ')
//     .trim()
// }

// export const countDublicates = (str: string) => {
//   console.log(str.match(/([^])\1+/g))

//   let result: number = 0
//   let charsResolved: string[] = []
//   const chars = str.toLowerCase().split('')
//   chars.forEach((char) => {
//     if (!charsResolved.includes(char)) {
//       const matches = chars.filter((c) => c === char)
//       if (matches.length > 1) {
//         result += 1
//         charsResolved.push(char)
//       }
//     }
//   })
//   return result
// }

// export const spinWords = (str: string) => {
//   let result: String[] = []
//   const words = str.split(' ')
//   for (const word of words) {
//     if (word.length >= 5) {
//       result.push(word.split('').reverse().join(''))
//     } else {
//       result.push(word)
//     }
//   }
//   return result.join(' ')
// }
