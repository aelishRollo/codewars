function solve(s){
  
    //decalare count variables
    let [upper,lower,number,special] = [0,0,0,0]
    
    //declare strings to check against
    let upperCases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let lowerCases = 'abcdefghijklmnopqrstuvwxyz'
    let numbers = '1234567890'
    
    //iterate through the input string
    //if uppercase, update uppercase
    //if lowercase, update lowercase
    //if it's a number, update number
    //if it's a special haracter, update special
    for (let char of s) {
      if (upperCases.includes(char)) {
        upper++
      } else if (lowerCases.includes(char)) {
        lower++
      } else if (numbers.includes(char)) {
        number++
      } else {
        special++
      }
    }
    
    //return the array
    return [upper,lower,number,special]
    
  }
  /*
  Parameters: s, a string
  
  Return Value: an array representing the count of uppercase chars, lowercase chars, 
  numbers, and special characters
  
  Example: 
  solve('abc345!!!!PO') => [3,2,3,4]
  */
