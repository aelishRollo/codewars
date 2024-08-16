function code(strng) {
    let encodedResult = ''
    let stringArray = strng.split('')
    for (let num of stringArray) {
      encodedResult += conversionTable[num]
    }
  return encodedResult
}

function decode(str) {
  let decodedResult = '';
  let tempStr = '';

  for (let char of str) {
    tempStr += char;

    // Check if tempStr matches any value in the conversion table
    for (let [key, value] of Object.entries(conversionTable)) {
      if (tempStr === value) {
        decodedResult += key;
        tempStr = ''; // Reset tempStr after a successful match
        break; // Exit the loop once a match is found
      }
    }
  }

  return decodedResult;
}


let conversionTable = {
  '0': '10',
  '1': '11',
  '2': '0110',
  '3': '0111',
  '4': '001100',
  '5': '001101',
  '6': '001110',
  '7': '001111',
  '8': '00011000',
  '9': '00011001'
};



//psuedocode

/* 
Turn input string into an array of numbers
encode each number
convert each num to string
concactenate them and return

*/
