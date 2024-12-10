function deleteNth(arr,n){
    //make an object to keep track of occurences of each num
    let occurences = {}
    let result = []
    //iterate through arr, keeping track of occurences of each char
    for (let i = 0; i < arr.length; i++) {
      //increment occurences[i] by 1
      occurences[arr[i]] = occurences[arr[i]] + 1 || 1 
      //if the amount of instances of the char is less than n, add the current char to the result array
      if (occurences[arr[i]] <= n) {
        result.push(arr[i])
      }
    }
    return result
  }
    