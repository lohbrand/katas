export const findOdd = (xs: number[]): number => {
  let foundDict: Record<string, boolean> = {}
  if (xs.length) {
    for (let i = 0; i <= xs.length; i += 1) {
      if (foundDict[xs[i]]) {
        foundDict[xs[i]] = false
      } else {
        foundDict[xs[i]] = true
      }
    }
    for (const [key, value] of Object.entries(foundDict)) {
      if (value) return parseInt(key)
    }
  }
  throw new Error('nothing found')
}
