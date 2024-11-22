function removeEveryOther(arr){
    let result = []
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i])
      i++
    }
    return result
  }
