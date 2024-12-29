class Name {
    constructor(first, last) {
      this._first = first;
      this._last = last;
      this._fullName = first + ' ' + last
    }
    
    
    set firstName(s) {
      this._first = s
    }
    
    set lastName(s) {
      this._last = s
    }
    
    
    get firstName() {
      return this._first
    }
    
    get lastName() {
      return this._last
    }
    
    set fullName(s) {
      let words = s.split(' ')
      if (words.length === 2) {
        this._first = words[0]
        this._last = words[1]
      }
    }
    
    get fullName() {
      return this._first + ' ' + this._last
    }
    
  }
  
  function NamedOne(first, last) {
    let result = new Name(first,last)
    return result
  }
  