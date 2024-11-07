function stockList(books, categories) {
    if (books.length === 0) {
      return ''
    }
    
    //the results object will have keys that are each of the categorys, and values that are numbers
    let results = {}
    //for now we'll initialize them as 0, just so the object has the right shape
    for (let category of categories) {
      results[category] = 0
    }
    
    //iterate through each category in categories
    for (let category of categories) {
      //iterate through each book in books
      for (let book of books) {
        //if the first letter of the current book is the same as the current category,
        if (book[0] === category) {
          //add its key value pair to the results object
          results[category] += getNumPart(book)
        }
      }
    }
    //after this iteration is done, we can concatenate each key and value in the results object and return it
    let returnString = ''
    let tempArray = []
    for (let key in results) {
      tempArray.push(`(${key} : ${results[key]})`)
    }
    for (let i = 0; i < tempArray.length; i++) {
      if (i !== tempArray.length - 1) {
        returnString += `${tempArray[i]} - `
      } else {
        returnString += `${tempArray[i]}`
      }
    }
    return returnString
  }
  
  let getNumPart = (arg) => {
    let spaceFound = false
    let result = ''
    //iterate through the argument string
    for (let char of arg) {
      //check if a space has been encountered yet. If so, then start adding the values to a result
      if (spaceFound) {
        result += char
      }
      if (char === ' ') {
        spaceFound = true
      }
    }
  
    //return Number(result)
    return Number(result)
  }
  /*
  Parameters:
  
  books, an array of strings. Each string is a five-letter code, I think. The first
  letter in each string is a capitol letter, defining the category of the book
  
  categories, an array of capitol letters. Each letter is a category of book we will be searching for
  
  
  Return Value:
  A string, of the form '(A : 20) - (B : 114) - (C : 50) - (W : 0)'
  
  
  */
