function makeParts(arr, chunkSize) {
    let result = []
    for (let i = 0; i < arr.length; i = i + chunkSize) {
      let toPush = []
      for (let j = i; j < i + chunkSize && j < arr.length; j++) {
        toPush.push(arr[j])
      }
      result.push(toPush)
    }
    return result
  }
  