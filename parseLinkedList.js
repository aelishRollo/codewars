function parse(string) {
    let vals = string.split(' ').filter((val) => val !== '->');
    vals = vals.map((val) => (val === 'null' ? null : Number(val)));
  
    if (vals[0] === null) return null;
  
    // Create the head of the linked list
    let head = new Node(vals[0]);
    let current = head;
  
    // Iterate through the remaining values and build the list
    for (let i = 1; i < vals.length - 1; i++) {
      current.next = new Node(vals[i]);
      current = current.next;
    }
  
    return head;
  }
  