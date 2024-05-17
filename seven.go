// You can edit this code!
// Click here and start typing.
package main

import (
	"fmt"
	"strconv"
)

func lastDigit(num int) int { //returns the last digit of an
	numAsString := strconv.Itoa(num)

	tempResult := numAsString[len(numAsString)-1]
	result, err := strconv.Atoi(string(tempResult))
	if err != nil {
		fmt.Println("Oh no, an error occurred!")
	}
	return result
}

func removeLastDigit(num int) int { 		//returns the int argument without its last digit
	numAsString := strconv.Itoa(num)
	tempResult := ""
	for i := 0; i < len(numAsString)-1; i++ {
		tempResult += string(numAsString[i])
	}
	result, err := strconv.Atoi(string(tempResult))
	if err != nil {
		fmt.Println("Oh no, an error occurred!")
	}
	return result
}

func isTwoDigitMultipleOfSeven(num int) bool { //returns a bool representing whether the argument is a two digit multiple of seven
	result := false
	if (num%7 == 0) && (num < 100) {
		result = true
	}
	return result
}


func main() {

	a := 123456

	fmt.Println(lastDigit(a) + 10)
}

