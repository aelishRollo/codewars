function duplicateCount(text){
    text = text.toLowerCase()
    let lettersThatAppearMoreThanOnce = []
    
    for (let letter of text) {
      if (appearsMoreThanOnce(text,letter) && !lettersThatAppearMoreThanOnce.includes(letter)) {
        lettersThatAppearMoreThanOnce.push(letter)
      }
    }
    return lettersThatAppearMoreThanOnce.length 
  }
  
  let appearsMoreThanOnce = (word, letter) => {
    if ((word.split(letter).length - 1) > 1) {
      return true
    } else return false
  }
  
  /* 
  Parameters: an alphanumeric string, so no spaces or special characters
  
  Return value: An integer which represents how many distinct chars are repeated, treating all letters the same
    regardless of capitalization
    
  Example: "aabBcde" => 2, because there's a and b
  
  Psuedocode:
  
  For each letter, check if it appears more than once. Add the lowercase version of it to the lettersWhoAppearMoreThanOnce 
  array, if it is not already in there. Then return the length of this array
  */ 
