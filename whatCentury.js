function whatCentury(year) {
    // Extract the first two digits to determine the century
    let century = Math.ceil(Number(year) / 100);
  
    // Pass the century to addSuffix to get the correct format
    return addSuffix(century);
  }
  
  let addSuffix = (century) => {
    let centuryStr = String(century);
    let suffix = '';
  
    // Handle special cases for 11th, 12th, 13th
    if (centuryStr.endsWith('11') || centuryStr.endsWith('12') || centuryStr.endsWith('13')) {
      suffix = 'th';
    } else {
      // Determine suffix based on the last digit
      switch (centuryStr[centuryStr.length - 1]) {
        case '1':
          suffix = 'st';
          break;
        case '2':
          suffix = 'nd';
          break;
        case '3':
          suffix = 'rd';
          break;
        default:
          suffix = 'th';
      }
    }
  
    return centuryStr + suffix;
  }
  /*
  Parameters: a 4 digit string representing the year, inputs will always be acceptable
  
  Return Value: a string, indicating the century
  
  Examples:
  
  "1999" --> "20th"
  "2011" --> "21st"
  "2154" --> "22nd"
  "2259" --> "23rd"
  "1124" --> "12th"
  "2000" --> "20th"
  
  Psuedocode:
  get the first two digits of the number, then convert these chars to a number
  add one to get the appropriate century
  pass this to addSuffix()
  return
  
  */
