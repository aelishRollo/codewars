package main

import (
	"fmt"
	"strconv"
)

func consequtive(r []int, n int) bool { //check if the nth element of r and the (n+1)th are consequtive. Return a bool
	result := false
	if r[n]+1 == r[n+1] {
		result = true
	}

	return result
}

func nextNconsequtive(r []int, i int) int { //returns how many consequtive numbers there are, beginning with (including) r[i]
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

func consequtiveNumsToRange(r []int, start int) (string, int) { //returns a the range with correct formatting, as a string, as well as an int which represents its length
	result := ""
	n := start
	first := 0
	last := 0
	for i := 0; i < nextNconsequtive(r, start); i++ {
		if i == 0 {
			first = r[n]
		} else if i == nextNconsequtive(r, start)-1 {
			last = r[n]
		}
		n++
	}
	result += strconv.Itoa(first)
	result += "-"
	result += strconv.Itoa(last)
	return result, last - first
}

func Solution(list []int) string {

	result := ""
	resultAdder := ""
	incrementValue := 0
	for i := 0; i < len(list)-1; i++ {
		if !(consequtive(list, i)) { //If there are not consecutive numbers, add this number to the result as is.
			result += strconv.Itoa(list[i])
			fmt.Println("Converted thing is")
			fmt.Println(strconv.Itoa(list[i]))
		} else { //If there are consectuive numbers, add the range to the result, & update the counter by the length of that range
			resultAdder, incrementValue = consequtiveNumsToRange(list, i)
			result += resultAdder
			i += incrementValue

		}
		if i < len(list)-1 {
			result += ","
		}
	}
	return result
}

func main() {

	A := []int{0, 1, 2, 3, 4, 6, 7, 8, 65, 66, 100, 101}

	fmt.Println(consequtive(A, 0))
	fmt.Println(consequtive(A, 5))
	fmt.Println(Solution(A))
}

//scan through all the numbers and check for ranges. If there's a range, then append that range to the result. Otherwise just add each thing to the result

//How to detect a range? Have a function check if the next element is the incremented current element. That's one function, consequtive(n int) bool{}
// next have func range(r []int) s string{} which returns the range, or an empty string if it's not a range
//It would reutn a range by checking for consequtives, continuing as long as they are consequtive. Once a false is returned, make r[i] the end cap of the string, with the starting position the beginning


//To fix:
//A. Having a runtime error when the input slice ends with a range
//B. Need make the final element of the result not end with a comma
//C. Need to make sure the range has a length of at least 3
