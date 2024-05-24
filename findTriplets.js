function findTriplets(arr) {
    const count = {};
  
    // Count occurrences of each element
    for (let val of arr) {
      count[val] = (count[val] || 0) + 1;
      if (count[val] === 3) {
        return val; // Return the number immediately if it occurs three times
      }
    }
  
    return 0; // Return 0 if no such element is found
  }
  
  function removeTriplet(arr, triplet) {
    let result = [...arr];
    let removed = 0;
    
    // Remove only three occurrences of the triplet
    result = result.filter(num => {
      if (num === triplet && removed < 3) {
        removed++;
        return false;
      }
      return true;
    });
  
    return result;
  }
  
  function handleTriplets(num) {
    switch(num) {
      case 1: return 1000;
      case 6: return 600;
      case 5: return 500;
      case 4: return 400;
      case 3: return 300;
      case 2: return 200;
      default: return 0;
    }
  }
  
  function score(dice) {
    let result = 0;
    let A = [...dice];
  
    // Check for triplets
    let tripletNumberInArray = findTriplets(A); // find out if a number occurs thrice
    while (tripletNumberInArray !== 0) {
      result += handleTriplets(tripletNumberInArray); // add the appropriate score
      A = removeTriplet(A, tripletNumberInArray); // remove the triplets from the array
      tripletNumberInArray = findTriplets(A); // check for another triplet
    }
  
    // Check for single 1's and 5's
    for (let num of A) {
      if (num === 1) {
        result += 100;
      } else if (num === 5) {
        result += 50;
      }
    }
  
    return result;
  }
