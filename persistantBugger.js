let multiplyDigits = (num) => {
    let numAsString = num.toString()
    let digitsArray = numAsString.split('')
    let result = digitsArray.reduce(
      (accumulator, currentValue) => {
        return Number(currentValue) * accumulator
      })
    return result
  }
  
  function persistence(num) {
     let counter = 0
     let currentNum = num
     let keepGoing = true
     while (keepGoing) {
       if (currentNum < 10) {
         keepGoing = false
         return counter
       } else {
         counter++
         currentNum = multiplyDigits(currentNum)
       }
     }
  }
  
  
  
  
  /* 
  
  Parameter: a positive integer
  
  
  Return value: a positive integer
  
  
  Example: 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
  
  
  Psuedocode: 
  start a counter at 0
  check if currentNum is less than 10, if so return counter
  else increment counter and make currentNum = multiplyDigits(currentNum)
  
  
  
  
  
  
  */
