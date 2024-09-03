function moveZeros(arr) {
    console.log(arr)
    let zeroesCount = 0
    let result = []
    arr.forEach((element) => {
      if (element !== 0) {
        result.push(element)
      } else {
        zeroesCount++
      }
    })
    for (let i = 0; i < zeroesCount; i++) {
      result.push(0)
    }
    return result
  }
  
  /*
  Parameters: an array of various values of various types
  
  Return Value: An array where all of the zeroes have been moved to the end
  
  Example: moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
  
  Psuedocode:
  have an array, result = []
  for each element of arr, if it's not zero, push it to result
  else, increase the count of zeroes
  keep a count of how many zeroes there are
  At the end, push as many zeroes as count to the result
  return result
  
  */
