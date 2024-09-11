function isFibo(a,b,f) {
    let fibs = [a,b]
    let keepGoing = true
    if (fibs.includes(f)) {
      return true
    }
    while (keepGoing) {
      if (fibs[fibs.length - 1] > f) {
        keepGoing = false
        return false
      } else if (fibs[fibs.length - 1] === f) {
          keepGoing = false
          return true
        } else {
          fibs.push (fibs[fibs.length - 1] + fibs[fibs.length - 2])
        }
    }
  }
  
  //1,3,1 is erroring. Why?
  
  /*
  Parameters: a,b, and f, three integers. The first are the first two terms of a Fibonacci sequence, and the
  third is the number we are checking to see if the sequence contains the element
  
  Return Value: A boolean, indicating if the number is part of the sequence or not
  
  Example: 
  isFibo(1,4,10)
  [1,4,5,9,14] which does not include 10, so return false
  
  Psuedocode:
  
  let fibs = [a,b]
  let keepGoing = true
  while (keepGoing) {
    if (fibs[fibs.length - 1] > f) {
    keepGoing = false
    return false
    } else if (fibs.length - 1 === f) {
    return true
    }
  }
  
  
  */
