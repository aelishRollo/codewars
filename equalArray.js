function findEvenIndex(arr) {
    let sumBefore = 0; 
    let sumAfter = arr.slice(1).reduce((a, b) => a + b, 0); 
  
    if (sumBefore === sumAfter) {
      return 0; 
    }
  
    for (let i = 1; i < arr.length; i++) {
      sumBefore += arr[i - 1]; 
      sumAfter -= arr[i]; 
  
      if (sumBefore === sumAfter) {
        return i; 
      }
    }
  
    return -1; 
  }
  