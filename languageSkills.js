function myLanguages(results) {
  
    let arrayOfScores = Object.values(results)
    arrayOfScores.sort((a,b) => b - a)
    let sortedScoresOver60 = arrayOfScores.filter(num => num >= 60)
    let result = []
    for (let num of sortedScoresOver60) {
      for (let key in results) {
        if (results[key] === num) {
          result.push(key);
          break; 
        }
      }
    }
    return result
    }
  
  
  //Parameters: an object, where each field associates a string with a number (this 
  //being the language and your score in it)
  
  //Return value: An array of languages where your score is above or equal to 60, as strings, highest first
  
  //Example: {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
  
  //Psuedocode:
  
  //set up a while loop to continuously find the highest scored language
  //if the score is >= 60, add its name to the result array
  //if the score is below 60, or there is no member left to add, break the loop
  //return the result array
    
    
  //What ended up happening is I found the Object.values() method and decided to use that
