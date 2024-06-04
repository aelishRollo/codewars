export function binaryArrayToNumber(arr: number[]): number{
    console.log(arr)
    let reversedArray = arr.reverse()
    let result = 0
    let multiplier = 1
    reversedArray.reduce((accum, currentVal) => {
      console.log(`accum is ${accum}`) 
      accum += currentVal * multiplier
      multiplier *= 2
      result = accum
      return accum
    },result)
   
    return result
  };
