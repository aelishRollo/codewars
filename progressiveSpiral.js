function layers(n){
    if (n === 1) {
      return 1
    }
    let oddNumbers = [1]
    let keepGoing = true
    let i = 1;
    while (keepGoing) {
      
      let nextOdd = 2 * i + 1;
      oddNumbers.push(nextOdd);
  
      
      if (nextOdd * nextOdd >= n) {
        keepGoing = false; 
        return i + 1; 
      }
  
      i++; 
      }
  }
  /*
  Parameters:
  n, an integer
  
  Return Value:
  An integer, representing how many layers it takes to contain that number
  
  
  Example:
  layers(1) === 1
  layers(5) === 2
  layers(25) === 3
  layers(30) === 4
  layers(50) === 5
  
  Psuedocode:
  Going diagonally from 1, each number follows the pattern of being an odd number squared
  So:
  Generate squares of odd numbers until one is larger than n
  The find the length of this array, and return it
  
  */
