export function toCsvText(array: number[][]): string {
    return array.map(arr => arr.join(',')).join('\n');
  }
  
  
  //Parameters: an array of arrays of numbers
  
  //Return value: a string
  
  // Exmaple: 
  
  // input:
  //    [[ 0, 1, 2, 3, 4 ],
  //     [ 10,11,12,13,14 ],
  //     [ 20,21,22,23,24 ],
  //     [ 30,31,32,33,34 ]] 
      
  // output:
  //      '0,1,2,3,4\n'
  //     +'10,11,12,13,14\n'
  //     +'20,21,22,23,24\n'
  //     +'30,31,32,33,34'
  
  //Psuedocode:
  
  //for each array, 
  //add each value to result string,separated by a comma, and if it's the last one of the array then 
  //concatenate /n unless it's the last array
