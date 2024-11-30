function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) {
      return 0
    }
    let numArray = []
     
    //make an array of the lengths of all the arrays
    for (let arr of arrayOfArrays) {
      if (arr === null || arr.length === 0) {
        return 0
      }
      numArray.push(arr.length)
    }
    
    
    //sort the new array
    numArray.sort((a,b) => a - b)
     
    //find the missing number and return it
    let missingNum = 11111
    for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] + 1 !== numArray[i + 1]) {
        missingNum = numArray[i] + 1
        break
      }
    }
    
    return missingNum
  }
  /*
  Parameters:
  arrayOfArrays, which is an array containing arrays of various lengths
  
  Return Value:
  The length of the array that is missing
  
  Example:
  getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ) => 3
  */
  
  