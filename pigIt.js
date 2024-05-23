function pigIt(str) {
    function isAlphabetical(char) {
      return char.toLowerCase() !== char.toUpperCase();
    }
  
    let wordsArray = str.split(' '); // get an array of the words
  
    let pigLatin = (word) => { // pig latin a word
      if (!isAlphabetical(word[0])) {
        return word; // Return the word as is if it starts with a non-alphabetical character
      }
  
      let firstLetter = word[0];
      let wordWithoutFirstLetter = word.slice(1);
  
      // Check if the last character is a punctuation mark
      let punctuation = '';
      if (!isAlphabetical(word[word.length - 1])) {
        punctuation = word[word.length - 1];
        wordWithoutFirstLetter = word.slice(1, word.length - 1);
      }
  
      let result = wordWithoutFirstLetter + firstLetter + 'ay' + punctuation;
      return result;
    }
  
    let pigLatinWords = wordsArray.map((word) => {
      return pigLatin(word);
    });
  
    let result = pigLatinWords.join(' ');
  
    return result;
  }
  
  