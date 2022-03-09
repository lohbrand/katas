import { numberOfBits } from './string.number-of-bits'

//--- SPECS -------------------------
// Kata from https://www.codewars.com
describe('This kata is about making a bit counter.', () => {
  it('input : 1234, output:5', () => {
    // Arrange
    let input = 1234

    // Act
    let result = numberOfBits(input)

    // Assert
    expect(result).toBe(5)
  })

  it('input : 7055355693457991, output:25', () => {
    // Arrange
    let input = 7055355693457991

    // Act
    let result = numberOfBits(input)

    // Assert
    expect(result).toBe(25)
  })
})
