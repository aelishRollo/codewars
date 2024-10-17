function groupByCommas(n) {
  
    //convert the input number, n, to a string, then to an array
    let result = String(n).split('')
    
    //declare a variable to count every three digits
    let countThree = 0
    
    //iterate through the numbers backwards. Every three, add a comma, unless you're at the start of the number
    for (let i = result.length - 1; i > 0; i--) {
      countThree++
      if (countThree === 3) {
        countThree = 0
        result[i - 1] = result[i - 1] + ',';
      }
    }
    //convert back to a string, then return result
    return result.join('')
  }
  /*
  Parameters:
  n, an integer number between 0 and 2147483647
  
  Return Value:
  The same number, but with commas added every three digits from the right
  
  Example:
  420691337 => 420,691,337
  */
