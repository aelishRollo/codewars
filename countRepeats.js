function countRepeats(str) {
    let result = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        result++
      }
    }
    console.log(`str is ${str}`)
    console.log(`result is ${result}\n`)
    return result
  }
  /*
  Parameters:
  str, which is an arbitrary string
  
  Return Value:
  an integer number, representing how many chars must be removed to remove all duplicates
  
  Example:
  abbbbc => abc which returns 3
  
  
  Why is it 
  */
