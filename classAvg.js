function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints)
    let totalClassPoints = classPoints.reduce((accum,current) => accum + current)
    let classAvg = totalClassPoints / classPoints.length
    
    return yourPoints > classAvg
  }
  /*
  Parameters:
  classPoints, an array of numbers
  yourPoints, a number
  
  Return Value:
  a boolean representing if your score was higher
  */
  