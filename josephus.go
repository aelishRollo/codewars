// You can edit this code!
// Click here and start typing.
package main

import (
	"fmt"
	"strconv"
)


func deleteRuneFromString(s string, n int) string { //returns the same string without the nth rune
	result := ""
	for i := 0; i < len(s); i++ {
		if i != n {
			result += string(s[i])
		} else {

			fmt.Println(string(s[i]))
			fmt.Println("And n was")
			fmt.Println(i)
		}
	}
	return result
}

//number keeps being (3 +3i) % length(array)

func JosephusSurvivor(n, k int) int {
	var result int
	numbers := ""
	for i := 1; i < n+1; i++ {
		numbers += strconv.Itoa(i)
	} //This bit makes the array of starting numbers, representing each person
	fmt.Println(numbers)
	for i := 0; i < n; i++ {
		fmt.Println("")
		fmt.Println("Start")
		fmt.Println("the thing being deleted is")
		numbers = deleteRuneFromString(numbers, (2+2*i)%len(numbers))
		fmt.Println(numbers)
		fmt.Println("End")
		fmt.Println("")

	}

	fmt.Println(numbers)
	return result
}

func main() {
	JosephusSurvivor(7, 3)
	fmt.Println("Hello, 世界")
	fmt.Println(deleteRuneFromString("sunday", 3))
}
