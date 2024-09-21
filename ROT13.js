function rot13(message){
  const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let result = ""
  
  for (let letter of message) {
    if (lowerCaseAlphabet.includes(letter)) {
      result += lowerCaseAlphabet[(lowerCaseAlphabet.indexOf(letter) + 13) % 26]
    } else if (upperCaseAlphabet.includes(letter)) {
      result += upperCaseAlphabet[(upperCaseAlphabet.indexOf(letter) + 13) % 26]
    } else {
      result += letter
    }
  }
  return result
  
}
/*
Parameters: 
a string, which I believe, based on the examples, will be only one word

Return Value:
the same string, except each string is mapped to the letter 13 letters forward in the alphabet from it

Example:
rot13("test") => "grfg"

Psuedocode:
iterate through the letters of the string
if it's a capitol letter, map to the capitol letter 13 away from this letter
do the same if it's a lowercase letter
return this new string that's made



*/
