export function findNextSquare(sq:number):number {
    if (isPerfectSquare(sq)) {
      return getNextSquare(sq)
    } else return -1
  }
  
  let isPerfectSquare = (num:number): boolean => {
    if (Number.isInteger(Math.sqrt(num))) {
      return true
    } else {
      return false
    }
    
    
  }
  
  let getNextSquare = (num:number): number => {
    let squareRoot = Math.sqrt(num)
    let nextNum = squareRoot + 1
    return nextNum * nextNum
  }
  
  //To figure out if a num is a square:
  
  // take the sqrt, if it's got any decimals it's not 
