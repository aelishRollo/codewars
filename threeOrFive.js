function solution(number){
    if (number <= 0) {
      return 0
    }
    let multiples = []
    for (let i = 0; i < number; i++) {
      if (i % 3 === 0) {
        multiples.push(i)
      } else if (i % 5 === 0) {
        multiples.push(i)
      }
    }
    return multiples.reduce((accum,current) => accum + current)
  }
  
  /*
  Parameters: a positive integer
  
  Return Value: The sum of all the multiples of 3 or 5 up to that number
  
  Example: number === 16
  Multiples: 3, 5, 6, 9, 10, 12, 15 so return the sum which is 38
  
  Psuedocode:
  if number is negative, return 0
  iterate up to the number
  if the current num is a multiple of 3, add it to the multiples array
  else if it is a multiple of 5, add it to the multiples array
  return the sum of each number in the array
  
  
  */
