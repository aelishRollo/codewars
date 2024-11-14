function chain(input, fs) {
    let result = input
    for (let func of fs) {
      result = func(result)
    }
    return result
  }
  
  /*
  Parameters:
  input, a number presumably
  fs, an array of functions to be run
  
  
  Return Value:
  start with input, pass it it fs[0], then pass that return value to the next function, and so on,
  until you're at the last function, in which cass you pass the evaluation of that function
  
  
  
  
  */
