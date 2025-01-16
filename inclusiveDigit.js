function numbersWithDigitInside(x, d) {
  
    let nums = []
    
    for (let i = 1; i <= x; i++) {
      if (String(i).includes(d)) {
        nums.push(i)
      }
    }
    
    if (nums.length === 0) {
      return [0,0,0]
    }
  
    let sum = nums.reduce((current,accum) => current + accum)
    let product = nums.reduce((current,accum) => current * accum)
    
    return [nums.length, sum, product]
  }
  
  /*
  Currently listening to Alt-J. Great band!
  
  Parameters:
  x, which is the upper limit we are searching up to
  d, which is the digit we are checking if each integer up to x contains
  
  Return Value:
  An array containing the following, in the following order:
  the count of numbers up to x which contain the digit d
  the sum of all of those numbers
  the product of all of those numbers
  
  Example:
  numbersWithDigitInside(15,5) => [2,20,75]
  
  Psuedocode:
  iterate up through all the integers up to and including x
  if the string version of the current number contains d, add it to the numbers array
  get the length of this array
  get the sum of this array
  get the product of the members of the array
  return these
  */
