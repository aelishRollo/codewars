export function hexStringToRGB(hexString: string): { r: number, g: number, b: number } {
    let arrayOfDigits: string[] = []
  
    for (let i = 1; i < hexString.length; i += 2) {
      arrayOfDigits.push(hexString.substring(i,i+2))
    }
    
    let arrayOfBaseTenDigits = arrayOfDigits.map((element) => {
      return parseInt(element,16)
    })
  
    return { r: arrayOfBaseTenDigits[0], g: arrayOfBaseTenDigits[1], b: arrayOfBaseTenDigits[2] };
  }
  
  
  //PREP
  
  //Parameters: hexString, a string
  
  //Return value: 3 numbers, r,g,and b
  
  //Example: #FF9933 => [FF,99,33] => [255,99,51]
  
  //Psuedocode:
  
  //1. split each two digits into an array
  
  //2. convert each two digits of array to base 10
  
  //3. return each of the base 10 digits
