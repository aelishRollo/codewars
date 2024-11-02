function divisors(integer) {
    let result = []
    //iterate from 2 to integer - 1
    for (let i = 2; i < integer; i++) {
      //if integer % currentNum === 0 then add it to the array
      if (integer % i === 0) {
        result.push(i)
      }
    }
    if (result.length !== 0) {
      return result
    } else {
      return `${integer} is prime`
    }
    
  }
  
  /*
  Parameters: an integer, so no exceptions it seems
  
  Return Value:
  an array containing all the divisiors of the number, other than 1 and the integer itself
  */
