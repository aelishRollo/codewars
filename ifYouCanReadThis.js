function toNato(words) {
   
    let letterArray = words.split('');

    // Map over each character, converting to NATO equivalent or keeping punctuation
    let convertedText = letterArray.map((letter) => {
        if (letter !== ' ') { // Ignore spaces
            if (NATO.hasOwnProperty(letter.toUpperCase())) {
                return NATO[letter.toUpperCase()]; 
            } else {
                return letter; // Keep punctuation as is
            }
        }
        return null; // Spaces will be removed
    }).filter(Boolean); // Filter out nulls (which were spaces)

   
    return convertedText.join(' ');
}


/*

Parameters:
A string, including uppercase and lowercase letters


Return Value: That text where every letter is converted into the NATO alphabet


Example: 'If, you can read?' => India Foxtrot , Yankee 
Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?


Psuedocode:

go through each letter of the input
convert that into the corresponding NATO word
put all those together







*/
