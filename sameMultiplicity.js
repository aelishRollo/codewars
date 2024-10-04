function comp(array1, array2){
    //check for null or empty array conditions first
    if (array1 === null || array2 === null) {
      return false;
    }
  
    if (array1.length !== array2.length) {
      return false;
    }
  
    // Square each element in array1
    const squaredArray1 = array1.map(num => num * num);
  
    // Sort both squaredArray1 and array2
    squaredArray1.sort((a, b) => a - b);
    array2.sort((a, b) => a - b);
  
    // Compare both arrays element by element
    for (let i = 0; i < squaredArray1.length; i++) {
      if (squaredArray1[i] !== array2[i]) {
        return false;
      }
    }
  
    // If all elements match, return true
    return true;
  }
  
  
  /*
  Parameters:
  two arrays of numbers, so I guess we don't need to check for a member being the wrong type
  we do have to check for an empty array though
  we also have to check for the array being null
  
  Return Value:
  a boolean, representing whether or not every member of array2 is a square of a member of array1
  
  Example:
  a = [121, 144, 19, 161, 19, 144, 19, 11]  
  b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  comp(a,b) returns false because nothing in a squares to 132
  
  
  */
