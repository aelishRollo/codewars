package main

import "fmt"


//returns the sum  of the next n odd integers, starting from a given number called startNumber. This begins with
//the starting number
func SumOfNextNOddInts(startNumber, n int) int {
	result := startNumber
	for i := 1; i < n; i++ {
		result += startNumber + 2*i
		fmt.Println(result)
	}
	return result
}


func main() {
	fmt.Println(SumOfNextNOddInts(5, 3))  //just a test
}


