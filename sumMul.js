function sumMul(n,m) {
  if (n <= 0 || m <= 0) {
    return "INVALID"
  }
  //initialize result to be 0
  let result = 0
  //start an index at 1, and increment up to m
  for (let i = 1; i < m; i++) {
    //for each number along the way, check if it's divisible by n
    if (i % n === 0) { 
    //if it is, add it to result
      result += i
    }
  }
  //return result
  return result
}


/*
Parameters:
n and m are both positive integers

Return Value:
An integer which is the sum of all multiples of n below (not equal to I believe) m

Examples: 
sumMul(2,9) => 2 + 4 + 6 + 8 === 20
sumMul(3,12) => 3 + 6 + 9 === 18
*/
