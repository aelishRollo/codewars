function getEvenNumbers(numbersArray){
    return numbersArray.filter((num) => {
      if (num % 2 === 0) {
        return true
      }
    })
  }
