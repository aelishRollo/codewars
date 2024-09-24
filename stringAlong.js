function createMessage(argument) {
    let array = []; 
  
    function messageChain(arg) {
      if (arg) {
        array.push(arg); 
        return messageChain; 
      } else {
        return array.join(' '); 
      }
    }
  
    return messageChain(argument); 
  }
  