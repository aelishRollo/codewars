function twosDifference(input){
    let result = []
    input = input.sort((a,b) => a - b)
    for (let num of input) {
      for (let num2 of input) {
        if (isDifferenceOfTwos(num,num2) && num < num2) {
          result.push([num,num2])
        }
      }
    }
    return result
  }
  
  
  let isDifferenceOfTwos = (a,b) => {
    if ((a - b === 2) || (b - a === 2)) {
      return true
    } else return false
  }
  
  //PREP
  
  //Parameters: [9,4,6,2,6] an array of numbers, no duplicates
  
  //Return an array of arrays of numbers, like [[1, 3], [2, 4]]
  
  //Example:[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
  
  //Psuedocode:
  
  //sort the input array so it's ascending
  
  //for each number of the input array, compare to each member of the input array to see if it's a
  //pair with difference of two.
  //Add all such pairs to the result
  //return the result
