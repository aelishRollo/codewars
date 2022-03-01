import "strings"

sampleSentence := "bitcoin take over the world IDK maybe"

func find_short(sampleSentence):
	result := []

	newSlice := strings.Split(sampleSentence, " ") //this splits the input string into words, each of which can be
							//accessed using the the indices of the slice

	for i := 0; i < len(newSlice); i++ {
		result = append(result, len(newSlice[i]))
	}

