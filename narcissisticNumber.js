function isNarcissistic() {
  
    let isNarcissisticNum = (num) => {
       let digits = String(num).split('')
       let power = digits.length
       let sum = 0
       //calculate sum of digits
       for (let i = 0; i < digits.length; i++) {
           sum += Math.pow(digits[i],power)
       } 
       
       if (sum === num) {
         return true
       } else {
         return false
       }
     }
     
     //check for empty string input
     if (arguments[0] === '') {
       return false
     }
   
   
     let nums = []
     
     //populate nums using the arguments list, converting each element to a number
     for (let i = 0; i < arguments.length; i++) {
       let argumentAsNum = Number(arguments[i])
       nums.push(argumentAsNum)
     }
     //check for invalid inputs
     if (nums.includes(NaN)) {
       return false
     }
     return nums.every((num) => isNarcissisticNum(num))
   }
   
   /*
   Parameters:
   any amount of numbers, some may be typed as strings
   
   Return Value:
   a boolean representing if every number in the input is narcissistic
   and also if the input is valid
   */
