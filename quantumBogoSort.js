//To anyone reading this: Just in case it wasn't clear that this is a joke, it is NEVER okay to destroy the universe

Array.prototype.qbsort = function() {
    this.qshuffle()   //use built in shuffle method
    let sortedArray = [...this].sort((a,b) => a - b) //sort the original array without mutating it
    let arraysAreEqual = true
    
    
    for (let i = 0; i < this.length; i++) {
      if (this[i] !== sortedArray[i]) {
        arraysAreEqual = false
      }
    }
    if (arraysAreEqual) {
      return this
    } else {
      QSC.destroyUniverse()   //If not shuffled, destroy universe
    }
    
  }
  
  /*
  Parameters: We have an array, which will either already be sorted or not be sorted
  
  Return Value: If the array is already sorted by ascending numerical value, return it
  otherwise, destroy the universe
  
  Examples: [1,2,3] returns itself, [3,2,4] destroys the universe
  
  Psuedocode:
  
  make a copy of the array, and sort it. If the two are equal, return array
  otherwise, destroy the universe
  
  */
