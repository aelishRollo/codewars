func scoreFromWord(word string) int {  		//returns the score of a string, as an int. Score being the sum of letter scores, where a == 1, b == 2, etc
	result := 0
	for i := 0; i < len(word); i++ {
		fmt.Println(word[i] - 96)
		result += int(word[i] - 96)
	}
	return result
}
