function isAlt(word) {
    let letters = word.split('')
    let evenLetters = []
    let oddLetters = []
    
    for (let i = 0; i < letters.length; i++) {
      if (i % 2 === 0) {
        evenLetters.push(letters[i])
      } else {
        oddLetters.push(letters[i])
      }
    }
    
   return (evenLetters.every((letter) => isVowel(letter)) && oddLetters.every((letter) => !isVowel(letter)))
        || (evenLetters.every((letter) => !isVowel(letter)) && oddLetters.every((letter) => isVowel(letter)));
  }
  
  let isVowel = (letter) => {
    let vowels = ['a','e','i','o','u']
    if (vowels.includes(letter.toLowerCase())) {
      return true
    } else return false
  }
  
  /*
  Parameters: word, which is a string. It seems that there won't be invalid input
  
  Return value: true if the letter contains alternating vowels and consonants, false otherwise
  
  Example: bonobo => true
  
  Psuedocode: 
  determine if first letter is consonant or vowel
  based on this, all odd letters should be the other one, and all evens letters should be 
  the same as the first letter
  we can use .every() to check this easily
  */
