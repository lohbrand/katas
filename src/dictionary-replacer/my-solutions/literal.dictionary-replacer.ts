type dictionary = {
  [index: string]: string
}

export class DictionaryReplacer {
  constructor(private dictionary: dictionary) {}

  replace(input: string): string {
    let output = input || ''
    if (output !== '') {
      for (let entry in this.dictionary) {
        output = output.replace(`$${entry}$`, this.dictionary[entry])
      }
    }
    return output
  }
}
