// Return the output array, and ignore all non-op characters
function parse(data) {
    let currentValue = 0
    let result = []
    for (let letter of data) {
      if (letter === 'i') {
        currentValue++
      } else if (letter === 'd') {
        currentValue--
      } else if (letter === 's') {
        currentValue = currentValue * currentValue
      } else if (letter === 'o') {
        result = [...result,currentValue]
      }
    }
    return result
  }
  
  
  