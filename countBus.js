let number = (busStops) => {
    //declare number of people on bus
    let peopleOnBus = 0
    //iterate through the stops
    for (let stop of busStops) {
      //add amount of people entering bus
      peopleOnBus += stop[0]
      //subtract amount of people leaving bus
      peopleOnBus -= stop[1]
    }
    return peopleOnBus
    //return number of people on bus
  }
  /*
  Parameters:
  bustStops, an array of arrays. Each subarray represents the people entering, and exiting the bus
  
  Return Value:
  The number of people remaining on the bus at the end
  
  
  */
  