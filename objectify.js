String.prototype.hashify = function () {
    //create an object called result
    let result = {}
  
    //define helper function to do some heavy lifting
    //finds the appropriate value and adds the correct key/value pair to result
    let addValue = (i) => {
      let key = this[i - 1]
      let value = this[(i) % this.length ]
      //if the key is already in result, add an array
      if (result[key]) {
        //push to the array, or create it if it doesn't exist
        if (typeof result[key] === 'object') {
          result[key].push(value)
        } else if (typeof result[key] === 'string') {
          let arr = [result[key]]
          result[key] = arr
          result[key].push(value)
        }
      } 
      else {
          result[key] = this[(i) % this.length ]
        }
      
    }
  
    
    //iterate through the string
    //add each value to the object
    for (let i = 1; i < this.length + 1; i++) {
      addValue(i)
    }
  
    //return the object, result 
    return result
}

/*
Parameters:
A string, which we can access using the 'this' keyword

Return value:
An object, where each key's value is the next key in the string.
The last key will have the first key as its value
If a key appears multiple times, have its value be an array of each value that has that key

Example:
'abc'.hashify() => {'a':'b','b':'c','c':'a'}

Psuedocode:
create an object called result
iterate through the string
add each value to the object
return the object, result
*/
