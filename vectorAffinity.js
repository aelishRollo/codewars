function vectorAffinity(xs,ys) {
    if (xs.length === 0 && ys.length === 0) {     //handle empty array cases
      return 1
    } else if (xs.length === 0 || ys.length === 0) {
      return 0
    }
    
    
    let same = 0
    let shorter = []
    let longer = []
    
    if (xs.length <= ys.length) {
      longer = ys
      shorter = xs
    } else {
      longer = xs
      shorter = ys
    }
    
    
    for (let i = 0; i < shorter.length; i++) {
      if (shorter[i] === longer[i]) {
        same++
      }
    }
    return same/longer.length
    
  }
  
  /* 
  
  Parameters: two arrays, which seem to be of numbers, although that isn't always the case. We'll have
  to do error checking for null, and perhaps for strings, though that is not clear yet
  
  Return value: a float from 0.0 to 1.0 representing the degree of similarity in the cases
  
  Example:  ([1 2 3 4 5], [1 2 2 4 3]) => 0.6 because 3/5 are the same
  
  Psuedocode:
  first check for empty arrays, return suitable value if that's the case
  initalize a for loop based on the shortest array
  if the values are the same, then update the same variable
  return same/longerArray.length
  (that process works for null values as well)
  
  
  
  
  
  
  */
