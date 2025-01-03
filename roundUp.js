function roundToNext5(n){
    let keepGoing = true
    while (keepGoing) {
      if (n % 5 === 0) {
        keepGoing = false
      } else {
        n++
      }
    }
    return n
  }
