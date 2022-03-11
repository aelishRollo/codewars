package kata

//The FindSummands function returns a slice of n consecutive odd integers whose sum equal n cubed. 
//for example, if n is 3, then the 3 consecutive odd integers that equal 3 ** 3 are 7,9,11. Because 7+9+11 == 3*3 == 27


//returns the sum  of the next n odd integers, starting from a given number called startNumber. This begins with
//the starting number
//This function is refactored to find the sum without using a loop, for time complexity reasons.
//It took a fair amount of playing around with algebra, and makes use of
//the formula for the sum of the first n even integers, which is n * (n + 1). Ask me about it if you're curious but it
//would probably take a pen and paper to explain it 
func SumOfNextNOddInts(startNumber, n int) int {
	result := (n * startNumber) + (n * (n - 1))
	return result
}

// returns a slice containing the next n odd integers, starting from a given number called startNumber. This begins
//with startNumber
func nextNOddInts(startNumber, n int) []int {
	result := []int{}
	for i := 0; i < n; i++ {
		result = append(result, startNumber+2*i)
	}
	return result
}

func FindSummands(n int) []int {
	result := []int{}
  i := 1
  keepGoing := true
  
	for keepGoing {

		if SumOfNextNOddInts(i, n) == n * n * n {
			result = nextNOddInts(i, n)
      keepGoing = false
		}
		i+= 2
	}
	return result
}



