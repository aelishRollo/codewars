function descendingOrder(n){
    //break the number into an array of digits
    //sort the digits
    //join them
    //return 
    return Number(String(n).split('').sort((a,b) => b - a).join(''))
  }
  /*
  Parameters:
  a number
  
  Return Value:
  the same number, but with its digits sorted into descending order
  
  Example: 15234 => 54321
  */
