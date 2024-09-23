function solution(str) {
    let result = []
    let letters = str.split('')
    let twoLetters = ''
    if (letters.length % 2 === 0) {
      for (let i = 0; i < letters.length; i = i + 2) {
        twoLetters = ''
        twoLetters += letters[i]
        twoLetters += letters[i + 1]
        result.push(twoLetters)
      } 
    } else {
        for (let i = 0; i < letters.length - 1; i = i + 2) {
          twoLetters = ''
          twoLetters += letters[i]
          twoLetters += letters[i + 1]
          result.push(twoLetters)
        }
        twoLetters = ''
        twoLetters += letters[letters.length - 1]
        twoLetters += '_'
        result.push(twoLetters)
      }
      return result 
  }
  