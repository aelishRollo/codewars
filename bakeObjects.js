function cakes(recipe, available) {
    //initialize count
    let count = 0
    //reduce each amount in available by the amount in recipe
    let keepGoing = true
    while (keepGoing) {
      for (let ingredient in recipe) {
        if (available[ingredient] < recipe[ingredient] || available[ingredient] === undefined) {
          //if any of them is zero or below, return count
          return count
        }
        available[ingredient] -= recipe[ingredient]
      }
      //increment count
      count++
    }
  }
  
  /*
  Parameters:
  recipe and available, both objects whose fields are ingredients, and their quantities
  
  Return Value:
  an integer, representing how many times the recipe can be made
  
  Example:
  cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}) => 2, because
  the recipe needs 500 flour and there is only 1200 flour
  */
