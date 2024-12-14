class Event {
    constructor() {
      this.handlers = []
    }
    
    subscribe(func) {
      this.handlers.push(func)
    }
    unsubscribe(func) {
      this.handlers = this.handlers.filter((handler) => handler !== func)
    }
    emit(...args) {
      this.handlers.forEach(handler => handler(...args));
    }
  }
