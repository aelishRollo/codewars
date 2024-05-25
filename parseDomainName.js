function domainName(url){
    let result = ''
    
    //remove prefixes
    url = url.replace('www.','') 
    url = url.replace('https://','') 
    url = url.replace('http://','')
    
    //remove everything after the .
    let periodHasBeenFound = false  
    for (let letter of url) {
      if (periodHasBeenFound === false && letter !== '.') {
        result += letter
      } else if (letter === '.') {
        periodHasBeenFound = true
      }
    }
    return result
  }
  
  
  //Parameters will be a domain name like 
    //"http://github.com/carbonfive/raygun" 
    // or "http://www.zombie-bites.com" 
    //as a string. Notice it can be http or https
  
  
  
  //Return a string, like 'cnet' or 'zombie-bites'
  
  
  //Examples: 
  
  // "http://github.com/carbonfive/raygun" => 'github'
  // "http://www.zombie-bites.com" => 'zombie-bites'
  
  
  //Psuedo-code: 
  
  // https://github.com/carbonfive/raygun'
  // remove everything before the //
  //remove everything after the .
