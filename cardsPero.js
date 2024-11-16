function cardsAndPero(s) {
    //split the string into an array into cards (every 3 chars)
    let cardArray = s.match(/.{1,3}/g)
    //if a duplicate card is found, return [-1,-1,-1,-1]
    if (containsDuplicates(cardArray)) {
      return [-1,-1,-1,-1]
    }
    //create a cards object to store the amount of cards in each suite
    let cards = {
      'p': 0,
      'k': 0,
      'h': 0,
      't': 0
    };
    //
    for (let card of cardArray) {
      if (card[0] === 'P') {
        cards['p'] += 1
      } else if (card[0] === 'H') {
        cards['h'] += 1
      } else if (card[0] === 'K') {
        cards['k'] += 1
      } else if (card[0] === 'T') {
        cards['t'] += 1
      }
    }
    //subtract the amount of each card from the array [13,13,13,13]
    //return this array
    return [13 - cards['p'],13 - cards['k'],13 - cards['h'],13 - cards['t']]
  }
  
  let containsDuplicates = (cards) => {
    let cardStore = []
    for (let card of cards) {
      if (cardStore.includes(card)) {
        return true
      } else {
        cardStore.push(card)
      }
    }
    return false
  }
  /*
  Parameters: 
  s, a string representing a list of cards
  
  Return Value:
  an array, listing how many cards are missing from a full deck of cards
  Order of suites is [p,k,h,t]
  */
