function count(string) {
  
    if (string === {}) {
      return {}
    }
    
    let result = {}
    //split the string into an array of letters
    let letters = string.split('')
    //for each letter of the string, upsert a property into the object which corresponds to that string
    for (let letter of letters) {
      if (result[letter]) {
        result[letter] = result[letter] + 1
      } else {
        result[letter] = 1
      }
    }
    //return the object
    return result;
  }
  
  