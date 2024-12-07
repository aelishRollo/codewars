function solution(list){
    let result = []
    
    //scan through list
    let currentRange = []
    for (let i = 0; i < list.length; i++) {
      
      //if next number is same as current number + 1
      if (list[i + 1] === list[i] + 1) {
        // add current number to currentRange
        currentRange.push(String(list[i]))
      } 
      
      //if next number is NOT same as current number + 1, and currentRange.length is more than one
      else if (currentRange.length > 1) {
        //add currentRange to result
        currentRange.push(String(list[i]))
        result.push(`${currentRange[0]}-${currentRange.at(-1)}`)
        currentRange = []
      }
      
      else if (currentRange.length === 1) {
        result.push(`${currentRange[0]}`)
        result.push(`${list[i]}`)
        currentRange = []
      }
      
    //else add current number to result
      else {
        result.push(list[i])
      }
    }
    
    //return result, and join with a ','
    return result.join(',')
  }
