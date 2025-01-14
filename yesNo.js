function yesNo(arr) {
    let result = []
    let currentIndex = 0
    let take = true // Flag to alternate between taking and skipping
    
    while (arr.length > 0) {
      if (take) {
        result.push(arr[currentIndex])
        arr.splice(currentIndex, 1)
      } else {
        currentIndex++
      }
      
      take = !take
      
      if (currentIndex >= arr.length) {
        currentIndex = 0
      }
    }
    
    return result
  }
  