function expandedForm(num) {
    num = String(num)
    let strArray = []
    for (let i = 0; i < num.length; i++) {
      let currentPowerOfTen = `${num[i]}`
      let valueToAdd = currentPowerOfTen.padEnd(num.length - i,'0')
      strArray.push(valueToAdd)
    }
    
    
    strArray = strArray.filter(num => num !== '0'.repeat(num.length)); //this part was conceptually easy
                                                                        //but syntactically challenging
    
    let result = ''
    for (let digit of strArray) {
      result += ''
      result += digit
      if (digit !== strArray.at(-1)) {
        result += ' + '
      }
    }
    return result
  }
  
  
  /*
  Parameters: 
  The parameter is going to be a positive integer, doesn't seem like there's an upper bound but
  at this level I'd expect them to specify if it was going to be a BigInt or something
  
  Return Value:
  A string, which describes the number with each power of 10 being seperated, with plus signs between each number
  
  Example:
  expandedForm(4201337) => '4000000 + 200000 + 1000 + 300 + 30 + 4'
  
  Psuedocode:
  Instead of worrying about calculations, it's probably easiest to just use the length of the number as a string
  as an approach to navigating this.
  
  So I'm thinking:
  convert the number to a string
  iterate through the digits
  for each digit, create a variable which starts with that digit, and is padded with zeroes to be the length of
  the substring starting at that index (so we'll have to use an index instead of let digit of nums). We'll store
  these variables in an array
  we'll create a new array from these, not adding any that are all zero
  then we concatenate these numbers as strings, with numbers in between, and return that
  
  How do I want to remove all the zeroes from this array?
  I think using a filter, which reassigns all the elements of strArray, filtering anything that's just xeroes
  
  
  
  */
