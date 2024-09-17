var uniqueInOrder=function(iterable){
    console.log(typeof iterable)
    if (typeof iterable === 'string') {
      var result = []
      for (let i = 0; i < iterable.length; i++) {
        if (iterable.at(i) !== iterable.at(i + 1)) {
          result.push(iterable[i])
        }
        
      }
    } else if (typeof iterable === 'object') {
      var result = []
      for (let i = 0; i < iterable.length; i++) {
        if (iterable.at(i) !== iterable.at(i + 1)) {
          result.push(iterable[i]) 
        }
        
      }
    }
    return result
  }
  
  /*
  Parameters: either a string or an array, which contains a sequence of numbers and/or chars
  
  Return Value: The same sequence but with no repeated elements, and still in the same order
  
  Examples:
  uniqueInOrder('aabbcdeff') => 'abcdef'
  uniqueInOrder('1000011') => '101'
  
  Psuedocode:
  
  determine the type of the sequence, this will determine which logic is done
  
  iterate over the iterable
  
  if the next element is not the same as the current element, then add it to the result array. The return
  type will always be an array
    
  return the result
  
  
  
  
  
  */
