package main

import "fmt"


//returns the sum  of the next n odd integers, starting from a given number called startNumber. This begins with
//the starting number
func SumOfNextNOddInts(startNumber, n int) int {
	result := startNumber
	for i := 1; i < n; i++ {
		result += startNumber + 2*i
	}
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


func FindSummands(n int) []int { // for some reasons this doesn't return anything. Something within the for loop is broken
	result := []int{}
	for i := 0; i < n; i++ {
		if SumOfNextNOddInts(i, n) == n*n*n {
			result = nextNOddInts(i, n)
			fmt.Println("YOOOO")
		}
	}
	return result
}


func main() {
	fmt.Println(FindSummands(3)) //just a test, should return 7,9,11
}


