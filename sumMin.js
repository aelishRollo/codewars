function sumOfMinimums(arr) {
    //declare total
    let total = 0
    //iterate through the big array of arrays
    for (let smallArray of arr) {
      //find the minimum value of each small array
      let min = Math.min(...smallArray)
      //add the minum value to total
      total += min
    } 
    //return total
    return total
  }
  /*
  Parameters:
  arr, an array containing arrays of numbers
  
  Return Value:
  The sum of all of the smallest numbers of each small array
  */
