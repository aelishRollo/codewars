function verifyLatinSquare(array, m) {
    let result = `Valid latin square of size ${array.length}`;
    
    // Check for squareness
    for (let row of array) {
      if (row.length !== array.length) {
        return `Array not square`; // Return immediately if not square
      } 
    }
  
    // Check if array size matches m
    if (array.length !== m) {
      return 'Array is wrong size'; // Return immediately if wrong size
    }
  
    // Check for duplicates in rows and values outside 1 to m
    for (let i = 0; i < m; i++) {
      let numbersInRow = [];
      for (let j = 0; j < m; j++) {
        let num = array[i][j];
  
        // Check if value is outside of range 1 to m
        if (num < 1 || num > m) {
          return `${num} at ${i + 1},${j + 1} is not between 1 and ${m}`;
        }
  
        // Check for duplicate in row
        if (numbersInRow.includes(num)) {
          return `${num} occurs more than once in row ${i + 1}`;
        } else {
          numbersInRow.push(num);
        }
      }
    }
  
    // Check for duplicates in columns
    for (let j = 0; j < m; j++) {
      let numbersInColumn = [];
      for (let i = 0; i < m; i++) {
        let num = array[i][j];
  
        // Check for duplicate in column
        if (numbersInColumn.includes(num)) {
          return `${num} occurs more than once in column ${j + 1}`;
        } else {
          numbersInColumn.push(num);
        }
      }
    }
  
    return result; // Return the result after all checks
  }
  