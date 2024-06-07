export function narcissistic(value: number): boolean {
    let valueAsString = String(value)
    let valueLength = valueAsString.length
    let valueAsArray = valueAsString.split('')
    let total = 0
    
    for (let digit of valueAsArray) {
      total += Math.pow(Number(digit),valueLength)
    }
    if (total === value) {
      return true
    } else {
      return false
    }
  }
  
  
  //PREP
  
  //Parameters: an integer, I think. Would be tougher to do with floats but I don't see any in tests
  
  //Return value: a boolean, representing if it's narcissistic or not
  
  //Example: 153 => 1^3 + 5^3 + 3^3
  
  //Psuedocode:
  
  //convert number to a string, store its length, then split the string into each digit
  
  //raise each digit to the power of the length
  
  //If that number === the original number, return true, else return false
  
  //Possible optimization: if the result is larger than the number, you can just return false
