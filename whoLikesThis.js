function likes(names) {
    if (names.length === 0) {
      return 'no one likes this'
    } else if (names.length === 1) {
      return `${names[0]} likes this`
    } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`
      } else if (names.length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
      } else if (names.length >= 4) {
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
      }
  }
  
  /* 
  Parameters: an array of names
  
  Return Value: a string, representing who likes the post
  
  Example: 
  
  []                                -->  "no one likes this"
  ["Peter"]                         -->  "Peter likes this"
  ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
  ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
  ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
  
  
  
  Psuedocode:
  if the array is empty, 'no one likes this'
  if it has one like, names[0] likes this
  if it has two, names[0] and names[1] like this
  if it has three, names[0], names[1] and names[2] like this
  if it has 4 or more, names[0], names[1] and n - 2 others like this
  
  */
