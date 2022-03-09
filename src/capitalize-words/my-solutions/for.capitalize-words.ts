export const capitalizeWords = (input: string): string => {
  let output = ''
  const words = input.split(' ')
  for (let i = 0; i < words.length; i += 1) {
    output += words[i].charAt(0).toUpperCase() + words[i].slice(1) + ' '
  }
  return output.trim()
}
