function diff(a, b) {
    let resultWithDuplicates = [];
    let result = [];
  
    // Check characters in `a` that are not in `b`
    for (let letter of a) {
      if (!b.includes(letter)) {
        resultWithDuplicates.push(letter);
      }
    }
  
    // Check characters in `b` that are not in `a`
    for (let letter of b) {
      if (!a.includes(letter)) {
        resultWithDuplicates.push(letter);
      }
    }
  
    // Remove duplicates
    for (let letter of resultWithDuplicates) {
      if (!result.includes(letter)) {
        result.push(letter);
      }
    }
  
    return result.sort();
  }
