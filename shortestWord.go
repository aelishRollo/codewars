package main

import (
	"fmt"
	"math"
	"strings"
)


//this function returns an incorrect value, sometimes. The case I've noticed is when the final word in the input string
//is of length 5. For some reason it returns 5 rather than 3.
//I believe this function is 95% there, and with some debugging it'll be ready.  

func find_short(sampleSentence string) int {

	numSlice := []int{}

	newSlice := strings.Split(sampleSentence, " ") //this splits the input string into words, each of which can be
	//accessed using the the indices of the slice

	for i := 0; i < len(newSlice); i++ {
		numSlice = append(numSlice, len(newSlice[i]))
	}

	//numSlice is the slice of numbers to search. Each number is the length of a string

	smallest := 0.0

	for i := 0; i < len(numSlice); i++ {
		if i == len(numSlice)-1 {
			break
		}
		smallest = math.Min(float64(numSlice[i]), float64(numSlice[i+1]))
	}

	return int(smallest)
}

// 

func main() {

	sampleSentence := "should test that the solution returns the correct dungg"
	fmt.Println(find_short(sampleSentence))

}

