// Returns number of complete beeramid levels
let beeramid = function(bonus, price) {
    if (bonus <= 0) {
      return 0
    }
    let count = 0
    let currentCans = 0
    let currentPrice = 0
    for (let i = 1; i < bonus; i++) {
    //keep track of current amount of cans in complete pyramid stack
      currentCans = i * i
      currentPrice = currentCans * price
      //subtract current amount of cans in pyramid stack times their price from the bonus
      //if this number is equal or less than zero, return count
      if (bonus - currentPrice < 0) {
        return count
      } else {
        bonus = bonus - currentPrice
        count++
      }
    }
    return count
  }
