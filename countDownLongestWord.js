function longestWord(letters) {
    //handle null case
    if (letters.length === 0) {
      return null;
    }
    
    let wordsContainingValidLetters = [];
  
    // Helper function to count letters in a string
    function getLetterCount(str) {
      const count = {};
      for (let char of str) {
        count[char] = (count[char] || 0) + 1;
      }
      return count;
    }
  
    // Create a letter count map for the input letters
    const letterCount = getLetterCount(letters);
  
    // Iterate through words
    for (let word of words) {
      const wordCount = getLetterCount(word);
      
      // Check each letter of each word to see if it contains exclusively letters from letters in the correct counts
      if (Object.keys(wordCount).every((char) => 
            letterCount[char] && wordCount[char] <= letterCount[char]
          )) {
        // Add to wordsContainingValidLetters only if it’s not already included
        if (!wordsContainingValidLetters.includes(word)) {
          wordsContainingValidLetters.push(word);
        }
      }
    }
  
    // Handle empty wordsContainingValidLetters by returning null
    if (wordsContainingValidLetters.length === 0) {
      return null;
    }
  
    // Find the longest word(s)
    let maxLength = Math.max(...wordsContainingValidLetters.map(word => word.length));
    let longestWords = wordsContainingValidLetters.filter(word => word.length === maxLength);
  
    // Sort alphabetically if there are multiple words of the same length
    longestWords.sort();
  
    return longestWords;
  }
  