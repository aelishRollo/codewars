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

func main() {

	a := 123456

	fmt.Println(lastDigit(a) + 10)
}

