function incrementString(str) {
    // Separate the characters and the numbers into two strings
    let charString = '';
    let numString = '';
    const numbers = '0123456789';
    
    //this is done in reverse order so as to get just the num at the end
    // meaning internal numbers in the string won't mess it up
    let endOfNum = false
    for (let i = str.length - 1; i >= 0; i--) {
      if (numbers.includes(str[i]) && !endOfNum) {
        numString += str[i]
      } else {
          endOfNum = true
          charString += str[i]
      }
    }
    charString = charString.split('').reverse().join('')
    numString = numString.split('').reverse().join('')
    let length = numString.length
    
    //cast to number, increment, cast back to string, and then pad with zeroes
    numString = Number(numString) + 1
    numString = String(numString)
    numString = numString.padStart(length,'0')
    
    return charString + numString
  }  
  
  
  /*
  Parameters: 
  str, an arbitrary string
  
  Return Value:
  the string, but with the number on the end incremented. 
  if there is not already a number, just assume that it's 0
  
  examples:
  incrementString('kalus') => 'kalus1'
  incrementString('barfu003') => 'barfu004'
  
  Psuedocode:
  seperate the chars and the numbers into two strings
  turn numString into a number and increment it
  turn it back into a string, then pad it
  
  */
