function firstNonRepeatingLetter(s) {
  
    let letterArray = s.split('');
     if (letterArray.length > 1 && letterArray.every(letter => letter.toLowerCase() === letterArray[0].toLowerCase())) {
       return '';
     }
     
     for (let i = 0; i < s.length; i++) {
       let currentLetter = s[i];
       let lowerCaseLetter = currentLetter.toLowerCase();
       
       
       if (s.toLowerCase().indexOf(lowerCaseLetter) === s.toLowerCase().lastIndexOf(lowerCaseLetter)) {
         return currentLetter;
       }
     }
     
     return '';
   }
   
   /*
   Parameters: 
   A string, which I expect from the description will be only one word, though that may be a gotcha
   
   Return Value:
   A string, either the first letter that does not repeat, or and empty string if the string is all repeating 
   characters. Lower/upper case characters count as the same
   
   Example:
   'joy' => 'j' because it's the first non-repeating character
   
   Return Value:
   if the string is all the same character, return ''
   
   iterate through the string
   check if the character is (not) repeated throughout the string, if so return it
   
   
   */
