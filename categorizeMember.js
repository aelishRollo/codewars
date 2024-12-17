function openOrSenior(data) {
    let result = []
    //iterate through data
    for (let datum of data) {
      //if data[0] >= 55 && data[1] > 7
      if (datum[0] >= 55 && datum[1] > 7) {
         //result.push('Senior')
        result.push('Senior')
      } else {
          result.push('Open')
      }
    }
    return result
  }
