//solution to https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/javascript


function accum(s) {
    let result = '';
    
    for (let index = 0; index < s.length; index++) {
      let letter = s[index];
      result += appendResult(letter, index + 1);
      if (index < s.length - 1) {
        result += '-';
      }
    }
    
    return result;
  }
  
  function appendResult(str, num) {
    let result = str.toUpperCase();
    for (let i = 1; i < num; i++) {
      result += str.toLowerCase();
    }
    return result;
  }
