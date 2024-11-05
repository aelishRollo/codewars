//return the total number of smiling faces in the array
function countSmileys(arr) {
    let count = 0
    //iterate through the array, checking each smiley
    for (let element of arr) {
      //if the current string contains eyes, ':' or ';', AND a mouth, ')' or 'D',
      //then it is a valid smiley and we increment count
      if (hasValidEyes(element) && hasValidMouth(element) && hasValidChars(element) && 
        !hasRepeatChars(element) && hasCorrectLength(element)
         ){
        count++
      }
    }
    //at the end we return count
    return count;
  }
  
  let hasValidEyes = (str) => str.includes(':') || str.includes(';')
  
  let hasValidMouth = (str) => str.includes('D') || str.includes(')')
  
  let hasValidChars = (str) => {
    //if every element is a member of [':',')','D',';','~','-'], then return true
      let strArr = str.split('')
      return strArr.every((member) => [':',')','D',';','~','-'].includes(member))
  }
  
  let hasRepeatChars = (str) => {
    let result = false
    let letterStore = []
    for (let letter of str) {
      if (letterStore.includes(letter)) {
        result = true
      }
      letterStore.push(letter)
    }
    return result
  }
  
  let hasCorrectLength = (str) => str.length === 2 || str.length === 3 
  
  /* 
  Parameters:
  arr, an array of strings, each one representing a smiley face
  
  Return Value:
  an integer number, representing how many smiley faces are found in the argument array
  
  Example:
  countSmileys([]                             ) => 0);
  countSmileys([':D',':~)',';~D',':)']        ) => 4);
  countSmileys([':)',':(',':D',':O',':;']     ) => 2);
  countSmileys([';]', ':[', ';*', ':$', ';-D']) => 1);
  
  Okay, so there's an error where invalid noses are being accepted as valid noses. Valid noses are either
  */
