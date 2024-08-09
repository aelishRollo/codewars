function getSum(a, b) {
    let result = 0;
    let high = 0;
    let low = 0;
    
    if (a > b) {
      high = a;
      low = b;
    } else {
      low = a;
      high = b;
    }
    
    console.log(`a, b are ${a} and ${b}`);
    
    for (let i = low; i <= high; i++) {
      result += i;
    }
    
    return result;
  }
  
  
  //Parameters: two integers, essentially representing an inclusive range
  
  //Return value: the sum of all integers from one to the other, inclusive
  
  //Example: getSum(-1,3) => -1 + 0 + 1 + 2 + 3 = 5
  
  //Psuedocode:
  
  //sort them so you have high and low values
  
  //use a loop to sum up all the integers
