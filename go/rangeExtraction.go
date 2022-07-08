// You can edit this code!
// Click here and start typing.
package main

import "fmt"

func consequtive(r []int, n int) bool { //check if the nth element of r and the (n+1)th are consequtive. Return a bool 
	result := false
	if r[n]+1 == r[n+1] {
		result = true
	}

	return result
}

func nextNconsequtive(r []int, i int) int {  //returns how many consequtive numbers there are, beginning with (including) r[i] 
	keepGoing := true
	result := 0
	n := i
	for keepGoing {
		if consequtive(r, n) {
			result++
			n++
		} else {
			keepGoing = false
		}
	}
	return result + 1
}

func main() {

	A := []int{0, 1, 2, 3, 4,6,7,8,65}

	fmt.Println(consequtive(A, 0))
}

//scan through all the numbers and check for ranges. If there's a range, then append that range to the result. Otherwise just add each thing to the result

//How to detect a range? Have a function check if the next element is the incremented current element. That's one function, consequtive(n int) bool{}
// next have func range(r []int) s string{} which returns the range, or an empty string if it's not a range
//It would reutn a range by checking for consequtives, continuing as long as they are consequtive. Once a false is returned, make r[i] the end cap of the string, with the starting position the beginning

