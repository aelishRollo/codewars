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


func consequtiveNumsToRange(r []int, start int) string { //returns a the range with correct formatting, as a string
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
	return result
}



func Solution(list []int) string {
	result := ""
	a := 0
	b := 0
	err := errors.New("Oh no, looks like something went wrong. How tragic. This is an objectivly good error message. Very informative.")
	err1 := errors.New("Woe is me. Another error. Looks like you've really outdone yourself this time.")
	incrementValue := 0
	for i := 0; i < len(list)-1; i++ {
		if !(consequtive(list, i)) { //If there are not consecutive numbers, add this number to the result as is.
			result += strconv.Itoa(list[i])
			fmt.Println("Converted thing is")
			fmt.Println(strconv.Itoa(list[i]))
		} else { //If there are consectuive numbers, add the range to the result, & update the counter by the length of that range
			result += consequtiveNumsToRange(list, i)
			//a, err = strconv.Atoi(consequtiveNumsToRange(list, i))[2]
			//b, err1 = strconv.Atoi(consequtiveNumsToRange(list, i))[0]
			a, err = strconv.Atoi(consequtiveNumsToRange(list, i))
			b, err1 = strconv.Atoi(consequtiveNumsToRange(list, i))
			fmt.Println("a and b are: ")
			fmt.Println(a)
			fmt.Println(b)
			if (err != nil) || (err1 != nil) {

				incrementValue = a - b
			}
			i += incrementValue - 1
		}
		result += ","
	}
	return result
}


func main() {

	A := []int{0, 1, 2, 3, 4,6,7,8,65}

	fmt.Println(consequtive(A, 0))
	fmt.Println(consequtive(A, 5))
	fmt.Println(consequtiveNumsToRange(A, 5))
}

//scan through all the numbers and check for ranges. If there's a range, then append that range to the result. Otherwise just add each thing to the result

//How to detect a range? Have a function check if the next element is the incremented current element. That's one function, consequtive(n int) bool{}
// next have func range(r []int) s string{} which returns the range, or an empty string if it's not a range
//It would reutn a range by checking for consequtives, continuing as long as they are consequtive. Once a false is returned, make r[i] the end cap of the string, with the starting position the beginning
