function addLength(str) {
    let result = str.split(' ')
    result = result.map((word) => word + ` ${word.length}`)
    return result
  }
  