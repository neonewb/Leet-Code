export function perimeter(matrix: string[]) {
  let perimeter = 0

  const FILLED = '1'
  const EMPTY = '0'

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === FILLED) {
        const right = matrix[i][j + 1]
        if (right === EMPTY || right === undefined) {
          perimeter++
        }

        const left = matrix[i][j - 1]
        if (left === EMPTY || left === undefined) {
          perimeter++
        }

        if (matrix[i + 1]) {
          const down = matrix[i + 1][j]
          if (down === EMPTY || down === undefined) {
            perimeter++
          }
        } else perimeter++

        if (matrix[i - 1]) {
          const up = matrix[i - 1][j]
          if (up === EMPTY || up === undefined) {
            perimeter++
          }
        } else perimeter++
      }
    }
  }

  return perimeter
}
