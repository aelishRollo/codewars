export function powersOfTwo(n:number):number[]{
    let result:number[] = []
    for (let i = 0; i <= n; i++) {
      result.push(Math.pow(2,i))
    }
    return result
  }
