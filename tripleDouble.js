function tripledouble(num1, num2) {
    //duplicateNumber = containsTriple(num1)
    let duplicateNumber = containsTriple(num1)
  
    //if containsTriple === undefined, return 0
    if (containsTriple(num1) === null) {
      return 0
    } else {
      //if num2 containsDouble(duplicateNumber)
      if (containsDouble(num2, duplicateNumber)) {
        return 1
      } else {
        return 0
      }
    }
  }
  
  let containsTriple = (num) => {
      let duplicateNumbers = []
      num = String(num)
      num = num.split('')
      for (let i = 0; i < num.length; i++) {
          if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
              duplicateNumbers.push(Number(num[i])) 
          }
      }
      if (duplicateNumbers.length === 0) {
          return null
      } else {
          return duplicateNumbers
      }
  }
  
  let containsDouble = (num, duplicateNumbers) => {
      num = String(num).split('')
      for (let i = 0; i < num.length; i++) {
          for (let j = 0; j < duplicateNumbers.length; j++) {
              if (num[i] === String(duplicateNumbers[j]) && num[i + 1] === String(duplicateNumbers[j])) {
                  return 1
              }
          }
      }
      return null
  }
