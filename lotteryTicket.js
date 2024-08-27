function bingo(ticket, win){
    let miniWins = 0
    for (subArray of ticket) {
      if (isWinner(subArray,win)) {
        miniWins++
      }
    }
    if (miniWins < win) {
      return 'Loser!'
    } else return 'Winner!'
  }
  
  let isWinner = (subArray,win) => {
    let result = false
    let letters = subArray[0].split('')
    let charCodes = letters.map((letter) => {
      return letter.charCodeAt(0)
    })
   
    for (let code of charCodes) {
      if (code === subArray[1]) {
        result = true
      }
    }
    return result
  }
  
  /*
  Parameters:
  An array of arrays, representing the lottery ticket. I think it always contains 3, and they'll always
  contain two values, a string and a number
  
  
  Return Value:
  A string, either 'Winner!' or 'Loser!'
  
  
  Example: 
  bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2) => 'Loser!'
  
  
  Psuedocode:
  let miniWins = 0
  for (subArray of ticket ) {
    if (isWinner(subArray)) {
      miniWins++
    }
  }
  if (miniWins <== win) {
    return 'Winner!'
  } else return 'Loser!'
  
  
  
  
  
  
  
  */
