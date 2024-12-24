function stringify(list) {
    if (list === null) {
      return 'null'
    }
    let values = []
    let keepGoing = true
    let currentVal = list
    while (currentVal !== null) {
      values.push(currentVal.data)
      currentVal = currentVal.next
    }
    let result = values.join(' -> ')
    result += ' -> null'
    return result 
    }
  /*
  Parameters:
  list, which is a linked list
  
  Return:
  the list, represented as a string
  
  Example: new Node(0, new Node(1, new Node(4, new Node(9, new Node(16)))))
  
  */
  
  