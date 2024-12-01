function toUnderscore(input) {
    // Check if the input is a number
    if (typeof input === 'number') {
      return input.toString(); // Return the string representation of the number if it is
    }
  
    let currentWord = '';
    let words = [];
  
    for (let i = 0; i < input.length; i++) {
      // Check if the current character is uppercase
      if (input[i] === input[i].toUpperCase() && isNaN(input[i])) {
        // If there's already a current word, push it to the array
        if (currentWord) {
          words.push(currentWord);
          currentWord = ''; // Reset currentWord for the new word
        }
      }
      // Append the current character to the current word
      currentWord += input[i];
    }
  
    // Push the last word if it exists
    if (currentWord) {
      words.push(currentWord);
    }
  
    // Convert all words to lowercase and join them with underscores
    return words.map(word => word.toLowerCase()).join('_');
  }
  