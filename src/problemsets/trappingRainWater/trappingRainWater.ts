// https://leetcode.com/problems/trapping-rain-water/

export const trap = (heights: number[]): number => {
  let water: number = 0

  const max = Math.max(...heights)
  const maxIdx = heights.indexOf(max)

  const left = heights.slice(0, maxIdx)
  const right = heights.slice(maxIdx + 1)

  if (left.length > 1) {
    water += countWater(max, left, true)
  }

  if (right.length > 1) {
    water += countWater(max, right, false)
  }

  return water
}

function countWater(max: number, arr: number[], left: boolean): number {
  let water: number = 0

  const arrMax = Math.max(...arr)
  const maxIdx = arr.indexOf(arrMax)

  const trapHeight = Math.min(max, arrMax)

  if (left) {
    if (maxIdx !== arr.length - 1) {
      const trapArr = arr.slice(maxIdx + 1)
      water += trapArr.reduce((acc, h) => acc + trapHeight - h, 0)
    }

    const newLeft = arr.slice(0, maxIdx)
    if (newLeft.length > 1) {
      water += countWater(arrMax, newLeft, true)
    }
  } else {
    if (maxIdx !== 0) {
      const trapArr = arr.slice(0, maxIdx)
      water += trapArr.reduce((acc, h) => acc + trapHeight - h, 0)
    }

    const newRight = arr.slice(maxIdx + 1)
    if (newRight.length > 1) {
      water += countWater(arrMax, newRight, false)
    }
  }

  return water
}
