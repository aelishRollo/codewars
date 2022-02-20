package kata

func SquareSum(numbers []int) int {
  result := 0  
  for i := 0; i < len(numbers); i++ {
      result += numbers[i] * numbers[i]
    }
  return result
}
