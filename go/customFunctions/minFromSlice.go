smallest := 0.0
	numSlice := []int{3, 4, 5, 8, 4, 12, 75, 4, 7}

	for i := 0; i < len(numSlice); i++ {
		if i == len(numSlice)-1 {
			break
		}
		smallest = math.Min(float64(numSlice[i]), float64(numSlice[i+1]))
	}
