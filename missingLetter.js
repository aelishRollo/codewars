function findMissingLetter(array) {
    console.log(array)
    let letter1 = ''
    let letter2 = ''
    for (let i = 0; i < array.length -1; i++) {
      letter1 = array[i]
      letter2 = array[i+1]
      if (distance(letter1,letter2) !== 1) {
        return String.fromCharCode(letter1.charCodeAt(0)+1)
      }
    } 
    return array.at(-1) //return last member if it isn't found in previous process
  }
  
  let distance = (a,b) => {
    return b.charCodeAt(0) - a.charCodeAt(0)
  }
  
  //Parameters: an array of consecutive strings, letters of the alphabet
  
  //Return: Return which letter is missing
  
  //Examples: 
  
  //['a','b','c','d','f'] -> 'e'
  //['O','Q','R','S'] -> 'P'
  
  //Psuedocode
  
  //Find out where the gap between letters is larger than 1
  //Return the character between those two
