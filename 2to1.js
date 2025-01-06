function longest(s1, s2) {
    let result = ''
    //iterate through s1, adding chars not in result to result
    for (let i = 0; i < s1.length; i++) {
      if (!result.includes(s1[i])) {
          result += s1[i]
          }
    }
    //iterate through s2, adding chars not in result to result
    for (let i = 0; i < s2.length; i++) {
      if (!result.includes(s2[i])) {
          result += s2[i]
          }
    }
    //sort it alphabetically
    result = result.split('').sort().join('')
    
    //return result
    return result
    
  }
  
  /*
  Parameters:
  s1 and s2, two strings
  
  Return Value:
  from s1 and s2, the longest string of unique characters possible, sorted alphabetically 
  
  Example:
  longest(long,range) => aeglnor
  
  */
