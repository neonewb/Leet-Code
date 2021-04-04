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
