function foldArray(array, runs) {
    let result = array
    for (let i = 0; i < runs; i++) {
      result = fold(result)
    }
    return result
  }
  
  let fold = (array) => {
    let returnArray = []
    if (array.length % 2 === 0) {
      for (let i = 0; i < array.length / 2; i++) {
        returnArray.push(array[i] + array.at(-i - 1))
      }
    } else {
      for (let i = 0; i < array.length / 2 - 0.5; i++) {
        returnArray.push(array[i] + array.at(-i - 1))
      }
      returnArray.push(array[array.length / 2 - 0.5])
    }
    return returnArray
  }
  