function oddOrEven(array) {
    if (array.length === 0) {
      return 'even'
    }
    let sum = array.reduce((accum,current) => accum + current)
    if (sum % 2 === 0) {
      return 'even'
    }
    else return 'odd'
  }
