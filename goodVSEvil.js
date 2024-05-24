function goodVsEvil(good, evil){
    let result = ''
    let goodAsAStringArray = good.split(' ')
    let evilAsAStringArray = evil.split(' ')
    
    let parseGood = (good) => {
      let totalWorthGood = 0
      totalWorthGood += Number(good[0])
      totalWorthGood += Number(good[1]) * 2
      totalWorthGood += Number(good[2]) * 3
      totalWorthGood += Number(good[3]) * 3
      totalWorthGood += Number(good[4]) * 4
      totalWorthGood += Number(good[5]) * 10
      return totalWorthGood
    }
    
    
    let parseEvil = (evil) => {
      let totalWorthEvil = 0
      totalWorthEvil += Number(evil[0])
      totalWorthEvil += Number(evil[1]) * 2
      totalWorthEvil += Number(evil[2]) * 2
      totalWorthEvil += Number(evil[3]) * 2
      totalWorthEvil += Number(evil[4]) * 3
      totalWorthEvil += Number(evil[5]) * 5
      totalWorthEvil += Number(evil[6]) * 10
      return totalWorthEvil
    }
    
    let totalGood = parseGood(goodAsAStringArray)
    let totalEvil = parseEvil(evilAsAStringArray)
    
    if (totalEvil > totalGood) {
      result = 'Battle Result: Evil eradicates all trace of Good'
    } else if (totalEvil < totalGood) {
      result = 'Battle Result: Good triumphs over Evil'
    } else {
      result = 'Battle Result: No victor on this battle field'
    }
    return result
  }
  
  
  //PREP
  
  //P: [1,2,3,4,5,6], [1,2,3,4,5,6,7]
  
  //R: Return a string saying which side won
  
  //E: goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good');
  
  //P: two functions, one to parse the good array, and one to parse the evil array
  //Compare the two parsed arrays, and based on that, return the correct string
  
  
  