function dontGiveMeFive(start, end) {
    //generate an array of all numbers in between the two 
    let allNums = []
    //remove all the digits with 5 in them
    for (let i = start; i <= end; i++) {
      if (!String(i).includes('5')) {
        allNums.push(i)
      }
    }
    return allNums.length
  }
  /*
  Parameters:
  start, end, are both integer numbers representing a range
  
  Return Value:
  the number of numbers in between the two that do not include 5
  */
