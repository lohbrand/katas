import { findOdd } from './find_odd_int'

//--- SPECS -------------------------
// Kata from https://www.codewars.com
describe('This kata is about search and test even/odd.', () => {
  doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5)
  doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1)
  doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5)
  doTest([10], 10)
  doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10)
  doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1)
})

function doTest(a: number[], n: number) {
  it(`xs = ${JSON.stringify(a)} ; n = ${n}`, () => {
    expect(findOdd(a)).toBe(n)
  })
}
