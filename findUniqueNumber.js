function findUniq(arr) {
    let result;
  
    // Check if the first element is the unique one
    if (arr[0] !== arr[1] && arr[0] !== arr[2]) {
      return arr[0];
    }
  
    // If not, iterate through the array to find the unique element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== arr[0]) {
        result = arr[i];
        break;
      }
    }
  
    return result;
  }
  
  /*
  
  Parameters: An array of at least 3 numbers, some of which will be so huge that performance is a concern
  
  Return Value: Return the unique element in the array
  
  Example: findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
  
  Psuedocode: make the result the first number, then do arr.forEach() where if the current number is not
  the same as number, we add its value to result
  
  
  
  
  
  */
  