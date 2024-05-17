// You can edit this code!
// Click here and start typing.
package main

import (
	"fmt"
	"strings"
)

func scoreFromWord(word string) int { //returns the score of a string, as an int. Score being the sum of letter scores, where a == 1, b == 2, etc
	result := 0
	for i := 0; i < len(word); i++ {
		result += int(word[i] - 96)
	}
	return result
}


func High(s string) string {
    

	return "pleura necromancer"
}

//for each word in the array, create a dictionary entry associating its text with its score
//then iterate through and find the highest score, returning the associated string

func main() {

	m := make(map[string]int) //make the dictionary with string typed keys and int types values

	str := "looking through your eyes from a distance fit tightly like a dovetail"
	stringArray := strings.Fields(str)
	for i := 0; i < len(stringArray); i++ {
		m[stringArray[i]] = scoreFromWord(stringArray[i])
	}

	fmt.Println(m)
}


// just need to create a slice of all the values, then get the max of that slice
//then return the string associated with that int
