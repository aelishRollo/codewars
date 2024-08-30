function likeOrDislike(buttons) {
    let currentState = Nothing
    for (let val of buttons) {
      if (currentState === val) {
        currentState = Nothing
      } else {
        currentState = val
      }
    }
    return currentState
  }
  
  
  /*
  Parameters: an array of button inputs
  
  Return Value: the final state based on those presses, not as a string, I think it comes from the environment
  
  Example: [dislike, like] => 'Like'
  
  Psuedocode:
  
  Have a variable for the current state
  iterate through the array, and update current state based on it
  if (currentState === currentVal) {
    currentState = Nothing
  } else if (currentState !== currentVal) {
    currentState = currentVal
  }
  
  return currentState
  
  
  
  
  
  */
