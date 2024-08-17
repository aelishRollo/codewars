function queueTime(customers, n) { 
    let slots = [];
    let totalTime = 0;
    
    for (let i = 0; i < n; i++) {  // initialize slots with zero
        slots.push(0);
    }
    
    let loadSlots = () => {  // load the slots. Should be called on setup, and whenever a slot is empty
        for (let i = 0; i < slots.length; i++) {
            if (slots[i] === 0 && customers.length > 0) { // only load if there are still customers
                slots[i] = customers.shift();
            }
        }
    }
    
    let checkoutCustomers = () => {  // increment totalTime, and decrement each customer's time till one is zero
        while (true) {
            loadSlots();  // load any available slots
  
            if (slots.every(slot => slot === 0)) {  // if all slots are empty, break the loop
                break;
            }
  
            totalTime += 1;  // increment time
  
            for (let i = 0; i < slots.length; i++) {
                if (slots[i] > 0) {
                    slots[i] -= 1;  // decrement time in each slot
                }
            }
        }
    }
    
      loadSlots();
      checkoutCustomers();
      return totalTime;  // output the total time
  }
  
  
  
  
  
  /*
  Parameters: 
  customers: an array of integers representing the time each customer takes to check out
  n: an integer which represents how many checkout tills there are
  
  Response: 
  an integer which represents the total time required
  
  Example:
  [10,2,3,3] and n=2
  
  slot 1 is 10 slot 2 is 2 
  we decrement each until one is zero, while incrementing the timer
  then we load another from customers
  We do this until customers and each slot is zero
  
  
  Psuedocode:
  
  create n slots
  load from customers
  while no slots contain zero, decrement them all, increment result
  if a slot becomes zero, add another if possible
  
  */
