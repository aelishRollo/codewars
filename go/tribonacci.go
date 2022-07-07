package kata

func Tribonacci(signature [3]float64, n int) []float64 {
    if n == 0 {     //return an empty array if n is zero
      return []float64 {}
    }
  
    if n == 1 {
      return []float64 {signature[0]}   //return only the first element if n is 1
    }
    if n == 2 {
      return []float64 {signature[0],signature[1]}   //return only the first two elements if n is 2
    }
  
    A := []float64 {signature[0],signature[1],signature[2]}  //assign the signature to the beginning of
    for i := 0; i < n-3; i++ {    //the array. Then keep adding the sum of the last 3 elements of the array
      A = append(A, A[len(A)-1]+A[len(A)-2]+A[len(A)-3])  // until the result has n elements
    }
    return A
}
