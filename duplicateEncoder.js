function duplicateEncode(word){
    word = word.toLowerCase()
    let result = ''
    for (let letter of word) {
      if (appearsMoreThanOnce(word,letter)) {
        result += ')'
      } else {
        result += '('
      }
    }
    return result  
  }
  
  
  let appearsMoreThanOnce = (word, letter) => {
    if ((word.split(letter).length - 1) > 1) {
      return true
    } else return false
  }
  
  //Parameters: A string, I believe it will only be one word, but I know that spaces are allowed so that doesn't 
  //really matter
  
  //Return value: a new string, consisting of the parentheses characters, '(' and ')', ignoring case
  
  //Example: 'Hamilton Morris' will return '(())(()(()())()'
  
  //Psuedocode: iterate through word
  //for each letter, if (apearsMoreThanOnce(word,letter)) {
  //  result += ')'
  // else result +='('
