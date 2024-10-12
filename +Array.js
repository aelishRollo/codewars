function upArray(arr) {
    // Check for invalid input: empty array, negative numbers, or numbers >= 10
    if (arr.length === 0) return null;
  
    for (let char of arr) {
      if (char >= 10 || char < 0) {
        return null;
      }
    }
  
    // Start adding 1 from the last digit
    let i = arr.length - 1;
    while (i >= 0) {
      if (arr[i] < 9) {
        arr[i]++;
        return arr;  // No carry needed, return the updated array
      }
      arr[i] = 0;  // Set current digit to 0 and carry over to the next digit
      i--;
    }
  
    // If the loop completes, that means we had a carry all the way through, so we need to add a 1 at the beginning
    arr.unshift(1);
    return arr;
  }
  
  /*
  Parameters: an array of numbers
  could contain nothing
  could contain negative integers
  could contain double-digit integers
  
  Return Value:
  if invalid, return null
  if all valid input, return the concatenated digits + 1
  
  Example:
  upArray([4,3,2,5]) => 4326
  */
