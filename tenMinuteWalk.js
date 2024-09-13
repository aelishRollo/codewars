function isValidWalk(walk) {
    if (walk.length !== 10) {
      return false
    } else {
      let [countN, countS, countE, countW] = [0,0,0,0]
      for (let i = 0; i < 10; i++) {
        if (walk[i] === 'n') {
          countN++
        } else if (walk[i] === 's') {
          countS++
        } else if (walk[i] === 'e') {
          countE++
        } else if (walk[i] === 'w') {
          countW++
        }
      }
      return (countS - countN === 0) && (countW - countE === 0)
    }
  }
  
  /*
  Parameters: an array of strings, each representing a one minute walk taken, and the cardinal direction in
  which the person travelled
  
  Return Value: a boolean, representing if the walk takes ten minutes and if it brings you back to the origin
  
  Example: 
  isValidWalk(['n','s','n','s','n','s','n','s','n','s']) will return true because the amount of north and south
  travelling is the same
  
  Psuedocode:
  
  if walk.length is not 10, return false
  else, check that the amount of s === amount n , and so on for west and east. Then return true if this is the case
  
  */
