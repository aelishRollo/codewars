function Dictionary(words) {
    this.words = words;
  }
  
  Dictionary.prototype.findMostSimilar = function(term) {
    let result = ''
    for (let word of this.words) {
      if (levenshteinTwoMatrixRows(term,word) < levenshteinTwoMatrixRows(term,result)) {
        result = word
      }
    }
    return result
  
  }
  
  function levenshteinTwoMatrixRows(str1, str2) {
      const m = str1.length;
      const n = str2.length;
  
      // Initialize two arrays to represent the matrix rows
      let prevRow = new Array(n + 1).fill(0);
      let currRow = new Array(n + 1).fill(0);
  
      // Initialize the first row with consecutive numbers
      for (let j = 0; j <= n; j++) {
          prevRow[j] = j;
      }
  
      // Dynamic programming to fill the matrix
      for (let i = 1; i <= m; i++) {
          currRow[0] = i;
  
          for (let j = 1; j <= n; j++) {
              // Check if characters at the current positions are equal
              if (str1[i - 1] === str2[j - 1]) {
                  currRow[j] = prevRow[j - 1]; // No operation required
              } else {
                  // Choose the minimum of three possible operations (insert, remove, replace)
                  currRow[j] = 1 + Math.min(
                      currRow[j - 1], // Insert
                      prevRow[j],	 // Remove
                      prevRow[j - 1] // Replace
                  );
              }
          }
  
          // Update the previous row with the current row for the next iteration
          prevRow = [...currRow];
      }
  
      // The result is the value at the bottom-right corner of the matrix
      return currRow[n];
  }
