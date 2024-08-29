function suffixSums(a) {
    let result = []
    for (let i = 0; i < a.length; i++) {
      let val = 0
      for (let j = i; j < a.length; j++) {
        val += a[j]
      }
      result.push(val)
    }
    return result
  
  }
  
  /*
  Parameters: an array of integers, called a
  
  Return value: another array, constructed based on the input array
  
  Example: [1,2,3,-6] => [0,-1,-3,-6]
  
  Pseudocode:
  
  make a new array called result
  iterate through a, adding the sum of all the rest of the elements of a and pushing that to result
  
  
  */
