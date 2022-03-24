package kata

import "fmt"

func ArrayIsEven(A []int) bool {
	result := false
	numberOfEvenInts := 0

	if A[0]%2 == 0 {
		numberOfEvenInts++
	}

	if A[1]%2 == 0 {
		numberOfEvenInts++
	}

	if A[2]%2 == 0 {
		numberOfEvenInts++
	}

	if numberOfEvenInts >= 2 {
		result = true
	}

	return result
}


func findOddInt(A []int) int {
	result := 0
	for i := 0; i < len(A); i++ {
		if (A[i]%2 == 1) || A[i] % 2 == -1 {
			result = A[i]
		}
	}
	return result
}

func findEvenInt(A []int) int {
	result := 0
	for i := 0; i < len(A); i++ {
		if A[i]%2 == 0 {
			result = A[i]
		}
	}
	return result
}

func FindOutlier(integers []int) int {
  fmt.Println(integers)
	result := 0
	if ArrayIsEven(integers) {
		result = findOddInt(integers)
	} else {
		result = findEvenInt(integers)
	}
  return result
}

