import (
	"fmt"
	"strconv"
)



func isNumeric(a byte) bool {  // given a byte, returns a boolean representing whether it's a 0-9 number or not
	result := false
	if a == 48 || a == 49 || a == 50 || a == 49 || a == 51 || a == 52 || a == 53 || a == 54 || a == 55 || a == 56 {
		result = true
	}

	return result

}



func getNumFromString(a string) int { // given a string, returns the numbers within it as an int. Assumes only one set of numbers in a string
	numbers := ""
	for i := 0; i < len(a); i++ {
		if isNumeric(a[i]) {
			numbers += string(a[i])
		}
	}
	result, err := strconv.Atoi(numbers)
	if err != nil {
		fmt.Println("Oh no, an error occured.")
	}
	return result
}
