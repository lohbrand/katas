export const numberOfBits = (n: number): number => {
  const binNumber = n.toString(2) // (n >>> 0).toString(2)
  const matchArr = binNumber.match(/1/g)

  if (matchArr) {
    return matchArr.length
  }

  return 0
}
