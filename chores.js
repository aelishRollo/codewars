function choreAssignment(chores) {
    //sort the array
    let sortedChores = chores.sort((a,b) => a - b)
    
    //split into first and second halves
    let firstHalf = sortedChores.slice(0,chores.length / 2)
    let secondHalf = sortedChores.slice(chores.length / 2, chores.length).reverse() //is reverse order
    
    //add them to result and return it
    let result = []
    for (let i = 0; i < firstHalf.length; i++) {
      let currentNum = firstHalf[i] + secondHalf[i]
      result.push(currentNum)
    }
    return result.sort((a,b) => a - b) //sort the array
  }
  
  /*
  Parameters:
  an array of ints, whose length is always even
  
  Return:
  An array of half the length, where the largest sum of two numbers in minimized. In ascending order
  
  
  
  */
