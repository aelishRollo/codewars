
function maskify(cc) {
    //if the string is of length 4 or less, just return it
    if (cc.length <= 4) {
      return cc
    } else {  
      //otherwise, make all the digits except the last 4 be #
      let firstPart = fillWithBang(cc)
      let secondPart = getLast4Chars(cc)
      return firstPart + secondPart
    }
    
    
  }
  
  let getLast4Chars = (str) => {
    return str.at(-4) + str.at(-3) + str.at(-2) + str.at(-1) 
  }
  
  let fillWithBang = (str) => {
    let result = ''
    for (let i = 0; i < str.length - 4; i++) {
      result+= '#'
    }
    return result
  }
  
  /*
  Parameters:
  cc, a string of arbitrary length
  
  Return Value:
  the same string, but if the length is longer than 4, then all but the last 4 digits are replaced with '#'
  
  Example:
  'slinky' => '##inky'
  
  '1234567890' => '#######890'
  */
  