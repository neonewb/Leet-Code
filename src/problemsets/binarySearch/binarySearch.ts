export const binarySearch = (
  sortedArray: string[] | number[],
  key: string | number
) => {
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
      // continue searching to the left
      end = middle - 1
    }
  }
  // key wasn't found
  return -1
}
