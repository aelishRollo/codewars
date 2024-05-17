// this makes the nth letter capitalized
package main

import (
	"fmt"
	"strings"
)


func makeNthLetterCap(n int, word string) string {
	result := ""
	for i := 0; i < len(word); i++ {
		if i == n {
			result += strings.ToUpper(string(word[i]))
		} else {
			result += string(word[i])
		}
	}
	return result
}

func main() {
	a := "this is a test sentence"
	for i :=0; i < 8; i++ {
		fmt.Println(makeNthLetterCap(i,a))
	}
}
