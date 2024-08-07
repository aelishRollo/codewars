export class Kata {
    static highAndLow(numbers: string): string {
      let numbersAsNumArray = numbers.split(' ').map((num) => Number(num)) //convert to array of numbers
      let high = Math.max(...numbersAsNumArray)   //use spread operator for easy argument to Math.high()
      let low = Math.min(...numbersAsNumArray)
      return `${high} ${low}`
    }
  }
  
  
  //Paramters: a string, containing integers seperated by a space
  
  //Return value: highest and lowest number, in that order, like "highest lowest"
  
  //Example: highAndLow(" 0 1 2 33 4 5") returns "33 0"
  
  //psuedocode: convert string into an array of numbers
  //use the Math.max() and Math.min() to get high and low
  //Return them
