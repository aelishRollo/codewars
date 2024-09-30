decodeMorse = function(morseCode){
    let result = '';
    let currentLetter = '';
    let i = 0;
    morseCode = morseCode.trim();
  
    while (i < morseCode.length) {
      if (morseCode[i] !== ' ') {
        // Build up the current Morse code letter
        currentLetter += morseCode[i];
        i++;
        // If we're at the end, decode the last letter
        if (i === morseCode.length && currentLetter !== '') {
          result += MORSE_CODE[currentLetter];
        }
      } else {
        // We've hit a space, time to decode the current letter
        if (currentLetter !== '') {
          result += MORSE_CODE[currentLetter];
          currentLetter = '';
        }
        // Check if it's the end of a word (three spaces)
        if (morseCode[i + 1] === ' ' && morseCode[i + 2] === ' ') {
          result += ' '; // Add space to separate words
          i += 3;        // Skip the three spaces
        } else {
          i++; // Skip the single space
        }
      }
    }
  
    return result;
  }
  