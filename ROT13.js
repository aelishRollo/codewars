export function rot13(str: string): string {
    let lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
  
    for (let letter of str) {
      if (lowerAlphabet.includes(letter)) {
        let positionOfCurrentLetter = lowerAlphabet.indexOf(letter);
        result += lowerAlphabet[(positionOfCurrentLetter + 13) % 26];
      } else if (upperAlphabet.includes(letter)) {
        let positionOfCurrentLetter = upperAlphabet.indexOf(letter);
        result += upperAlphabet[(positionOfCurrentLetter + 13) % 26];
      } else {
        result += letter;
      }
    }
  
    return result;
  }
  