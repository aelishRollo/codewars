export const distinct = (a: number[]): number[] => {
    let result:number[] = []
    for (let num of a) {
      if (!result.includes(num)) {
        result.push(num)
      }
   } 
    return result
  }
