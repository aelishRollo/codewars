export function divCon(x: (`${number}` | number | string)[]): number {
    let stringSum:number = 0
    let numSum:number = 0
    for (let currentElement of x) {
      if (typeof currentElement === 'number') {
        numSum += currentElement
      } else if (typeof currentElement === 'string') {
        stringSum += Number(currentElement)
      }
    }
    return numSum - stringSum
  }
  
  //PREP
  
  //Parameters: an array of both string and number typed integers
  
  //Return value: a number, which is the the numbers - the sum of the string thingies
  
  //Example: [9, 3, '7', '3'] => (9 + 3 - 7 - 3) = 2
  
  //Pesuedocode:
  
  //Iterate through the numbers. 
  //If currentNum is a string, add Number(currentNum) to stringNumSum,
  //If currentNum is a number, add it to numberSum
  //Return numberSum - stringNumSum
