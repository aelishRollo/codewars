function formatWords(words){
    if (words === null) {
      return ''
    }
    if (words.length === 0) {
      return ''
    }
    
    let wordsWithoutSpaces = []
    let result = ''
    for (let i = 0; i < words.length; i++) {
      let word = words[i]
      if (word.length !== 0) {
        wordsWithoutSpaces.push(word)
      }
    }
     if (wordsWithoutSpaces.length === 0) {
      return ''
    }
    if (wordsWithoutSpaces.length === 1) {
      return wordsWithoutSpaces[0]
    }
    for (let i = 0; i < wordsWithoutSpaces.length - 2; i++) {
      result += wordsWithoutSpaces[i]
      result += ', '
    }
    result += `${wordsWithoutSpaces[wordsWithoutSpaces.length - 2]} and `
    result += `${wordsWithoutSpaces[wordsWithoutSpaces.length - 1]}`
    
    return result
  }
