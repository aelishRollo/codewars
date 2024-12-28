class Dinglemouse {
    constructor() {
      // Store the "final" values here
      this.name = null;
      this.age = null;
      this.sex = null;
      
      this.order = [];
    }
  
    setAge(age) {
      this.age = age;
      if (!this.order.includes('age')) {
        this.order.push('age');
      }
      return this;
    }
  
    setSex(sex) {
      this.sex = sex;
      if (!this.order.includes('sex')) {
        this.order.push('sex');
      }
      return this;
    }
  
    setName(name) {
      this.name = name;
      if (!this.order.includes('name')) {
        this.order.push('name');
      }
      return this;
    }
  
    hello() {
      
      const phrases = this.order.map(attr => {
        if (attr === 'age' && this.age !== null) {
          return `I am ${this.age}.`;
        } else if (attr === 'name' && this.name !== null) {
          return `My name is ${this.name}.`;
        } else if (attr === 'sex' && this.sex !== null) {
          return this.sex === 'M' ? `I am male.` : `I am female.`;
        }
        return null;
      }).filter(Boolean);
  
      phrases.unshift('Hello.');
      return phrases.join(' ');
    }
  }
  