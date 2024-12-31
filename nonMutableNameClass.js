


class OnceNamedOne {
    constructor(first, last) {
      this._firstName = first;
      this._lastName = last;
      this._fullName = `${first} ${last}`;
    }
  
    set firstName(val) {
      this._firstName = this._firstName;
    }
  
    set lastName(val) {
      this._lastName = this._lastName;
    }
  
    set fullName(val) {
      this._fullName = this._fullName;
    }
  
    get firstName() {
      return this._firstName;
    }
  
    get lastName() {
      return this._lastName;
    }
  
    get fullName() {
      return this._fullName;
    }
  }
  
  function OnceNamedOne(first, last) {
    return new OnceNamedOne(first, last);
  }
