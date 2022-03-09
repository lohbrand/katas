import { capitalizeWords } from './for.capitalize-words'

//--- SPECS -------------------------
// Kata from https://www.codewars.com
describe('This kata is about capitalize words.', () => {
  it('input : How can mirrors ..., output: How Can Mirrors ...', () => {
    // Arrange
    let input = "How can mirrors be real if our eyes aren't real"

    // Act
    let result = capitalizeWords(input)

    // Assert
    expect(result).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real")
  })
})
