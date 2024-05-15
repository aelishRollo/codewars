

//Solution to: https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
    let alphabet ='abcdefghijklmnopqrstuvwxyz'
    
    let result = alphabet
    
    let myArr = []  
    for (let letter of string) {
      if (alphabet.includes(letter.toLowerCase())) {
        myArr.push(letter.toLowerCase())
      }
    }
    
    for (let letter of myArr) {
      if (result.includes(letter)) {
        result = result.replace(letter,'')
      }
    }
    
    if (result) {
      return false
    } else return true
    
  }
  
  
  