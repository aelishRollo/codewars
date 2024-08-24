function zero(operator = null) {
    return operator ? operator(0) : 0;
  }
  function one(operator = null) {
    return operator ? operator(1) : 1;
  }
  function two(operator = null) {
    return operator ? operator(2) : 2;
  }
  function three(operator = null) {
    return operator ? operator(3) : 3;
  }
  function four(operator = null) {
    return operator ? operator(4) : 4;
  }
  function five(operator = null) {
    return operator ? operator(5) : 5;
  }
  function six(operator = null) {
    return operator ? operator(6) : 6;
  }
  function seven(operator = null) {
    return operator ? operator(7) : 7;
  }
  function eight(operator = null) {
    return operator ? operator(8) : 8;
  }
  function nine(operator = null) {
    return operator ? operator(9) : 9;
  }
  
  function plus(b) {
    return function(a) {
      return a + b;
    };
  }
  function minus(b) {
    return function(a) {
      return a - b;
    };
  }
  function times(b) {
    return function(a) {
      return a * b;
    };
  }
  function dividedBy(b) {
    return function(a) {
      return Math.floor(a / b);
    };
  }
  /*
  
  
  
  
  
  
  
  */
