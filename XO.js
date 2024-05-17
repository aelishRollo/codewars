// solution to https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

function XO(str) {
    let X = 0
    let O = 0
    for (let letter of str.toLowerCase()) {
      if (letter === 'x') {
        X++
      } else if (letter === 'o') {
        O++
      }
    }
  if (X === O) {
    return true
  } else return false
    
}
