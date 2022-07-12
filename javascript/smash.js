function smash (words) {
    let result = ""
    console.log(words.length)
    for (let i = 0; i < words.length; i++) { //iterate through each member of input array. Append 
      result += words[i]                //The word, and a space as long as it's not the final word
      if (i != words.length - 1) {
        result += " "
      }
    }
    return result
  };