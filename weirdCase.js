function toWeirdCase(string){
    let wordArray = string.split(' ').map(word => capitalizeEveryOtherLetter(word))
    return wordArray.join(' ')
  }
  
  let capitalizeEveryOtherLetter = (str) => {
    let result = ''
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 0) {
        result += str[i].toUpperCase()
      } else {
        result += str[i].toLowerCase()
      }
    }
    return result
  }
  /* 
  
  Parameters: a string of text, there don't seem to be any special characters or numbers, not that that matters.
  Doesn't seem we need to do any error handling or anything like that, so all input is valid I assume
  
  
  Return Value: The same string but with alternating capitalization starting with the 0th index. This starts
  over at each word
  
  
  Example: 'I need to drink ovaltine' => 'I NeEd To DrInK OvAlTiNe'
  
  
  Psuedocode: 
  
  Use .split(' ') to create an array of words, then use capitalizeEveryOther(array) to get an array of capitalized words
  Then concatenate and return them
  
  
  
  
  */
