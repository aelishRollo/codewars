function operation(a, b) {
  
    if (a === b) return 0;
    
    // We will use BFS: a queue of [value, distance]
    const queue = [a];
    // Map to keep track of visited states and the steps to reach them
    const visited = new Map();
    visited.set(a, 0);
    
    // Because b is a power of 2, going above 2 * max(a, b) typically won't be optimal
    const maxVal = 2 * Math.max(a, b);
    
    while (queue.length > 0) {
      const current = queue.shift();
      const steps  = visited.get(current);
      
      // Generate possible next states:
      let nextStates = [];
      
      // 1) If current is even, we can do current/2
      if (current % 2 === 0) {
        nextStates.push(current / 2);
      } else {
        // 2) If current is odd, we can do (current - 1)/2
        //    (since (current - 1) is divisible by 2)
        nextStates.push((current - 1) / 2);
      }
      
      // 3) We can always do current * 2
      nextStates.push(current * 2);
      
      // Explore each possible next state
      for (const nxt of nextStates) {
        // If we've reached b, return steps + 1
        if (nxt === b) return steps + 1;
        
        // If nxt is within bounds and not yet visited, enqueue it
        if (nxt > 0 && nxt <= maxVal && !visited.has(nxt)) {
          visited.set(nxt, steps + 1);
          queue.push(nxt);
        }
      }
    }
    return -1;
  }
  