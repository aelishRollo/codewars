function inArray(array1,array2){
    let result = []
    for (let word1 of array1) {
      for (let word2 of array2) {
        if (word2.includes(word1) && !result.includes(word1)) {
          result.push(word1)
        }
      }
    }
    return result.sort()
  }
  /*
  Parameters:
  two arrays, each containing strings
  
  Return Value: an array, containing the strings in a1 that are substrings of strings in a2
  
  Example: inArray(['a','be','kirkegaard'],['jerry','aleph','bees']) => ['a','be']
  
  Psuedocode:
  iterate through the strings in a1
  iterate through each string of a2, 
  check if the current a1 string is a substring of a2
  if so, add it to the result array
  return the result array
  
  Why is it returning [ 'live', 'strong', 'arp' ] rather than [ 'arp', 'live', 'strong' ]?
  Oh, I just need to sort it so I'll throw a .sort() on the return statement
  */
