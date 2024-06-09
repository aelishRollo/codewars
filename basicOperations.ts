export function basicOp(operation: string, value1: number, value2: number): number {
    let result = 0
    if (operation === '+') {
      result = value1 + value2
    } else if (operation === '-') {
      result = value1 - value2
    } else if (operation === '*') {
      result = value1 * value2 
    } else if (operation === '/') {
      result = value1 / value2 
    }
    return result
  }
