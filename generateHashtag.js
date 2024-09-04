function generateHashtag(str) {
  
    if (str.trim().length === 0) {
      return false;
    }
    
    
    let result = '#' + str.trim().split(/\s+/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    
   
    if (result.length > 140) {
      return false;
    }
    
    return result;
  }
  
  /*
  Parameters: a string, which I think will just have spaces and letters, not numbers or special characters
  
  Return Value: A concatenated version of all of those, formatted like a hashtag, with each word's first
  letter being capitalized
  
  Example: 'This is a     thing' => '#ThisIsAThing'
  
  
  Psuedocode:
  if the length of str is 0, return false
  use regex to remove excessive spaces, and replace them with just one space
  for each word, add it to the result array
  if the length of result string is <= 140, return it, else return false
  
  
  
  
  */
