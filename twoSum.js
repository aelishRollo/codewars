function twoSum(numbers, target) {
    //use a nested loop
    //i will be the outer index, and j will be the inner index
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0 ; j < numbers.length; j++) {
        //if numbers[i] + numbers[j] === target, return [i,j]
        if (numbers[i] + numbers[j] === target && i !== j) {
          return [i,j]
        }
      }
    }
  }
  /*
  Parameters:
  an array of numbers, and a target number
  
  Return Value:
  an array containing the indices of two numbers which sum to that number
  
  Example:
  twoSum([1, 2, 3], 4) => [0,2]
  twoSum([3, 2, 4], 6) => [1,2]
  */
