function spinWords(string){
    let words = string.split(' ')
    let result = []
    for (let word of words) {
      if (word.length >= 5) {
        result.push(word.split('').reverse().join(''))
      } else {
        result.push(word)
      }
    }
    return result.join(' ')
  }
  
  /*
  Parameters: a string of word
  
  Return value: The same string, but with any word over 5 letters reversed
  
  Examples:
  "Hey fellow warriors"  --> "Hey wollef sroirraw" 
  "This is a test        --> "This is a test" 
  "This is another test" --> "This is rehtona test"
  
  Psuedocode:
  Split the string into an array of words
  let result = []
  iterate over the split string, adding each word to the result array, and reversing it if it's longer than 
  5 letters
  return result.join(' ')
  */
