export const josephus = <T>(items: T[], k: number): T[] => {
    console.log(items)
    let result: T[] = []
    let keepGoing = true
    let i = 0
    while (keepGoing) {
      if (items.length === 0) {
        keepGoing = false;
        break;
      }
      let indexToRemove = (i + k - 1) % items.length;
      let itemToRemove = items.splice(indexToRemove, 1)[0];
      result.push(itemToRemove);
      i = indexToRemove; 
    }
    return result;
  };
  
  
  
  
  //PREP
  
  //Parameters:
  //Items, an array of something and K, a number
  
  //Return value: an array of whatever type
  
  //Example: 
  /* 
  [1,2,3,4,5,6,7] - initial sequence
  [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
  [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
  [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
  [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
  [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
  [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
  [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]
  */ 
  
  //Psuedocode:
  
  //k-1 is how much to move, assuming you begin on the first item
  
  //when an item is removed, the pointer to current item should be decremented by 1
  
  //
  