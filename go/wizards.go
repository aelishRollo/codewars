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

func isRightLetter(str string) bool {
	result := false
	if (str == "m") || (str == "q") || (str == "d") || (str == "z") || (str == "j") { //returns whether the letter is a letter in the Right group
		result = true
	}
	return result

}

func isLeftLetter(str string) bool { //returns whether the letter is a letter in the Left group
	result := false
	if (str == "w") || (str == "p") || (str == "b") || (str == "s") || (str == "t") {
		result = true
	}
	return result
}

func adjacentWizards(str string, i int) string {
	//i is which character of the string you're checking.
	//return either "left", "right", or "none" to signify which wizard is present
	result := "none"
	var left bool
	var right bool

	//i is which character of the string you're checking.
	//return either "left", "right", or "none" to signify which wizard is present

	if (string(str[i-1]) == "t") || (string(str[i+1]) == "t") { //check if either the previous or next entry is the left wizard
		left = true
	}
	if (string(str[i-1]) == "j") || (string(str[i+1]) == "j") { //check if either the previous or next entry is the right wizard
		right = true
	}

	if left {
		result = "left"
	}
	if right {
		result = "right"
	}
	if left && right {
		result = "none"
	}
	if !(left || right) {
		result = "none"
	}
	return result
}

//iterate through each char in the string. Maintain a total, adding each member to the result. Otherwise
//Now that wizards are able to be taken care of (edge case in case the second rune is a wizard, need to take care of that), we can write this loop which sums the powers to find the victors.

func main() {
	//totalPower := 0
	str := "itsinjcandlezs"
	result := 0

	for i := 0; i < len(str); i++ {

		if i == 0 { //Edge case for first character
			if isRightLetter(string(str[0])) && str[1] == "t" {
				result += -power(str[0])
			} else if isLeftLetter(string(str[0])) && str[1] == "j" {
				result += -power(str[0])
			}
		} else if i == len(str)-1 { //Edge case for last character
			if isRightLetter(string(str[len(str)-1])) && str[len(str)-2] == "t" {
				result += -power(str[0])
			} else if isLeftLetter(string(str[len(str)-1])) && str[len(str)-2] == "j" {
				result += -power(str[0])
			}
		} else if isRightLetter(string(str[i])) && adjacentWizards(string(str[i])) == "left" {
			result += -power(str[i])
		} else if isLeftLetter(string(str[i])) && adjacentWizards(string(str[i])) == "right" {
			result += -power(str[i])
		} else {
			result += power(str[i])
		}

		fmt.Println(result)

	}

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
