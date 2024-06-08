export function rentalCarCost(d: number): number {
    let cost: number = 40 * d
    console.log(d)
    if (d >= 7) {
      cost = cost - 50
    } else if (d >= 3) {
      cost = cost - 20
    }
    return cost
  }
