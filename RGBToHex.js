function rgb(r, g, b) {
    if (r < 0) {      //make sure r,g,b are in the valid range
      r = 0
    } else if (r > 255) {
      r = 255
    }
    if (g < 0) {
      g = 0
    } else if (g > 255) {
      g = 255
    }
    if (b < 0) {
      b = 0
    } else if (b > 255) {
      b = 255
    }
    
    r = r.toString(16).toUpperCase().padStart(2,'0')
    g = g.toString(16).toUpperCase().padStart(2,'0')
    b = b.toString(16).toUpperCase().padStart(2,'0')
  
    return r + g + b
  
    
}

/*Psuedocode:
If the number is smaller than 0, make it 0
If the number is larger than 255, make it 255

Convert each number to its hex value, pad it to be of length 2
return


*/
