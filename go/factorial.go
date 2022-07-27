package kata

func Factorial(n int) int {
  result := 1
	for i := n; i > 0; i-- {    //multiply the result by n, then n-1, etc.
    result = result * i 
  }
  return result
}
