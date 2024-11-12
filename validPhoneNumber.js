function validPhoneNumber(phoneNumber) {
    if (
      hasParenthesesAndSpace(phoneNumber) &&
      has3DigitsAndDash(phoneNumber) &&
      phoneNumber.length === 14
       ) {
      console.log(phoneNumber)
      return true
    } else {
      console.log(phoneNumber)
      return false
    }
  }
  
  let hasParenthesesAndSpace = (str) => {
    let areaCodeAndSpace = str.slice(0,6)
    if (areaCodeAndSpace[0] === '(' && areaCodeAndSpace[4] === ')' && areaCodeAndSpace[5] === ' ') {
        return true
        } else {
      return false
    }
  }
  
  let has3DigitsAndDash = (str) => {
    let digitsAndDash = str.slice(6,10)
    if (digitsAndDash[3] === '-') {
      return true
    } else {
      return false
    }
  }
  
  /*
  Parameters:
  phoneNumber, a string
  
  Return Value:
  a boolean. This represents whether the string is a valid phone number.
  The examples are sort of unclear, but it seems that it most conform to this exact format:
  (123) 456-7890
  which means:
  -3 digits in parentheses 
  -a space after them
  -3 more digits
  -a dash
  -4 more digits
  */
