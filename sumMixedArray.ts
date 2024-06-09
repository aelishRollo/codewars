export function sumMix(x: any[]): number {
    return x.reduce((accum,currentNum) => accum + Number(currentNum),0) 
  }
