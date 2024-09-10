function arrayDiff(a, b) {
    return a.filter((num) => !b.includes(num))
  }
  
  /*
  Parameters: two arrays. From the examples it appears that both are going to contain integers,
  but the easiest solution also doesn't really care about what type each element is
  
  Return Value: the difference of the two arrays. Essentially, all elements of a which are not in b
  
  Example: arrayDiff([1,2,2,2,3],[2]) == [1,3]
  
  Psuedocode:
  return a.filter((num) => !b.includes(num))
  
  
  */
