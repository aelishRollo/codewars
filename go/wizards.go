
package main

import (
	"fmt"
)

var t bool
var j bool
var prev int
var next int

func power(str string) int { // Returns positive numbers for left side, negative ones for right side
	result := 0
	if str == "w" {
		result = 4
	} else if str == "p" {
		result = 3
	} else if str == "b" {
		result = 2
	} else if str == "s" {
		result = 1 //end of the left side things
	} else if str == "m" {
		result = -4
	} else if str == "q" {
		result = -3
	} else if str == "d" {
		result = -2
	} else if str == "z" {
		result = -1
	}
	return result
}

func isRightLetter(str string) bool {}

func isLeftLetter(str string) bool {}

func adjacentWizards(str, i) string {
	//i is which character of the string you're checking.
	//return either "left", "right", or "nothing" to signify which wizard is present
} 

//iterate through each char in the string. Maintain a total, adding each member to the result 

func main() {


	//for letters in string {
		//if isRightLetter(letter) && adjacentWizards(letter) == "left" {
			result += -power(letter)
		} else if isLeftLetter(letter) && adjacentWizards(letter) == "right" {
			result += -power(letter)
		} else result += power(letter)
		//result += power(letter)	
	//}

	a := "Its"
	b := "invogue"
	fmt.Println(power(a + b))
	fmt.Println(power("w"))
	fmt.Println(power("p"))
	fmt.Println(power("b"))
	fmt.Println(power("s"))
	fmt.Println(power("t"))
	fmt.Println(power("m"))
	fmt.Println(power("q"))
	fmt.Println(power("d"))
	fmt.Println(power("z"))
	fmt.Println(power("j"))
}

