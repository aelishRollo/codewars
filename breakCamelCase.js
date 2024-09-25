function solution(string) {
    let wordsArray = [];
    let currentWord = '';
  
    for (let letter of string) {
      if (letter === letter.toLowerCase()) {
        currentWord += letter;
      } else if (letter === letter.toUpperCase()) {
        if (currentWord) {
          wordsArray.push(currentWord);
        }
        currentWord = letter;
      }
    }
  
    if (currentWord) {
      wordsArray.push(currentWord);
    }
  
    return wordsArray.join(' ');
  }
  
  /*
  Parameters: a string, which I assume will be some number of words in camel case, and at least will be empty
  
  Return Value: a string, where the camel case is broken up
  
  Example: 'skyrimNord' => 'skyrim Nord'
  
  Psuedocode:
  if the string is empty, return ''
  iterate through the letters
  if the letter is lowercase, add it to a string
  if the letter is uppercase, add that string to a words array
  after the loop, return wordsArray.join(' ')
  
  */
