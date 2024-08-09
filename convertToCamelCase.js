function toCamelCase(str){
    if (str === '') {
      return ''
    }
   let arrayOfWords = str.split(/[-_]/);
    let arrayOfWordsCapitalized = [arrayOfWords[0]]; // Initialize with the first word without capitalizing it
    for (let i = 1; i < arrayOfWords.length; i++) {
      arrayOfWordsCapitalized.push(capFirstLetter(arrayOfWords[i]));
    }
    return arrayOfWordsCapitalized.join(''); // Join the array back into a single string
  }
  
  let capFirstLetter = (word) => {
    let result = word[0].toUpperCase() + word.slice(1)
    return result
  }
  
  //Parameters: a string, which I think could be anything
  
  //Return value: a string in camelcase, where the dashes are replaced with camelCase
  
  //Example: 'the-andromeda-galaxy' becomes 'theAndromedaGalaxy'
  
  //Psuedocode: use the .split() method to convert to an array of strings
  //then use .toUpperCase() to capitalize the first letter of every word aftewr the first
  //concatenate them and return
