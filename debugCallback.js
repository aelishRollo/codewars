function createFunctions(n) {
    var callbacks = [];
  
    for (let i = 0; i < n; i++) {
      let currentFunction = () => i
      callbacks.push(currentFunction)
    }
    
    return callbacks;
  }
