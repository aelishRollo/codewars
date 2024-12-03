function automorphic(n){
    //square n, and convert it to a string
    //check if it endsWith() String(n)
    if (String(n * n).endsWith(String(n))) {
      return 'Automorphic'
    } else {
      return 'Not!!'
    }
  }
