package main

import "fmt"

func main() {

	endNum := 100
	A := []int{0, 1, 2, 3, 4, 5, 6, 7}

	for i := 0; i < endNum; i++ {
		fmt.Println(A[i%len(A)])  // this line loops through an array, wrapping back around if the index is exceeded
	}
}

