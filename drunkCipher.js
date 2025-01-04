function decode(str) {
    if (typeof str !== 'string') {
      return 'Input is not a string'
    }
    
    let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    
    let result = ''
    
    for (let i = 0; i < str.length; i++) {
      if (lowerCaseLetters.includes(str[i])) {
        let index = 25 - lowerCaseLetters.indexOf(str[i])
        result += lowerCaseLetters[index]
      } else if (upperCaseLetters.includes(str[i])) {
        let index = 25 - upperCaseLetters.indexOf(str[i])
        result += upperCaseLetters[index]
      } else {
        result += str[i]
      }
      
    }
    return result
  
  
  }
  
  /*
  e => v
  
  Seems to be that the cipher returns alphebet[-index],
  so for example a => z , b => y and so on
  So we just need to reverse that
  
  also check if the input is a string
  also leave any non-alphabetical character the same
  */
