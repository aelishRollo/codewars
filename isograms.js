function isIsogram(str){
    //result represents if the str is an isogram or not
    //assume initally that the string is an isogram
    let result = true
    let letterStore = []
    //iterate throught the letters
    for (let letter of str) {
    //check if the current letter is in the letter store
      if (letterStore.includes(letter.toLowerCase())) {
        //if it is, change result to false
        result = false
      }
      //add the current letter to the letter store
      letterStore.push(letter.toLowerCase())
    }
    return result
  }
  /*
  Parameters:
  an arbitrary string containing only uppercase and lowercase letters. It can be empty as well, in which case
  we consider it to be an isogram
  
  Return Value:
  a boolean, indicating whether or not any letter in the string appears more than once
  
  Examples:
  
  isIsogram('porter') => false
  isIsogram('one') => true
  isIsogram('') => true
  
  */
