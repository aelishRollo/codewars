// Return the output array, and ignore all non-op characters
function parse( data ) {
  deadFish.n = 0;
  deadFish.result = [];
  
  for (let letter of data) {
    if (deadFish[letter]) {
      deadFish[letter]()
    }
  }
  return deadFish.result
}

const deadFish = {
  n: 0,
  result: [],
  i: () => deadFish.n++,
  d: () => deadFish.n--,
  s: () => deadFish.n = deadFish.n * deadFish.n,
  o: () => deadFish.result.push(deadFish.n)
};

/*
Parameters: 
a string, where each character represents an instruction

Return Value:
an array, consisting of values computed by the deadfish

Example:
parse("iiisdoso")
increments i up to 3,
squares i, making it 9,
decrements i to 8,
outputs i to the array
squares i to 64
outputs it to the array

Psuedocode:
just have make a deadfish object, with:
an i field, 
a result field,
an increment / decrement method, 
and an output to array method

*/
