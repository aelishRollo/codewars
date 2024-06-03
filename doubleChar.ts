export function doubleChar(str: string): string{
    let result:string = ''
    for (let letter of str) {
      result += letter
      result += letter
    }
    return result
  }
  
  