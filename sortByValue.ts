export function sortByValueAndIndex(array:number[]) : number[] {
    let i = 1
    let arrayWithProducts = array.map(num => {
      let result = [num,num *i]
      i++
      return result
    })
    arrayWithProducts.sort((a,b) => a[1] - b[1]) //sort according to the value of the product
    
    let resultArray = arrayWithProducts.map((element) => element[0])
    return resultArray;
  }
  
  //PREP
  
  //Parameters: an array of numbers
  
  //Return value: that same array but sorted
  
  //Example => 23, 2, 3, 4, 5 => 2, 3,4, 23, 5
  
  //Psuedocode: create another array, with the calulated products
  
  //then sort it
  
  //then create a new array, which uses the current value in the sorted array to lookup what original number it 
  //corresponds to, and put that in the result array
  
  //return the result array
console.log('Auto-update for sortByValue.ts');
console.log('Auto-update for sortByValue.ts');
console.log('Auto-update for sortByValue.ts');
console.log('Auto-update for sortByValue.ts');
console.log('Auto-update for sortByValue.ts');
console.log('Auto-update for sortByValue.ts');
console.log('Auto-update for sortByValue.ts');
console.log('Auto-update for sortByValue.ts');
console.log('Auto-update for sortByValue.ts');
console.log('Auto-update for sortByValue.ts');
