import { runningSum } from './runningSum';

describe('runningSum', () => {
  test('[1,2,3,4] => [1,3,6,10]', () => {
    expect(runningSum([1,2,3,4])).toStrictEqual([1,3,6,10])
  })
})
